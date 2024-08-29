import { LessonWhereUniqueInput } from "../lesson/LessonWhereUniqueInput";

export type TextMaterialUpdateInput = {
  content?: string | null;
  deletedAt?: Date | null;
  lesson?: LessonWhereUniqueInput | null;
};
