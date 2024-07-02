import { AuthorityWhereUniqueInput } from "../authority/AuthorityWhereUniqueInput";
import { CollectorWhereUniqueInput } from "../collector/CollectorWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { ReportWhereUniqueInput } from "../report/ReportWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AssignmentWhereInput = {
  authority?: AuthorityWhereUniqueInput;
  collector?: CollectorWhereUniqueInput;
  id?: StringFilter;
  report?: ReportWhereUniqueInput;
  status?: "Option1";
  updateImageUrl?: StringNullableFilter;
};
