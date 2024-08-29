import { UserPracticeResponse as TUserPracticeResponse } from "../api/userPracticeResponse/UserPracticeResponse";

export const USERPRACTICERESPONSE_TITLE_FIELD = "id";

export const UserPracticeResponseTitle = (
  record: TUserPracticeResponse
): string => {
  return record.id?.toString() || String(record.id);
};
