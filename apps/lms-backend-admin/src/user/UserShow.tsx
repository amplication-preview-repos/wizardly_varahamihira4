import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
  ReferenceField,
} from "react-admin";

import { TEST_TITLE_FIELD } from "../test/TestTitle";
import { USER_TITLE_FIELD } from "./UserTitle";
import { PACKAGEMODEL_TITLE_FIELD } from "../packageModel/PackageModelTitle";
import { PRACTICE_TITLE_FIELD } from "../practice/PracticeTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="role" source="role" />
        <TextField label="Roles" source="roles" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
        <ReferenceManyField reference="Answer" target="userId" label="Answers">
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
        <ReferenceManyField
          reference="UserPackage"
          target="userId"
          label="UserPackages"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="package"
              source="packagemodel.id"
              reference="PackageModel"
            >
              <TextField source={PACKAGEMODEL_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="purchaseDate" source="purchaseDate" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="UserPracticeResponse"
          target="userId"
          label="UserPracticeResponses"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
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
