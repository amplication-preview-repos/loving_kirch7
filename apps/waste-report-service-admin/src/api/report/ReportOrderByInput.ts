import { SortOrder } from "../../util/SortOrder";

export type ReportOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  imageUrl?: SortOrder;
  location?: SortOrder;
  reportedBy?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
