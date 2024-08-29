import { Practice as TPractice } from "../api/practice/Practice";

export const PRACTICE_TITLE_FIELD = "id";

export const PracticeTitle = (record: TPractice): string => {
  return record.id?.toString() || String(record.id);
};
