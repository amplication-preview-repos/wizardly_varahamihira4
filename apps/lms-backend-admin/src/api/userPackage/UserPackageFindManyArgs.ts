import { UserPackageWhereInput } from "./UserPackageWhereInput";
import { UserPackageOrderByInput } from "./UserPackageOrderByInput";

export type UserPackageFindManyArgs = {
  where?: UserPackageWhereInput;
  orderBy?: Array<UserPackageOrderByInput>;
  skip?: number;
  take?: number;
};
