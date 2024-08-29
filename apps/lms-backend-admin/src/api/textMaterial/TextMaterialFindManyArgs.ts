import { TextMaterialWhereInput } from "./TextMaterialWhereInput";
import { TextMaterialOrderByInput } from "./TextMaterialOrderByInput";

export type TextMaterialFindManyArgs = {
  where?: TextMaterialWhereInput;
  orderBy?: Array<TextMaterialOrderByInput>;
  skip?: number;
  take?: number;
};
