import Reveal from "./Reveal";

export type ComparisonRow = {
  label: string;
  values: string[];
};

type ComparisonTableProps = {
  headers: string[];
  rows: ComparisonRow[];
  highlightColumnIndex?: number;
};

export default function ComparisonTable({ headers, rows, highlightColumnIndex }: ComparisonTableProps) {
  return (
    <Reveal className="mt-12 overflow-x-auto rounded-lg border border-line">
      <table className="w-full min-w-[640px] border-collapse bg-surface text-left text-sm">
        <thead>
          <tr>
            <th className="border-b border-line p-4 text-sm font-semibold text-ink">Critère</th>
            {headers.map((header, i) => (
              <th
                key={header}
                className={`border-b border-line p-4 text-sm font-semibold ${
                  i === highlightColumnIndex ? "bg-accent-soft text-accent-dark" : "text-ink"
                }`}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label} className="border-b border-line last:border-b-0">
              <td className="p-4 font-medium text-ink">{row.label}</td>
              {row.values.map((value, i) => (
                <td
                  key={i}
                  className={`p-4 text-ink-2 ${
                    i === highlightColumnIndex ? "bg-accent-soft/40 font-medium text-ink" : ""
                  }`}
                >
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Reveal>
  );
}
