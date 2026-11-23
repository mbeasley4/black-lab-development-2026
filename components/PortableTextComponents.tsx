import type { PortableTextComponents } from "next-sanity";

type TableValue = {
    rows?: { cells?: string[] }[];
};

function PortableTextTable({ value }: { value: TableValue }) {
    const rows = value?.rows ?? [];
    if (rows.length === 0) return null;
    const [header, ...body] = rows;
    const columnCount = header.cells?.length ?? 0;
    const dataColWidth = columnCount > 1 ? `${72 / (columnCount - 1)}%` : undefined;

    return (
        <div className="not-prose my-8">
            <p className="mb-2 text-xs text-neutral-400 sm:hidden">Swipe to see all columns →</p>
            <div className="overflow-x-auto rounded-lg border border-neutral-800">
                <table className="w-full min-w-[640px] table-fixed border-collapse text-sm">
                    <colgroup>
                        {header.cells?.map((_, i) => (
                            <col key={i} style={{ width: i === 0 ? "28%" : dataColWidth }} />
                        ))}
                    </colgroup>
                    <thead>
                        <tr className="bg-neutral-900/60">
                            {header.cells?.map((cell, i) => (
                                <th
                                    key={i}
                                    className={`border-b border-neutral-800 px-3 py-2.5 font-semibold text-white ${
                                        i === 0
                                            ? "sticky left-0 z-10 bg-neutral-900 text-left shadow-[2px_0_4px_rgba(15,33,56,0.09)]"
                                            : "text-center"
                                    }`}
                                >
                                    {cell}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {body.map((row, i) => (
                            <tr key={i} className="group even:bg-neutral-900/30">
                                {row.cells?.map((cell, j) => (
                                    <td
                                        key={j}
                                        className={`border-b border-neutral-800/60 px-3 py-2.5 text-neutral-300 ${
                                            j === 0
                                                ? "sticky left-0 z-10 bg-surface text-left font-medium text-white shadow-[2px_0_4px_rgba(15,33,56,0.09)] group-even:bg-neutral-900/30"
                                                : "text-center"
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
