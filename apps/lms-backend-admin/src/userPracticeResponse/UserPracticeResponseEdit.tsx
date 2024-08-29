import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { PracticeTitle } from "../practice/PracticeTitle";
import { UserTitle } from "../user/UserTitle";

export const UserPracticeResponseEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
