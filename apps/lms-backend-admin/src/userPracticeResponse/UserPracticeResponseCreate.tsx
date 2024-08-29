import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { PracticeTitle } from "../practice/PracticeTitle";
import { UserTitle } from "../user/UserTitle";

export const UserPracticeResponseCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="practice.id"
          reference="Practice"
          label="practice"
        >
          <SelectInput optionText={PracticeTitle} />
        </ReferenceInput>
        <TextInput label="response" multiline source="response" />
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
