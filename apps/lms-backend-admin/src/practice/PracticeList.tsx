import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { LESSON_TITLE_FIELD } from "../lesson/LessonTitle";

export const PracticeList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Practices"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="deletedAt" source="deletedAt" />
        <TextField label="ID" source="id" />
        <ReferenceField label="lesson" source="lesson.id" reference="Lesson">
          <TextField source={LESSON_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="textTask" source="textTask" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
