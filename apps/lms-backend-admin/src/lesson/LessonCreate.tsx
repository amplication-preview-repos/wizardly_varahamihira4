import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { PackageModelTitle } from "../packageModel/PackageModelTitle";
import { PracticeTitle } from "../practice/PracticeTitle";
import { TestTitle } from "../test/TestTitle";
import { TextMaterialTitle } from "../textMaterial/TextMaterialTitle";
import { VideoTitle } from "../video/VideoTitle";

export const LessonCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <DateTimeInput label="deletedAt" source="deletedAt" />
        <ReferenceInput
          source="packageField.id"
          reference="PackageModel"
          label="package"
        >
          <SelectInput optionText={PackageModelTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="practices"
          reference="Practice"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PracticeTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="tests"
          reference="Test"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TestTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="textMaterials"
          reference="TextMaterial"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TextMaterialTitle} />
        </ReferenceArrayInput>
        <TextInput label="title" source="title" />
        <ReferenceArrayInput
          source="videos"
          reference="Video"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={VideoTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
