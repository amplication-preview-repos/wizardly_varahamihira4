import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { PRACTICE_TITLE_FIELD } from "./PracticeTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { LESSON_TITLE_FIELD } from "../lesson/LessonTitle";

export const PracticeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="deletedAt" source="deletedAt" />
        <TextField label="ID" source="id" />
        <ReferenceField label="lesson" source="lesson.id" reference="Lesson">
          <TextField source={LESSON_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="textTask" source="textTask" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="UserPracticeResponse"
          target="practiceId"
          label="UserPracticeResponses"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="deletedAt" source="deletedAt" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="practice"
              source="practice.id"
              reference="Practice"
            >
              <TextField source={PRACTICE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="response" source="response" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
