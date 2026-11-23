import { BadgeDollarSign, Boxes, Megaphone, MonitorCog, UserRound, UsersRound, type LucideIcon } from "lucide-react";

const SOURCES: { label: string; detail: string; icon: LucideIcon }[] = [
  { label: "Customers", detail: "CRM and sales", icon: UserRound },
  { label: "Finance", detail: "Accounting and budgets", icon: BadgeDollarSign },
  { label: "Operations", detail: "Projects and resources", icon: Boxes },
  { label: "Marketing", detail: "Campaigns and leads", icon: Megaphone },
  { label: "People", detail: "Teams and performance", icon: UsersRound },
  { label: "Systems", detail: "Applications and data", icon: MonitorCog },
];
const LAYER = ["Integrations", "Centralized data", "Reporting", "Automation"];
const ROLES = ["Leadership", "Department Managers", "Employees"];
const OUTCOMES = ["Visibility", "Accountability", "Coordination", "Action"];

export const ORGANIZATIONAL_VISIBILITY_ALT =
  "Diagram showing how customer, financial, operational, marketing, employee, and application data connect through integrations, centralized reporting, and automation to provide leadership, managers, and employees with information for better decisions.";

/** Three lines that converge on (or fan out from) the centre, with arrowheads. */
function Connector({ direction }: { direction: "converge" | "fan" | "merge" }) {
  const fan = direction === "fan";
  return (
    <>
      {/* Small screens: one arrow */}
      <svg viewBox="0 0 24 32" className="mx-auto my-2 block h-8 w-6 text-[#78841f] sm:hidden" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M12 0v28M5 21l7 8 7-8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <svg viewBox="0 0 600 48" preserveAspectRatio="none" className="hidden h-12 w-full text-[#78841f] sm:block" fill="none" stroke="currentColor" strokeWidth="2.5">
        {[100, 300, 500].map((x) =>
          fan ? (
            <path key={x} d={`M300 0 C300 26 ${x} 14 ${x} 38`} vectorEffect="non-scaling-stroke" />
          ) : (
            <path key={x} d={`M${x} 0 C${x} 26 300 14 300 38`} vectorEffect="non-scaling-stroke" />
          ),
        )}
        {(fan ? [100, 300, 500] : [300]).map((x) => (
          <path key={x} d={`M${x - 7} 36 L${x} 46 L${x + 7} 36`} vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" />
        ))}
      </svg>
    </>
  );
}

function Stage({ number, label }: { number: number; label: string }) {
  return (
    <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-[#3e4c61]">
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0f2138] text-[11px] text-[#d3de5c]">{number}</span>
      {label}
    </p>
  );
}

/**
 * "From Disconnected Data to Organizational Visibility". Plain HTML and inline
 * SVG, so it stays crisp and reflows on small screens. Exposed to assistive
 * tech as a single image with a full description.
 */
export default function OrganizationalVisibilityDiagram({ alt = ORGANIZATIONAL_VISIBILITY_ALT }: { alt?: string }) {
  return (
    <figure className="not-prose my-12 overflow-hidden rounded-2xl border border-neutral-800 bg-[#f1f4f8] p-5 sm:p-8">
      <figcaption className="mb-7 border-l-4 border-[#a8b522] pl-4">
        <span className="block font-(family-name:--font-heading) text-xl font-bold leading-tight text-[#0f2138] sm:text-2xl">
          From Disconnected Data to Organizational Visibility
        </span>
        <span className="mt-1 block text-sm text-[#3e4c61] sm:text-base">
          The information architecture behind better business decisions.
        </span>
      </figcaption>

      <div role="img" aria-label={alt}>
        <Stage number={1} label="Business information sources" />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {SOURCES.map(({ label, detail, icon: Icon }) => (
            <div key={label} className="rounded-xl border border-[#c9d2de] bg-[#ffffff] p-3.5 sm:p-4">
              <div className="flex items-center gap-2.5">
                <Icon className="h-5 w-5 shrink-0 text-[#66711a]" strokeWidth={1.75} />
                <span className="text-base font-bold text-[#0f2138]">{label}</span>
              </div>
              <span className="mt-1 block text-[13px] leading-snug text-[#3e4c61] sm:text-sm">{detail}</span>
            </div>
          ))}
        </div>

        <Connector direction="converge" />

        <div className="rounded-xl bg-[#0f2138] px-4 py-6 text-center sm:px-6">
          <span className="flex items-center justify-center gap-2.5 font-(family-name:--font-heading) text-lg font-bold tracking-wide text-[#ffffff] sm:text-xl">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#a8b522] text-[11px] tracking-normal text-[#0f2138]">2</span>
            CONNECTED INFORMATION
          </span>
          <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {LAYER.map((item) => (
              <span key={item} className="rounded-lg bg-[#ffffff]/10 px-2 py-2.5 text-sm font-semibold text-[#ffffff]">{item}</span>
            ))}
          </div>
        </div>

        <Connector direction="fan" />

        <div className="rounded-xl border border-[#c9d2de] bg-[#e1e6ee] p-4 sm:p-5">
          <Stage number={3} label="Role-based visibility" />
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {ROLES.map((role) => (
            <div key={role} className="flex min-h-14 items-center justify-center rounded-xl border-2 border-[#0f2138] bg-[#ffffff] px-3 py-3 text-center text-base font-bold text-[#0f2138]">
              {role}
            </div>
          ))}
          </div>
        </div>

        <Connector direction="merge" />

        <div className="rounded-xl bg-[#a8b522] px-4 py-5 text-center text-[#0f2138]">
          <span className="block font-(family-name:--font-heading) text-lg font-bold tracking-wide sm:text-xl">
            BETTER-INFORMED DECISIONS
          </span>
          <span className="mt-2 flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-sm font-semibold">
            {OUTCOMES.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </span>
        </div>
      </div>
    </figure>
  );
}
