import { AssignmentListRelationFilter } from "../assignment/AssignmentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CollectorWhereInput = {
  assignments?: AssignmentListRelationFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  status?: "Option1";
};
