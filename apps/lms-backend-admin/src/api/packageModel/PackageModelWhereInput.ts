import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LessonListRelationFilter } from "../lesson/LessonListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserPackageListRelationFilter } from "../userPackage/UserPackageListRelationFilter";

export type PackageModelWhereInput = {
  course?: CourseWhereUniqueInput;
  deletedAt?: DateTimeNullableFilter;
  endDate?: DateTimeNullableFilter;
  homeworkCheckEndDate?: DateTimeNullableFilter;
  id?: StringFilter;
  lessons?: LessonListRelationFilter;
  sequenceNumber?: IntNullableFilter;
  startDate?: DateTimeNullableFilter;
  title?: StringNullableFilter;
  userPackages?: UserPackageListRelationFilter;
};
