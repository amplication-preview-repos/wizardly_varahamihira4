import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const LocaleEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="code" source="code" />
        <DateTimeInput label="deletedAt" source="deletedAt" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
