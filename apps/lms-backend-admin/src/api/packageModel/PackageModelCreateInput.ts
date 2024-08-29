import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { LessonCreateNestedManyWithoutPackageModelsInput } from "./LessonCreateNestedManyWithoutPackageModelsInput";
import { UserPackageCreateNestedManyWithoutPackageModelsInput } from "./UserPackageCreateNestedManyWithoutPackageModelsInput";

export type PackageModelCreateInput = {
  course?: CourseWhereUniqueInput | null;
  deletedAt?: Date | null;
  endDate?: Date | null;
  homeworkCheckEndDate?: Date | null;
  lessons?: LessonCreateNestedManyWithoutPackageModelsInput;
  sequenceNumber?: number | null;
  startDate?: Date | null;
  title?: string | null;
  userPackages?: UserPackageCreateNestedManyWithoutPackageModelsInput;
};
