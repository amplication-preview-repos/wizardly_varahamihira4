import { PackageModelWhereUniqueInput } from "../packageModel/PackageModelWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserPackageCreateInput = {
  packageField?: PackageModelWhereUniqueInput | null;
  purchaseDate?: Date | null;
  user?: UserWhereUniqueInput | null;
};
