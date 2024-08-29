import { LessonWhereUniqueInput } from "../lesson/LessonWhereUniqueInput";

export type TextMaterialUpdateInput = {
  content?: string | null;
  lesson?: LessonWhereUniqueInput | null;
};
