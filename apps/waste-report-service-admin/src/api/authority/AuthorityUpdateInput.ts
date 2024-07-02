import { AssignmentUpdateManyWithoutAuthoritiesInput } from "./AssignmentUpdateManyWithoutAuthoritiesInput";

export type AuthorityUpdateInput = {
  area?: string | null;
  assignments?: AssignmentUpdateManyWithoutAuthoritiesInput;
  email?: string | null;
  name?: string | null;
};
