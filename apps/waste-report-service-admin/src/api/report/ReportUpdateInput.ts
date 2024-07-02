import { AssignmentUpdateManyWithoutReportsInput } from "./AssignmentUpdateManyWithoutReportsInput";

export type ReportUpdateInput = {
  assignments?: AssignmentUpdateManyWithoutReportsInput;
  description?: string | null;
  imageUrl?: string | null;
  location?: string | null;
  reportedBy?: string | null;
  status?: "Option1" | null;
};
