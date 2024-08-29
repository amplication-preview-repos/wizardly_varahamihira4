import { PackageModelUpdateManyWithoutCoursesInput } from "./PackageModelUpdateManyWithoutCoursesInput";

export type CourseUpdateInput = {
  deletedAt?: Date | null;
  description?: string | null;
  language?: string | null;
  packages?: PackageModelUpdateManyWithoutCoursesInput;
  price?: number | null;
  title?: string | null;
};
