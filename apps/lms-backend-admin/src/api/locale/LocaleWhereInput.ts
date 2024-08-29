import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type LocaleWhereInput = {
  code?: StringNullableFilter;
  deletedAt?: DateTimeNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
