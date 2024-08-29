import { StringFilter } from "../../util/StringFilter";
import { LessonWhereUniqueInput } from "../lesson/LessonWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserPracticeResponseListRelationFilter } from "../userPracticeResponse/UserPracticeResponseListRelationFilter";

export type PracticeWhereInput = {
  id?: StringFilter;
  lesson?: LessonWhereUniqueInput;
  textTask?: StringNullableFilter;
  userPracticeResponses?: UserPracticeResponseListRelationFilter;
};
