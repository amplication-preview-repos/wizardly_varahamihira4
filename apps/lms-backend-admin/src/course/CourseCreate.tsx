import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { PackageModelTitle } from "../packageModel/PackageModelTitle";

export const CourseCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="deletedAt" source="deletedAt" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="language" source="language" />
        <ReferenceArrayInput
          source="packages"
          reference="PackageModel"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PackageModelTitle} />
        </ReferenceArrayInput>
        <NumberInput label="price" source="price" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
