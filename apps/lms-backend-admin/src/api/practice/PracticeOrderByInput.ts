import { SortOrder } from "../../util/SortOrder";

export type PracticeOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  lessonId?: SortOrder;
  textTask?: SortOrder;
  updatedAt?: SortOrder;
};
