/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { UserPackageWhereInput } from "./UserPackageWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { UserPackageOrderByInput } from "./UserPackageOrderByInput";

@ArgsType()
class UserPackageFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => UserPackageWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => UserPackageWhereInput, { nullable: true })
  @Type(() => UserPackageWhereInput)
  where?: UserPackageWhereInput;

  @ApiProperty({
    required: false,
    type: [UserPackageOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [UserPackageOrderByInput], { nullable: true })
  @Type(() => UserPackageOrderByInput)
  orderBy?: Array<UserPackageOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { UserPackageFindManyArgs as UserPackageFindManyArgs };