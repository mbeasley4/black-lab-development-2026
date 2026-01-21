import { NextResponse } from 'next/server'
import fs from 'fs/promises'

export async function GET() {
  try {
    // Absolute path to your log file
    const logPath = '/opt/site-monitor/logs/website_monitor.log'

    const content = await fs.readFile(logPath, 'utf-8')

    return new NextResponse(content, {
      status: 200,
      headers: {
        'Content-Type': 'text/plain'
      }
    })
  } catch (error) {
    return new NextResponse('Log file not found', { status: 404 })
  }
}
