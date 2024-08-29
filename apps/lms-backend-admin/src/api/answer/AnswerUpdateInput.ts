import { InputJsonValue } from "../../types";
import { TestWhereUniqueInput } from "../test/TestWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AnswerUpdateInput = {
  isCorrect?: boolean | null;
  orderNumber?: number | null;
  response?: InputJsonValue;
  test?: TestWhereUniqueInput | null;
  translation?: InputJsonValue;
  user?: UserWhereUniqueInput | null;
};
