import { AnswerListRelationFilter } from "../answer/AnswerListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserPackageListRelationFilter } from "../userPackage/UserPackageListRelationFilter";
import { UserPracticeResponseListRelationFilter } from "../userPracticeResponse/UserPracticeResponseListRelationFilter";

export type UserWhereInput = {
  answers?: AnswerListRelationFilter;
  deletedAt?: DateTimeNullableFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  role?: "Option1";
  userPackages?: UserPackageListRelationFilter;
  userPracticeResponses?: UserPracticeResponseListRelationFilter;
  username?: StringFilter;
};
