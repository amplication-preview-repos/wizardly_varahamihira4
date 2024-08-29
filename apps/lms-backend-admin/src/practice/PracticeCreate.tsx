import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { LessonTitle } from "../lesson/LessonTitle";
import { UserPracticeResponseTitle } from "../userPracticeResponse/UserPracticeResponseTitle";

export const PracticeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="deletedAt" source="deletedAt" />
        <ReferenceInput source="lesson.id" reference="Lesson" label="lesson">
          <SelectInput optionText={LessonTitle} />
        </ReferenceInput>
        <TextInput label="textTask" multiline source="textTask" />
        <ReferenceArrayInput
          source="userPracticeResponses"
          reference="UserPracticeResponse"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserPracticeResponseTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
