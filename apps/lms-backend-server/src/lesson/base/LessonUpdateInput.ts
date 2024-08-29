/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { PackageModelWhereUniqueInput } from "../../packageModel/base/PackageModelWhereUniqueInput";
import { Type } from "class-transformer";
import { PracticeUpdateManyWithoutLessonsInput } from "./PracticeUpdateManyWithoutLessonsInput";
import { TestUpdateManyWithoutLessonsInput } from "./TestUpdateManyWithoutLessonsInput";
import { TextMaterialUpdateManyWithoutLessonsInput } from "./TextMaterialUpdateManyWithoutLessonsInput";
import { VideoUpdateManyWithoutLessonsInput } from "./VideoUpdateManyWithoutLessonsInput";

@InputType()
class LessonUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  content?: string | null;

  @ApiProperty({
    required: false,
    type: () => PackageModelWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PackageModelWhereUniqueInput)
  @IsOptional()
  @Field(() => PackageModelWhereUniqueInput, {
    nullable: true,
  })
  packageField?: PackageModelWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => PracticeUpdateManyWithoutLessonsInput,
  })
  @ValidateNested()
  @Type(() => PracticeUpdateManyWithoutLessonsInput)
  @IsOptional()
  @Field(() => PracticeUpdateManyWithoutLessonsInput, {
    nullable: true,
  })
  practices?: PracticeUpdateManyWithoutLessonsInput;

  @ApiProperty({
    required: false,
    type: () => TestUpdateManyWithoutLessonsInput,
  })
  @ValidateNested()
  @Type(() => TestUpdateManyWithoutLessonsInput)
  @IsOptional()
  @Field(() => TestUpdateManyWithoutLessonsInput, {
    nullable: true,
  })
  tests?: TestUpdateManyWithoutLessonsInput;

  @ApiProperty({
    required: false,
    type: () => TextMaterialUpdateManyWithoutLessonsInput,
  })
  @ValidateNested()
  @Type(() => TextMaterialUpdateManyWithoutLessonsInput)
  @IsOptional()
  @Field(() => TextMaterialUpdateManyWithoutLessonsInput, {
    nullable: true,
  })
  textMaterials?: TextMaterialUpdateManyWithoutLessonsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title?: string | null;

  @ApiProperty({
    required: false,
    type: () => VideoUpdateManyWithoutLessonsInput,
  })
  @ValidateNested()
  @Type(() => VideoUpdateManyWithoutLessonsInput)
  @IsOptional()
  @Field(() => VideoUpdateManyWithoutLessonsInput, {
    nullable: true,
  })
  videos?: VideoUpdateManyWithoutLessonsInput;
}

export { LessonUpdateInput as LessonUpdateInput };
