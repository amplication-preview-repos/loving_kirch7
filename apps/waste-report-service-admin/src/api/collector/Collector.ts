import { Assignment } from "../assignment/Assignment";

export type Collector = {
  assignments?: Array<Assignment>;
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
