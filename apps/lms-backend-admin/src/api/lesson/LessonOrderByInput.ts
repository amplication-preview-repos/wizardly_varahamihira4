import { SortOrder } from "../../util/SortOrder";

export type LessonOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  deletedAt?: SortOrder;
  id?: SortOrder;
  packageFieldId?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
