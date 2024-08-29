/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { User } from "./User";
import { UserCountArgs } from "./UserCountArgs";
import { UserFindManyArgs } from "./UserFindManyArgs";
import { UserFindUniqueArgs } from "./UserFindUniqueArgs";
import { CreateUserArgs } from "./CreateUserArgs";
import { UpdateUserArgs } from "./UpdateUserArgs";
import { DeleteUserArgs } from "./DeleteUserArgs";
import { AnswerFindManyArgs } from "../../answer/base/AnswerFindManyArgs";
import { Answer } from "../../answer/base/Answer";
import { UserPackageFindManyArgs } from "../../userPackage/base/UserPackageFindManyArgs";
import { UserPackage } from "../../userPackage/base/UserPackage";
import { UserPracticeResponseFindManyArgs } from "../../userPracticeResponse/base/UserPracticeResponseFindManyArgs";
import { UserPracticeResponse } from "../../userPracticeResponse/base/UserPracticeResponse";
import { UserService } from "../user.service";
@graphql.Resolver(() => User)
export class UserResolverBase {
  constructor(protected readonly service: UserService) {}

  async _usersMeta(
    @graphql.Args() args: UserCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [User])
  async users(@graphql.Args() args: UserFindManyArgs): Promise<User[]> {
    return this.service.users(args);
  }

  @graphql.Query(() => User, { nullable: true })
  async user(@graphql.Args() args: UserFindUniqueArgs): Promise<User | null> {
    const result = await this.service.user(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => User)
  async createUser(@graphql.Args() args: CreateUserArgs): Promise<User> {
    return await this.service.createUser({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => User)
  async updateUser(@graphql.Args() args: UpdateUserArgs): Promise<User | null> {
    try {
      return await this.service.updateUser({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => User)
  async deleteUser(@graphql.Args() args: DeleteUserArgs): Promise<User | null> {
    try {
      return await this.service.deleteUser(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Answer], { name: "answers" })
  async findAnswers(
    @graphql.Parent() parent: User,
    @graphql.Args() args: AnswerFindManyArgs
  ): Promise<Answer[]> {
    const results = await this.service.findAnswers(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [UserPackage], { name: "userPackages" })
  async findUserPackages(
    @graphql.Parent() parent: User,
    @graphql.Args() args: UserPackageFindManyArgs
  ): Promise<UserPackage[]> {
    const results = await this.service.findUserPackages(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [UserPracticeResponse], {
    name: "userPracticeResponses",
  })
  async findUserPracticeResponses(
    @graphql.Parent() parent: User,
    @graphql.Args() args: UserPracticeResponseFindManyArgs
  ): Promise<UserPracticeResponse[]> {
    const results = await this.service.findUserPracticeResponses(
      parent.id,
      args
    );

    if (!results) {
      return [];
    }

    return results;
  }
}