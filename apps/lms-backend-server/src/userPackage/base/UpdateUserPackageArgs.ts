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
import { UserPackageWhereUniqueInput } from "./UserPackageWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { UserPackageUpdateInput } from "./UserPackageUpdateInput";

@ArgsType()
class UpdateUserPackageArgs {
  @ApiProperty({
    required: true,
    type: () => UserPackageWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserPackageWhereUniqueInput)
  @Field(() => UserPackageWhereUniqueInput, { nullable: false })
  where!: UserPackageWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => UserPackageUpdateInput,
  })
  @ValidateNested()
  @Type(() => UserPackageUpdateInput)
  @Field(() => UserPackageUpdateInput, { nullable: false })
  data!: UserPackageUpdateInput;
}

export { UpdateUserPackageArgs as UpdateUserPackageArgs };