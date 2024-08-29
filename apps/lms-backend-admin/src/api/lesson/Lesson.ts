import { PackageModel } from "../packageModel/PackageModel";
import { Practice } from "../practice/Practice";
import { Test } from "../test/Test";
import { TextMaterial } from "../textMaterial/TextMaterial";
import { Video } from "../video/Video";

export type Lesson = {
  content: string | null;
  createdAt: Date;
  id: string;
  packageField?: PackageModel | null;
  practices?: Array<Practice>;
  tests?: Array<Test>;
  textMaterials?: Array<TextMaterial>;
  title: string | null;
  updatedAt: Date;
  videos?: Array<Video>;
};
