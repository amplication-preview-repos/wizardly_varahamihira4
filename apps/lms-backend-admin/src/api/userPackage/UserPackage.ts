import { PackageModel } from "../packageModel/PackageModel";
import { User } from "../user/User";

export type UserPackage = {
  createdAt: Date;
  id: string;
  packageField?: PackageModel | null;
  purchaseDate: Date | null;
  updatedAt: Date;
  user?: User | null;
};
