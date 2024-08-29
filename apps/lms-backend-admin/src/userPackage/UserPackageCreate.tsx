import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { PackageModelTitle } from "../packageModel/PackageModelTitle";
import { UserTitle } from "../user/UserTitle";

export const UserPackageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="deletedAt" source="deletedAt" />
        <ReferenceInput
          source="packageField.id"
          reference="PackageModel"
          label="package"
        >
          <SelectInput optionText={PackageModelTitle} />
        </ReferenceInput>
        <DateTimeInput label="purchaseDate" source="purchaseDate" />
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
