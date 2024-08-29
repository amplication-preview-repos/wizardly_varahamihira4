import { AnswerUpdateManyWithoutUsersInput } from "./AnswerUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { UserPackageUpdateManyWithoutUsersInput } from "./UserPackageUpdateManyWithoutUsersInput";
import { UserPracticeResponseUpdateManyWithoutUsersInput } from "./UserPracticeResponseUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  answers?: AnswerUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  role?: "Option1" | null;
  roles?: InputJsonValue;
  userPackages?: UserPackageUpdateManyWithoutUsersInput;
  userPracticeResponses?: UserPracticeResponseUpdateManyWithoutUsersInput;
  username?: string;
};
