'use client'

import { useEffect, useState } from 'react'
import {
  LineChart, Line,
  BarChart, Bar,
  XAxis, YAxis,
  Tooltip, Legend,
  ResponsiveContainer
} from 'recharts'

import {
  parseMonitorLogs,
  SiteMetric,
  SiteWarnings,
  SiteKeywordStatus
} from '@/lib/parseLogs'

function formatToLocalTime(timestamp: string) {
  const iso = timestamp.replace(' ', 'T') + 'Z'
  const date = new Date(iso)

  return new Intl.DateTimeFormat(undefined, {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short'
  }).format(date)
}

const tooltipStyle = {
  backgroundColor: 'white',
  border: '1px solid #e5e7eb',
  borderRadius: '6px',
  color: '#000',
  fontSize: '12px'
}

export default function MonitorPage() {
  const [data, setData] = useState<SiteMetric[]>([])
  const [warnings, setWarnings] = useState<SiteWarnings>({})
  const [keywordStatus, setKeywordStatus] = useState<SiteKeywordStatus>({})

  useEffect(() => {
    fetch('/api/monitor/log')
      .then(res => res.text())
      .then(raw => {
        const parsed = parseMonitorLogs(raw)
        setData(parsed.metrics)
        setWarnings(parsed.lastWarnings)
        setKeywordStatus(parsed.lastKeywordStatus)
      })
  }, [])

  const sites = [...new Set(data.map(d => d.site))]

  return (
    <main className="w-full bg-black text-white">

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-neutral-900">
        <div className="absolute inset-0 bg-black/85" />
        <div className="relative z-10 h-[260px] flex items-center">
          <div className="mx-auto max-w-[1500px] px-6 w-full">
            <h1 className="text-4xl md:text-6xl font-semibold mb-4">
              Website Health Dashboard
            </h1>
            <p className="text-neutral-300">
              Live uptime, keyword verification, and asset integrity monitoring.
            </p>
          </div>
        </div>
      </section>

      {/* DASHBOARD LAYOUT */}
      <section className="py-16">
        <div className="mx-auto max-w-[1500px] px-6 grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10">

          {/* ========== LEFT RAIL ========== */}
          <aside className="space-y-3">
            <h3 className="text-xs uppercase tracking-wider text-neutral-500 mb-3">
              Sites
            </h3>

            {sites.map(site => {
              const ok = keywordStatus[site]

              return (
                <a
                  key={site}
                  href={`#${site}`}
                  className="flex items-center gap-3 rounded-md px-3 py-2 bg-neutral-950 border border-neutral-800 hover:border-neutral-600 transition"
                >
                  {/* Status Dot */}
                  <span
                    className={`h-3 w-3 rounded-full ${
                      ok ? 'bg-green-400' : 'bg-red-500'
                    }`}
                  />

                  <span className="text-sm text-neutral-200 truncate">
                    {site.replace('https://', '')}
                  </span>
                </a>
              )
            })}
          </aside>

          {/* ========== MAIN CONTENT ========== */}
          <div className="space-y-10">
            {sites.map(site => {
              const siteData = data.filter(d => d.site === site)
              const lastWarning = warnings[site]

              return (
                <div
                  key={site}
                  id={site}
                  className="rounded-xl p-6 space-y-6 bg-neutral-950 border border-neutral-800 shadow-sm scroll-mt-24"
                >

                  {/* Card Header */}
                  <div className="flex items-center justify-between">
                    <h2 className="font-medium text-neutral-100">
                      {site}
                    </h2>

                    <div className="text-xs">
                      {lastWarning ? (
                        <span className="text-orange-400 font-medium">
                          Last warning: {formatToLocalTime(lastWarning)}
                        </span>
                      ) : (
                        <span className="text-green-400 font-medium">
                          No warnings recorded
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Charts */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* Response Time */}
                    <div>
                      <p className="text-sm font-medium text-neutral-300 mb-3">
                        Response Time (seconds)
                      </p>

                      <ResponsiveContainer width="100%" height={260}>
                        <LineChart data={siteData}>
                          <XAxis dataKey="timestamp" hide />
                          <YAxis />
                          <Tooltip
                            labelFormatter={(label) => formatToLocalTime(label)}
                            contentStyle={tooltipStyle}
                          />
                          <Legend />
                          <Line
                            type="monotone"
                            dataKey="response_time"
                            name="Response Time"
                            stroke="#3b82f6"
                            strokeWidth={2}
                            dot={false}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>

                    {/* Broken Assets */}
                    <div>
                      <p className="text-sm font-medium text-neutral-300 mb-3">
                        Broken Asset Events
                      </p>

                      <ResponsiveContainer width="100%" height={260}>
                        <BarChart data={siteData}>
                          <XAxis dataKey="timestamp" hide />
                          <YAxis allowDecimals={false} />
                          <Tooltip
                            labelFormatter={(label) => formatToLocalTime(label)}
                            contentStyle={tooltipStyle}
                          />
                          <Legend />
                          <Bar
                            dataKey="broken_assets"
                            name="Broken Assets"
                            fill="#ef4444"
                            radius={[4, 4, 0, 0]}
                          />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>

                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>
    </main>
  )
}
