import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LessonWhereUniqueInput } from "../lesson/LessonWhereUniqueInput";

export type TextMaterialWhereInput = {
  content?: StringNullableFilter;
  deletedAt?: DateTimeNullableFilter;
  id?: StringFilter;
  lesson?: LessonWhereUniqueInput;
};
