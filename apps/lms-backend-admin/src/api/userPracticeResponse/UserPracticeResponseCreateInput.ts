import { PracticeWhereUniqueInput } from "../practice/PracticeWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserPracticeResponseCreateInput = {
  practice?: PracticeWhereUniqueInput | null;
  response?: string | null;
  user?: UserWhereUniqueInput | null;
};
