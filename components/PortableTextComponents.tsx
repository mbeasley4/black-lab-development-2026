import type { PortableTextComponents } from "next-sanity";

type TableValue = {
    rows?: { cells?: string[] }[];
};

function PortableTextTable({ value }: { value: TableValue }) {
    const rows = value?.rows ?? [];
    if (rows.length === 0) return null;
    const [header, ...body] = rows;

    return (
        <div className="not-prose my-8">
            <p className="mb-2 text-xs text-slate-500 sm:hidden">Swipe to see all columns →</p>
            <div className="overflow-x-auto rounded-lg border border-slate-800">
                <table className="w-full min-w-max border-collapse text-sm">
                    <thead>
                        <tr className="bg-slate-900/60">
                            {header.cells?.map((cell, i) => (
                                <th
                                    key={i}
                                    className={`border-b border-slate-800 px-4 py-3 text-left font-semibold text-white ${
                                        i === 0
                                            ? "sticky left-0 z-10 bg-slate-900 shadow-[2px_0_4px_rgba(0,0,0,0.3)]"
                                            : "min-w-32"
                                    }`}
                                >
                                    {cell}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {body.map((row, i) => (
                            <tr key={i} className="group even:bg-slate-900/30">
                                {row.cells?.map((cell, j) => (
                                    <td
                                        key={j}
                                        className={`border-b border-slate-800/60 px-4 py-3 text-slate-300 ${
                                            j === 0
                                                ? "sticky left-0 z-10 bg-[#0b0b0c] shadow-[2px_0_4px_rgba(0,0,0,0.3)] group-even:bg-slate-900/30"
                                                : "min-w-32"
                                        }`}
                                    >
                                        {cell}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export const portableTextComponents: PortableTextComponents = {
    types: {
        table: PortableTextTable,
    },
};
