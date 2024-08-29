import { StringFilter } from "../../util/StringFilter";
import { PracticeWhereUniqueInput } from "../practice/PracticeWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserPracticeResponseWhereInput = {
  id?: StringFilter;
  practice?: PracticeWhereUniqueInput;
  response?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
