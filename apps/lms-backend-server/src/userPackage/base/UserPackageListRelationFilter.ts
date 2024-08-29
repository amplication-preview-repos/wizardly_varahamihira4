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
import { UserPackageWhereInput } from "./UserPackageWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class UserPackageListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => UserPackageWhereInput,
  })
  @ValidateNested()
  @Type(() => UserPackageWhereInput)
  @IsOptional()
  @Field(() => UserPackageWhereInput, {
    nullable: true,
  })
  every?: UserPackageWhereInput;

  @ApiProperty({
    required: false,
    type: () => UserPackageWhereInput,
  })
  @ValidateNested()
  @Type(() => UserPackageWhereInput)
  @IsOptional()
  @Field(() => UserPackageWhereInput, {
    nullable: true,
  })
  some?: UserPackageWhereInput;

  @ApiProperty({
    required: false,
    type: () => UserPackageWhereInput,
  })
  @ValidateNested()
  @Type(() => UserPackageWhereInput)
  @IsOptional()
  @Field(() => UserPackageWhereInput, {
    nullable: true,
  })
  none?: UserPackageWhereInput;
}
export { UserPackageListRelationFilter as UserPackageListRelationFilter };