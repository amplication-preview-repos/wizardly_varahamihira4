import { AnswerCreateNestedManyWithoutUsersInput } from "./AnswerCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { UserPackageCreateNestedManyWithoutUsersInput } from "./UserPackageCreateNestedManyWithoutUsersInput";
import { UserPracticeResponseCreateNestedManyWithoutUsersInput } from "./UserPracticeResponseCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  answers?: AnswerCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  role?: "Option1" | null;
  roles: InputJsonValue;
  userPackages?: UserPackageCreateNestedManyWithoutUsersInput;
  userPracticeResponses?: UserPracticeResponseCreateNestedManyWithoutUsersInput;
  username: string;
};
