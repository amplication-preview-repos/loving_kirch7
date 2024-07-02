import { AssignmentListRelationFilter } from "../assignment/AssignmentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ReportWhereInput = {
  assignments?: AssignmentListRelationFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  imageUrl?: StringNullableFilter;
  location?: StringNullableFilter;
  reportedBy?: StringNullableFilter;
  status?: "Option1";
};
