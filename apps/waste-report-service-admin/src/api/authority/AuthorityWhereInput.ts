import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AssignmentListRelationFilter } from "../assignment/AssignmentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type AuthorityWhereInput = {
  area?: StringNullableFilter;
  assignments?: AssignmentListRelationFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
