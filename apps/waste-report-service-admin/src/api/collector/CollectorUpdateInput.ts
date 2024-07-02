import { AssignmentUpdateManyWithoutCollectorsInput } from "./AssignmentUpdateManyWithoutCollectorsInput";

export type CollectorUpdateInput = {
  assignments?: AssignmentUpdateManyWithoutCollectorsInput;
  email?: string | null;
  name?: string | null;
  status?: "Option1" | null;
};
