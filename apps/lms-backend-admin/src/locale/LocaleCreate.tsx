import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const LocaleCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="code" source="code" />
        <DateTimeInput label="deletedAt" source="deletedAt" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Create>
  );
};
