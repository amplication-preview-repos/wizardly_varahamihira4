import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { CourseTitle } from "../course/CourseTitle";
import { LessonTitle } from "../lesson/LessonTitle";
import { UserPackageTitle } from "../userPackage/UserPackageTitle";

export const PackageModelEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="course.id" reference="Course" label="course">
          <SelectInput optionText={CourseTitle} />
        </ReferenceInput>
        <DateTimeInput label="deletedAt" source="deletedAt" />
        <DateTimeInput label="endDate" source="endDate" />
        <DateTimeInput
          label="homeworkCheckEndDate"
          source="homeworkCheckEndDate"
        />
        <ReferenceArrayInput
          source="lessons"
          reference="Lesson"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LessonTitle} />
        </ReferenceArrayInput>
        <NumberInput step={1} label="sequenceNumber" source="sequenceNumber" />
        <DateTimeInput label="startDate" source="startDate" />
        <TextInput label="title" source="title" />
        <ReferenceArrayInput
          source="userPackages"
          reference="UserPackage"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserPackageTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
