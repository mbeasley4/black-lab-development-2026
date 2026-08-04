/**
 * This route is responsible for the built-in authoring environment using Sanity Studio.
 * All routes under your studio path is handled by this file using Next.js' catch-all routes:
 * https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
 *
 * You can learn more about the next-sanity package here:
 * https://github.com/sanity-io/next-sanity
 */

import { NextStudio } from 'next-sanity/studio'
import config from '../../../sanity.config'

// Not force-static: the shared root layout reads headers() for the CSP
// nonce (components/GoogleTagManager.tsx, components/JsonLd.tsx), which
// conflicts with force-static. Studio itself is a client-rendered SPA, so
// this only affects the initial HTML shell.
export { metadata, viewport } from 'next-sanity/studio'

export default function StudioPage() {
  return (
    <div style={{ paddingTop: '72px' }}>
      <NextStudio config={config} />
    </div>
  )
}
