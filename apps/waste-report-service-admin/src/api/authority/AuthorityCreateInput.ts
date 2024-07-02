import { AssignmentCreateNestedManyWithoutAuthoritiesInput } from "./AssignmentCreateNestedManyWithoutAuthoritiesInput";

export type AuthorityCreateInput = {
  area?: string | null;
  assignments?: AssignmentCreateNestedManyWithoutAuthoritiesInput;
  email?: string | null;
  name?: string | null;
};
