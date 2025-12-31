"use client";

import { useEffect, useRef, useState } from "react";

export function useInView<T extends HTMLElement>(
    options: IntersectionObserverInit = { threshold: 0.15 }
) {
    const ref = useRef<T | null>(null);
    const [isVisible, setIsVisible] = useState(false);
    const hasAnimated = useRef(false);

    useEffect(() => {
        if (!ref.current || hasAnimated.current) return;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                hasAnimated.current = true;
                setIsVisible(true);
                observer.disconnect();
            }
        }, options);

        observer.observe(ref.current);

        return () => observer.disconnect();
    }, [options]);

    return { ref, isVisible };
}
