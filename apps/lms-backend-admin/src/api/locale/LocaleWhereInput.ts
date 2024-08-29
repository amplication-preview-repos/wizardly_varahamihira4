import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type LocaleWhereInput = {
  code?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
