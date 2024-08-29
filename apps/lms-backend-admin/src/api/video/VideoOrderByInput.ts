import { SortOrder } from "../../util/SortOrder";

export type VideoOrderByInput = {
  createdAt?: SortOrder;
  deletedAt?: SortOrder;
  id?: SortOrder;
  lessonId?: SortOrder;
  updatedAt?: SortOrder;
  url?: SortOrder;
};
