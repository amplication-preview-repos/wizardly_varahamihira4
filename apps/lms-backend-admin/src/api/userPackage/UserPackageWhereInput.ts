import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PackageModelWhereUniqueInput } from "../packageModel/PackageModelWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserPackageWhereInput = {
  deletedAt?: DateTimeNullableFilter;
  id?: StringFilter;
  packageField?: PackageModelWhereUniqueInput;
  purchaseDate?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
