export type SiteMetric = {
  timestamp: string
  site: string
  response_time: number
  broken_assets: number
  status: number
}

export type SiteWarnings = Record<string, string | null>

/** NEW: keyword FOUND / NOT FOUND status */
export type SiteKeywordStatus = Record<string, boolean>

export function parseMonitorLogs(raw: string): {
  metrics: SiteMetric[]
  lastWarnings: SiteWarnings
  lastKeywordStatus: SiteKeywordStatus
} {
  const lines = raw.split('\n')

  const metrics: SiteMetric[] = []
  const lastWarnings: SiteWarnings = {}
  const lastKeywordStatus: SiteKeywordStatus = {}

  let currentTimestamp = ''
  let currentSite = ''

  for (const line of lines) {

    // Timestamp
    const tsMatch = line.match(/^(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})/)
    if (tsMatch) currentTimestamp = tsMatch[1]

    // Site being checked
    const siteMatch = line.match(/Checking site: (https?:\/\/[^\s]+)/)
    if (siteMatch) currentSite = siteMatch[1]

    // Performance
    const perfMatch = line.match(/response_time=([\d.]+)s \| status=(\d+)/)
    if (perfMatch && currentSite) {
      metrics.push({
        timestamp: currentTimestamp,
        site: currentSite,
        response_time: parseFloat(perfMatch[1]),
        broken_assets: 0,
        status: parseInt(perfMatch[2])
      })
    }

    // Resource check
    const resourceMatch = line.match(/broken=(\d+)/)
    if (resourceMatch && currentSite) {
      const last = metrics[metrics.length - 1]
      if (last && last.site === currentSite) {
        last.broken_assets = parseInt(resourceMatch[1])
      }
    }

    // Keyword check
    // Example: checks.keywords: Keyword FOUND for https://whole30.com
    const keywordMatch = line.match(/checks\.keywords: Keyword (FOUND|NOT FOUND) for (https?:\/\/[^\s]+)/)
    if (keywordMatch) {
      const site = keywordMatch[2]
      lastKeywordStatus[site] = keywordMatch[1] === 'FOUND'
    }

    // Unhealthy warning
    const unhealthyMatch = line.match(/Unhealthy site (https?:\/\/[^\s]+)/)
    if (unhealthyMatch) {
      const site = unhealthyMatch[1]
      lastWarnings[site] = currentTimestamp

      // Safety: ensure broken_assets > 0 if unhealthy logged
      const last = [...metrics].reverse().find(m => m.site === site)
      if (last && last.broken_assets === 0) {
        last.broken_assets = 1
      }
    }
  }

  return { metrics, lastWarnings, lastKeywordStatus }
}
