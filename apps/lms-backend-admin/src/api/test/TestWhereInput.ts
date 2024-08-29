import { AnswerListRelationFilter } from "../answer/AnswerListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LessonWhereUniqueInput } from "../lesson/LessonWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";

export type TestWhereInput = {
  answers?: AnswerListRelationFilter;
  deletedAt?: DateTimeNullableFilter;
  id?: StringFilter;
  lesson?: LessonWhereUniqueInput;
  questions?: JsonFilter;
};
