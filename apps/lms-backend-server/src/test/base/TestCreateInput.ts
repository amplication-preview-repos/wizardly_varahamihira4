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
import { AnswerCreateNestedManyWithoutTestsInput } from "./AnswerCreateNestedManyWithoutTestsInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { LessonWhereUniqueInput } from "../../lesson/base/LessonWhereUniqueInput";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";

@InputType()
class TestCreateInput {
  @ApiProperty({
    required: false,
    type: () => AnswerCreateNestedManyWithoutTestsInput,
  })
  @ValidateNested()
  @Type(() => AnswerCreateNestedManyWithoutTestsInput)
  @IsOptional()
  @Field(() => AnswerCreateNestedManyWithoutTestsInput, {
    nullable: true,
  })
  answers?: AnswerCreateNestedManyWithoutTestsInput;

  @ApiProperty({
    required: false,
    type: () => LessonWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => LessonWhereUniqueInput)
  @IsOptional()
  @Field(() => LessonWhereUniqueInput, {
    nullable: true,
  })
  lesson?: LessonWhereUniqueInput | null;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  questions?: InputJsonValue;
}

export { TestCreateInput as TestCreateInput };