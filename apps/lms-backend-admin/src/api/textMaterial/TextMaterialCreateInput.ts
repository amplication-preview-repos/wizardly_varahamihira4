import { LessonWhereUniqueInput } from "../lesson/LessonWhereUniqueInput";

export type TextMaterialCreateInput = {
  content?: string | null;
  lesson?: LessonWhereUniqueInput | null;
};
