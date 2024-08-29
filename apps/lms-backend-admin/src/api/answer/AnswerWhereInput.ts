import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { TestWhereUniqueInput } from "../test/TestWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AnswerWhereInput = {
  deletedAt?: DateTimeNullableFilter;
  id?: StringFilter;
  isCorrect?: BooleanNullableFilter;
  orderNumber?: IntNullableFilter;
  response?: JsonFilter;
  test?: TestWhereUniqueInput;
  translation?: JsonFilter;
  user?: UserWhereUniqueInput;
};
