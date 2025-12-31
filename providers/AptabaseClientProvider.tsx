// app/providers/AptabaseClientProvider.tsx
"use client";

import { AptabaseProvider } from "@aptabase/react";
import AptabaseRouteTracker from "./AptabaseRouteTracker";

export default function AptabaseClientProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <AptabaseProvider appKey={process.env.NEXT_PUBLIC_APTABASE_KEY!}>
            <AptabaseRouteTracker />
            {children}
        </AptabaseProvider>
    );
}
