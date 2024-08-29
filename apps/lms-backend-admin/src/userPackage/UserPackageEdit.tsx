import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";
import { PackageModelTitle } from "../packageModel/PackageModelTitle";
import { UserTitle } from "../user/UserTitle";

export const UserPackageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
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
    </Edit>
  );
};
