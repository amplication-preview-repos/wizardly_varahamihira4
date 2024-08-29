import { UserPackage as TUserPackage } from "../api/userPackage/UserPackage";

export const USERPACKAGE_TITLE_FIELD = "id";

export const UserPackageTitle = (record: TUserPackage): string => {
  return record.id?.toString() || String(record.id);
};
