import { Assignment } from "../assignment/Assignment";

export type Report = {
  assignments?: Array<Assignment>;
  createdAt: Date;
  description: string | null;
  id: string;
  imageUrl: string | null;
  location: string | null;
  reportedBy: string | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
