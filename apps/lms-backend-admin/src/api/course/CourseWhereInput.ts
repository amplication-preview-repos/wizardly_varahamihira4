import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PackageModelListRelationFilter } from "../packageModel/PackageModelListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type CourseWhereInput = {
  deletedAt?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  language?: StringNullableFilter;
  packages?: PackageModelListRelationFilter;
  price?: FloatNullableFilter;
  title?: StringNullableFilter;
};
