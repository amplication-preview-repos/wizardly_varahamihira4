import { AnswerListRelationFilter } from "../answer/AnswerListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { LessonWhereUniqueInput } from "../lesson/LessonWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";

export type TestWhereInput = {
  answers?: AnswerListRelationFilter;
  id?: StringFilter;
  lesson?: LessonWhereUniqueInput;
  questions?: JsonFilter;
};
