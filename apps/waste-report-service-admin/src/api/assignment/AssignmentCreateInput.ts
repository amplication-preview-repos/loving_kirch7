import { AuthorityWhereUniqueInput } from "../authority/AuthorityWhereUniqueInput";
import { CollectorWhereUniqueInput } from "../collector/CollectorWhereUniqueInput";
import { ReportWhereUniqueInput } from "../report/ReportWhereUniqueInput";

export type AssignmentCreateInput = {
  authority?: AuthorityWhereUniqueInput | null;
  collector?: CollectorWhereUniqueInput | null;
  report?: ReportWhereUniqueInput | null;
  status?: "Option1" | null;
  updateImageUrl?: string | null;
};
