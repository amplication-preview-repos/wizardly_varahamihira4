import { PackageModelWhereUniqueInput } from "../packageModel/PackageModelWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserPackageCreateInput = {
  deletedAt?: Date | null;
  packageField?: PackageModelWhereUniqueInput | null;
  purchaseDate?: Date | null;
  user?: UserWhereUniqueInput | null;
};
