"use client";

import { useEffect, useRef } from "react";

type HubspotFormProps = {
    portalId: string;
    formId: string;
    region?: string;
};

export default function HubspotForm({
    portalId,
    formId,
    region = "na1",
}: HubspotFormProps) {
    const formRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!formRef.current) return;

        // Prevent duplicate form loads
        if ((window as any).hbspt) {
            (window as any).hbspt.forms.create({
                region,
                portalId,
                formId,
                target: `#hubspot-form-${formId}`,
            });
            return;
        }

        const script = document.createElement("script");
        script.src = "https://js.hsforms.net/forms/v2.js";
        script.async = true;
        script.onload = () => {
            (window as any).hbspt.forms.create({
                region,
                portalId,
                formId,
                target: `#hubspot-form-${formId}`,
            });
        };

        document.body.appendChild(script);
    }, [portalId, formId, region]);

    return <div id={`hubspot-form-${formId}`} ref={formRef} />;
}
