import { SortOrder } from "../../util/SortOrder";

export type UserPackageOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  packageFieldId?: SortOrder;
  purchaseDate?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
