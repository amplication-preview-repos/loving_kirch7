import { Assignment } from "../assignment/Assignment";

export type Authority = {
  area: string | null;
  assignments?: Array<Assignment>;
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  updatedAt: Date;
};
