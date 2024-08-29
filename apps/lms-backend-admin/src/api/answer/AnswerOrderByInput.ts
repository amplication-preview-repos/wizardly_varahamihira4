import { SortOrder } from "../../util/SortOrder";

export type AnswerOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  isCorrect?: SortOrder;
  orderNumber?: SortOrder;
  response?: SortOrder;
  testId?: SortOrder;
  translation?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
