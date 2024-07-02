import { AssignmentCreateNestedManyWithoutReportsInput } from "./AssignmentCreateNestedManyWithoutReportsInput";

export type ReportCreateInput = {
  assignments?: AssignmentCreateNestedManyWithoutReportsInput;
  description?: string | null;
  imageUrl?: string | null;
  location?: string | null;
  reportedBy?: string | null;
  status?: "Option1" | null;
};
