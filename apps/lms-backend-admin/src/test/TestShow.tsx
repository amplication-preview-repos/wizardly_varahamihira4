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
  BooleanField,
} from "react-admin";

import { TEST_TITLE_FIELD } from "./TestTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { LESSON_TITLE_FIELD } from "../lesson/LessonTitle";

export const TestShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="lesson" source="lesson.id" reference="Lesson">
          <TextField source={LESSON_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="questions" source="questions" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Answer" target="testId" label="Answers">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <BooleanField label="isCorrect" source="isCorrect" />
            <TextField label="orderNumber" source="orderNumber" />
            <TextField label="response" source="response" />
            <ReferenceField label="test" source="test.id" reference="Test">
              <TextField source={TEST_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="translation" source="translation" />
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
