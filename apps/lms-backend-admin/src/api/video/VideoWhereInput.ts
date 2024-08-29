import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LessonWhereUniqueInput } from "../lesson/LessonWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type VideoWhereInput = {
  deletedAt?: DateTimeNullableFilter;
  id?: StringFilter;
  lesson?: LessonWhereUniqueInput;
  url?: StringNullableFilter;
};
