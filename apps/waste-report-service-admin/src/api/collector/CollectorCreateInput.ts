import { AssignmentCreateNestedManyWithoutCollectorsInput } from "./AssignmentCreateNestedManyWithoutCollectorsInput";

export type CollectorCreateInput = {
  assignments?: AssignmentCreateNestedManyWithoutCollectorsInput;
  email?: string | null;
  name?: string | null;
  status?: "Option1" | null;
};
