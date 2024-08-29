import { SortOrder } from "../../util/SortOrder";

export type UserPracticeResponseOrderByInput = {
  createdAt?: SortOrder;
  deletedAt?: SortOrder;
  id?: SortOrder;
  practiceId?: SortOrder;
  response?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
