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
import { CourseWhereUniqueInput } from "../../course/base/CourseWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsDate,
  IsInt,
  Min,
  Max,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { LessonCreateNestedManyWithoutPackageModelsInput } from "./LessonCreateNestedManyWithoutPackageModelsInput";
import { UserPackageCreateNestedManyWithoutPackageModelsInput } from "./UserPackageCreateNestedManyWithoutPackageModelsInput";

@InputType()
class PackageModelCreateInput {
  @ApiProperty({
    required: false,
    type: () => CourseWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CourseWhereUniqueInput)
  @IsOptional()
  @Field(() => CourseWhereUniqueInput, {
    nullable: true,
  })
  course?: CourseWhereUniqueInput | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  deletedAt?: Date | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  endDate?: Date | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  homeworkCheckEndDate?: Date | null;

  @ApiProperty({
    required: false,
    type: () => LessonCreateNestedManyWithoutPackageModelsInput,
  })
  @ValidateNested()
  @Type(() => LessonCreateNestedManyWithoutPackageModelsInput)
  @IsOptional()
  @Field(() => LessonCreateNestedManyWithoutPackageModelsInput, {
    nullable: true,
  })
  lessons?: LessonCreateNestedManyWithoutPackageModelsInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  sequenceNumber?: number | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  startDate?: Date | null;

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
    type: () => UserPackageCreateNestedManyWithoutPackageModelsInput,
  })
  @ValidateNested()
  @Type(() => UserPackageCreateNestedManyWithoutPackageModelsInput)
  @IsOptional()
  @Field(() => UserPackageCreateNestedManyWithoutPackageModelsInput, {
    nullable: true,
  })
  userPackages?: UserPackageCreateNestedManyWithoutPackageModelsInput;
}

export { PackageModelCreateInput as PackageModelCreateInput };
