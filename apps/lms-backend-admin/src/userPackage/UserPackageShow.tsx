import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { PACKAGEMODEL_TITLE_FIELD } from "../packageModel/PackageModelTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const UserPackageShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="deletedAt" source="deletedAt" />
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
      </SimpleShowLayout>
    </Show>
  );
};
