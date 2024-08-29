import { PackageModelUpdateManyWithoutCoursesInput } from "./PackageModelUpdateManyWithoutCoursesInput";

export type CourseUpdateInput = {
  description?: string | null;
  language?: string | null;
  packages?: PackageModelUpdateManyWithoutCoursesInput;
  price?: number | null;
  title?: string | null;
};
