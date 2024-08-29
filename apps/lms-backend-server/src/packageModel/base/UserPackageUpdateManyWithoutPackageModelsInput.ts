/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { UserPackageWhereUniqueInput } from "../../userPackage/base/UserPackageWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class UserPackageUpdateManyWithoutPackageModelsInput {
  @Field(() => [UserPackageWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [UserPackageWhereUniqueInput],
  })
  connect?: Array<UserPackageWhereUniqueInput>;

  @Field(() => [UserPackageWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [UserPackageWhereUniqueInput],
  })
  disconnect?: Array<UserPackageWhereUniqueInput>;

  @Field(() => [UserPackageWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [UserPackageWhereUniqueInput],
  })
  set?: Array<UserPackageWhereUniqueInput>;
}

export { UserPackageUpdateManyWithoutPackageModelsInput as UserPackageUpdateManyWithoutPackageModelsInput };