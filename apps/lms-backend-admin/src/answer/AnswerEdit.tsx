import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { TestTitle } from "../test/TestTitle";
import { UserTitle } from "../user/UserTitle";

export const AnswerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="isCorrect" source="isCorrect" />
        <NumberInput step={1} label="orderNumber" source="orderNumber" />
        <div />
        <ReferenceInput source="test.id" reference="Test" label="test">
          <SelectInput optionText={TestTitle} />
        </ReferenceInput>
        <div />
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
