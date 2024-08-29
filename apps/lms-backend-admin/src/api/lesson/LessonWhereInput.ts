import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PackageModelWhereUniqueInput } from "../packageModel/PackageModelWhereUniqueInput";
import { PracticeListRelationFilter } from "../practice/PracticeListRelationFilter";
import { TestListRelationFilter } from "../test/TestListRelationFilter";
import { TextMaterialListRelationFilter } from "../textMaterial/TextMaterialListRelationFilter";
import { VideoListRelationFilter } from "../video/VideoListRelationFilter";

export type LessonWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  packageField?: PackageModelWhereUniqueInput;
  practices?: PracticeListRelationFilter;
  tests?: TestListRelationFilter;
  textMaterials?: TextMaterialListRelationFilter;
  title?: StringNullableFilter;
  videos?: VideoListRelationFilter;
};
