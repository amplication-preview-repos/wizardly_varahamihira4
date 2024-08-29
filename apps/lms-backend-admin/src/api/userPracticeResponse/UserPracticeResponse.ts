import { Practice } from "../practice/Practice";
import { User } from "../user/User";

export type UserPracticeResponse = {
  createdAt: Date;
  id: string;
  practice?: Practice | null;
  response: string | null;
  updatedAt: Date;
  user?: User | null;
};
