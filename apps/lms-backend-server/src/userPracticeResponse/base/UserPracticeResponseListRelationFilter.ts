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
import { UserPracticeResponseWhereInput } from "./UserPracticeResponseWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class UserPracticeResponseListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => UserPracticeResponseWhereInput,
  })
  @ValidateNested()
  @Type(() => UserPracticeResponseWhereInput)
  @IsOptional()
  @Field(() => UserPracticeResponseWhereInput, {
    nullable: true,
  })
  every?: UserPracticeResponseWhereInput;

  @ApiProperty({
    required: false,
    type: () => UserPracticeResponseWhereInput,
  })
  @ValidateNested()
  @Type(() => UserPracticeResponseWhereInput)
  @IsOptional()
  @Field(() => UserPracticeResponseWhereInput, {
    nullable: true,
  })
  some?: UserPracticeResponseWhereInput;

  @ApiProperty({
    required: false,
    type: () => UserPracticeResponseWhereInput,
  })
  @ValidateNested()
  @Type(() => UserPracticeResponseWhereInput)
  @IsOptional()
  @Field(() => UserPracticeResponseWhereInput, {
    nullable: true,
  })
  none?: UserPracticeResponseWhereInput;
}
export { UserPracticeResponseListRelationFilter as UserPracticeResponseListRelationFilter };