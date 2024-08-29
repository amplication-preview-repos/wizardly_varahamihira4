import { Answer } from "../answer/Answer";
import { JsonValue } from "type-fest";
import { UserPackage } from "../userPackage/UserPackage";
import { UserPracticeResponse } from "../userPracticeResponse/UserPracticeResponse";

export type User = {
  answers?: Array<Answer>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  role?: "Option1" | null;
  roles: JsonValue;
  updatedAt: Date;
  userPackages?: Array<UserPackage>;
  userPracticeResponses?: Array<UserPracticeResponse>;
  username: string;
};
