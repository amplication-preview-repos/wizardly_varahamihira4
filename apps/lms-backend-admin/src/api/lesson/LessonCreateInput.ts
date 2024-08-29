import { PackageModelWhereUniqueInput } from "../packageModel/PackageModelWhereUniqueInput";
import { PracticeCreateNestedManyWithoutLessonsInput } from "./PracticeCreateNestedManyWithoutLessonsInput";
import { TestCreateNestedManyWithoutLessonsInput } from "./TestCreateNestedManyWithoutLessonsInput";
import { TextMaterialCreateNestedManyWithoutLessonsInput } from "./TextMaterialCreateNestedManyWithoutLessonsInput";
import { VideoCreateNestedManyWithoutLessonsInput } from "./VideoCreateNestedManyWithoutLessonsInput";

export type LessonCreateInput = {
  content?: string | null;
  deletedAt?: Date | null;
  packageField?: PackageModelWhereUniqueInput | null;
  practices?: PracticeCreateNestedManyWithoutLessonsInput;
  tests?: TestCreateNestedManyWithoutLessonsInput;
  textMaterials?: TextMaterialCreateNestedManyWithoutLessonsInput;
  title?: string | null;
  videos?: VideoCreateNestedManyWithoutLessonsInput;
};
