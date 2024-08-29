import { PackageModel as TPackageModel } from "../api/packageModel/PackageModel";

export const PACKAGEMODEL_TITLE_FIELD = "title";

export const PackageModelTitle = (record: TPackageModel): string => {
  return record.title?.toString() || String(record.id);
};
