"use client";

import { ReactNode } from "react";
import { useInView } from "./useInView";

export default function AnimatedCard({
    children,
    delay = 0,
}: {
    children: ReactNode;
    delay?: number;
}) {
    const { ref, isVisible } = useInView<HTMLDivElement>();

    return (
        <div
            ref={ref}
            style={{ transitionDelay: `${delay}ms` }}
            className={`h-full transition-all duration-700 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      `}
        >
            {children}
        </div>
    );
}
