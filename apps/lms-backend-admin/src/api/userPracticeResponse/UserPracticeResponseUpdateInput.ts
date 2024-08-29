import { PracticeWhereUniqueInput } from "../practice/PracticeWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserPracticeResponseUpdateInput = {
  practice?: PracticeWhereUniqueInput | null;
  response?: string | null;
  user?: UserWhereUniqueInput | null;
};
