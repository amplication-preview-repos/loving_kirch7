import { Authority } from "../authority/Authority";
import { Collector } from "../collector/Collector";
import { Report } from "../report/Report";

export type Assignment = {
  authority?: Authority | null;
  collector?: Collector | null;
  createdAt: Date;
  id: string;
  report?: Report | null;
  status?: "Option1" | null;
  updatedAt: Date;
  updateImageUrl: string | null;
};
