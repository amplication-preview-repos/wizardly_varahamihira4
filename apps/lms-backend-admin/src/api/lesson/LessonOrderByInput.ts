import { SortOrder } from "../../util/SortOrder";

export type LessonOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  packageFieldId?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
