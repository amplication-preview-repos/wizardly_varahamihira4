import { StringFilter } from "../../util/StringFilter";
import { PackageModelWhereUniqueInput } from "../packageModel/PackageModelWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserPackageWhereInput = {
  id?: StringFilter;
  packageField?: PackageModelWhereUniqueInput;
  purchaseDate?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
