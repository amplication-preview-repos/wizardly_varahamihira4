import { SortOrder } from "../../util/SortOrder";

export type TextMaterialOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  lessonId?: SortOrder;
  updatedAt?: SortOrder;
};
