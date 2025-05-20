
import { Download } from "lucide-react";

interface AuditReportProps {
  date: string;
  pages: number;
}

export function AuditReport({ date, pages }: AuditReportProps) {
  return (
    <div className="bg-secondary rounded-lg p-6 mt-10 flex items-center gap-6">
      <div className="bg-background rounded-full p-4">
        <Download size={40} />
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-bold">Download Audit Report</h3>
        <div className="flex items-center gap-2">
          <span>{date}</span>
          <span className="opacity-70">( {pages} pages )</span>
        </div>
        <p className="mt-2">
          As part of our continued commitment to transparency, we have published Reserves reports quarterly.4
        </p>
      </div>
    </div>
  );
}
