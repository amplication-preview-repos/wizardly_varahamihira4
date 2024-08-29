import { PackageModelWhereUniqueInput } from "../packageModel/PackageModelWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserPackageUpdateInput = {
  packageField?: PackageModelWhereUniqueInput | null;
  purchaseDate?: Date | null;
  user?: UserWhereUniqueInput | null;
};
