import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { LessonUpdateManyWithoutPackageModelsInput } from "./LessonUpdateManyWithoutPackageModelsInput";
import { UserPackageUpdateManyWithoutPackageModelsInput } from "./UserPackageUpdateManyWithoutPackageModelsInput";

export type PackageModelUpdateInput = {
  course?: CourseWhereUniqueInput | null;
  endDate?: Date | null;
  homeworkCheckEndDate?: Date | null;
  lessons?: LessonUpdateManyWithoutPackageModelsInput;
  sequenceNumber?: number | null;
  startDate?: Date | null;
  title?: string | null;
  userPackages?: UserPackageUpdateManyWithoutPackageModelsInput;
};
