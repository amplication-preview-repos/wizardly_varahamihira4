import { TextMaterial as TTextMaterial } from "../api/textMaterial/TextMaterial";

export const TEXTMATERIAL_TITLE_FIELD = "id";

export const TextMaterialTitle = (record: TTextMaterial): string => {
  return record.id?.toString() || String(record.id);
};
