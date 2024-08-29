import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { LESSON_TITLE_FIELD } from "./LessonTitle";
import { PACKAGEMODEL_TITLE_FIELD } from "../packageModel/PackageModelTitle";

export const LessonShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="content" source="content" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="package"
          source="packagemodel.id"
          reference="PackageModel"
        >
          <TextField source={PACKAGEMODEL_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Practice"
          target="lessonId"
          label="Practices"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="lesson"
              source="lesson.id"
              reference="Lesson"
            >
              <TextField source={LESSON_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="textTask" source="textTask" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Test" target="lessonId" label="Tests">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="lesson"
              source="lesson.id"
              reference="Lesson"
            >
              <TextField source={LESSON_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="questions" source="questions" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="TextMaterial"
          target="lessonId"
          label="TextMaterials"
        >
          <Datagrid rowClick="show">
            <TextField label="content" source="content" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="lesson"
              source="lesson.id"
              reference="Lesson"
            >
              <TextField source={LESSON_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Video" target="lessonId" label="Videos">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="lesson"
              source="lesson.id"
              reference="Lesson"
            >
              <TextField source={LESSON_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="url" source="url" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
