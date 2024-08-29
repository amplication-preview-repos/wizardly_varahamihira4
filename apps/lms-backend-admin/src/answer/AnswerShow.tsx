import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import { TEST_TITLE_FIELD } from "../test/TestTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const AnswerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="deletedAt" source="deletedAt" />
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
      </SimpleShowLayout>
    </Show>
  );
};
