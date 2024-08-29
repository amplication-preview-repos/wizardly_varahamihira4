import { SortOrder } from "../../util/SortOrder";

export type LocaleOrderByInput = {
  code?: SortOrder;
  createdAt?: SortOrder;
  deletedAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
