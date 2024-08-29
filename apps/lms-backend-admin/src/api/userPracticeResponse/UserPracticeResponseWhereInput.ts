import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PracticeWhereUniqueInput } from "../practice/PracticeWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserPracticeResponseWhereInput = {
  deletedAt?: DateTimeNullableFilter;
  id?: StringFilter;
  practice?: PracticeWhereUniqueInput;
  response?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
