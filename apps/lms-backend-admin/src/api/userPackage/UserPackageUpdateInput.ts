import { PackageModelWhereUniqueInput } from "../packageModel/PackageModelWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserPackageUpdateInput = {
  deletedAt?: Date | null;
  packageField?: PackageModelWhereUniqueInput | null;
  purchaseDate?: Date | null;
  user?: UserWhereUniqueInput | null;
};
