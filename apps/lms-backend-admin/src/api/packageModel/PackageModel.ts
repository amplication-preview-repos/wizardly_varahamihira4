import { Course } from "../course/Course";
import { Lesson } from "../lesson/Lesson";
import { UserPackage } from "../userPackage/UserPackage";

export type PackageModel = {
  course?: Course | null;
  createdAt: Date;
  endDate: Date | null;
  homeworkCheckEndDate: Date | null;
  id: string;
  lessons?: Array<Lesson>;
  sequenceNumber: number | null;
  startDate: Date | null;
  title: string | null;
  updatedAt: Date;
  userPackages?: Array<UserPackage>;
};
