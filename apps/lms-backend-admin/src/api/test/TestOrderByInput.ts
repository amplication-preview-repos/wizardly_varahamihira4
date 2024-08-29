import { SortOrder } from "../../util/SortOrder";

export type TestOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  lessonId?: SortOrder;
  questions?: SortOrder;
  updatedAt?: SortOrder;
};
