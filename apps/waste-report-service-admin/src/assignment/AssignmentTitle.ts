import { Assignment as TAssignment } from "../api/assignment/Assignment";

export const ASSIGNMENT_TITLE_FIELD = "updateImageUrl";

export const AssignmentTitle = (record: TAssignment): string => {
  return record.updateImageUrl?.toString() || String(record.id);
};
