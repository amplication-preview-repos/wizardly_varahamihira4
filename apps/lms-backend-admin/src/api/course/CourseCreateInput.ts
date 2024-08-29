import { PackageModelCreateNestedManyWithoutCoursesInput } from "./PackageModelCreateNestedManyWithoutCoursesInput";

export type CourseCreateInput = {
  deletedAt?: Date | null;
  description?: string | null;
  language?: string | null;
  packages?: PackageModelCreateNestedManyWithoutCoursesInput;
  price?: number | null;
  title?: string | null;
};
