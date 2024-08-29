import { PackageModelWhereUniqueInput } from "../packageModel/PackageModelWhereUniqueInput";
import { PracticeUpdateManyWithoutLessonsInput } from "./PracticeUpdateManyWithoutLessonsInput";
import { TestUpdateManyWithoutLessonsInput } from "./TestUpdateManyWithoutLessonsInput";
import { TextMaterialUpdateManyWithoutLessonsInput } from "./TextMaterialUpdateManyWithoutLessonsInput";
import { VideoUpdateManyWithoutLessonsInput } from "./VideoUpdateManyWithoutLessonsInput";

export type LessonUpdateInput = {
  content?: string | null;
  packageField?: PackageModelWhereUniqueInput | null;
  practices?: PracticeUpdateManyWithoutLessonsInput;
  tests?: TestUpdateManyWithoutLessonsInput;
  textMaterials?: TextMaterialUpdateManyWithoutLessonsInput;
  title?: string | null;
  videos?: VideoUpdateManyWithoutLessonsInput;
};
