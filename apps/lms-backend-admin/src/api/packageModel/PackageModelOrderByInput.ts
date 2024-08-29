import { SortOrder } from "../../util/SortOrder";

export type PackageModelOrderByInput = {
  courseId?: SortOrder;
  createdAt?: SortOrder;
  deletedAt?: SortOrder;
  endDate?: SortOrder;
  homeworkCheckEndDate?: SortOrder;
  id?: SortOrder;
  sequenceNumber?: SortOrder;
  startDate?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
