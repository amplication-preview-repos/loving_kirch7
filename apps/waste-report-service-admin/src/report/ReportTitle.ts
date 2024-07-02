import { Report as TReport } from "../api/report/Report";

export const REPORT_TITLE_FIELD = "imageUrl";

export const ReportTitle = (record: TReport): string => {
  return record.imageUrl?.toString() || String(record.id);
};
