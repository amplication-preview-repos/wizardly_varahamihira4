import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LessonWhereUniqueInput } from "../lesson/LessonWhereUniqueInput";

export type TextMaterialWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  lesson?: LessonWhereUniqueInput;
};
