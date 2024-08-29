import { StringFilter } from "../../util/StringFilter";
import { LessonWhereUniqueInput } from "../lesson/LessonWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type VideoWhereInput = {
  id?: StringFilter;
  lesson?: LessonWhereUniqueInput;
  url?: StringNullableFilter;
};
