import { LocaleWhereInput } from "./LocaleWhereInput";
import { LocaleOrderByInput } from "./LocaleOrderByInput";

export type LocaleFindManyArgs = {
  where?: LocaleWhereInput;
  orderBy?: Array<LocaleOrderByInput>;
  skip?: number;
  take?: number;
};
