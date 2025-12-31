// app/providers/AptabaseRouteTracker.tsx
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useAptabase } from "@aptabase/react";

export default function AptabaseRouteTracker() {
    const { trackEvent } = useAptabase();
    const pathname = usePathname();

    useEffect(() => {
        if (!pathname) return;

        trackEvent("page_view", {
            path: pathname,
        });
    }, [pathname, trackEvent]);

    return null;
}
