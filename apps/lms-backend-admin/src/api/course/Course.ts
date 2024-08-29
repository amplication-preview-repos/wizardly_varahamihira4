import { PackageModel } from "../packageModel/PackageModel";

export type Course = {
  createdAt: Date;
  deletedAt: Date | null;
  description: string | null;
  id: string;
  language: string | null;
  packages?: Array<PackageModel>;
  price: number | null;
  title: string | null;
  updatedAt: Date;
};
