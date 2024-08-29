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
import { UserPracticeResponse } from "./UserPracticeResponse";
import { UserPracticeResponseCountArgs } from "./UserPracticeResponseCountArgs";
import { UserPracticeResponseFindManyArgs } from "./UserPracticeResponseFindManyArgs";
import { UserPracticeResponseFindUniqueArgs } from "./UserPracticeResponseFindUniqueArgs";
import { CreateUserPracticeResponseArgs } from "./CreateUserPracticeResponseArgs";
import { UpdateUserPracticeResponseArgs } from "./UpdateUserPracticeResponseArgs";
import { DeleteUserPracticeResponseArgs } from "./DeleteUserPracticeResponseArgs";
import { Practice } from "../../practice/base/Practice";
import { User } from "../../user/base/User";
import { UserPracticeResponseService } from "../userPracticeResponse.service";
@graphql.Resolver(() => UserPracticeResponse)
export class UserPracticeResponseResolverBase {
  constructor(protected readonly service: UserPracticeResponseService) {}

  async _userPracticeResponsesMeta(
    @graphql.Args() args: UserPracticeResponseCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [UserPracticeResponse])
  async userPracticeResponses(
    @graphql.Args() args: UserPracticeResponseFindManyArgs
  ): Promise<UserPracticeResponse[]> {
    return this.service.userPracticeResponses(args);
  }

  @graphql.Query(() => UserPracticeResponse, { nullable: true })
  async userPracticeResponse(
    @graphql.Args() args: UserPracticeResponseFindUniqueArgs
  ): Promise<UserPracticeResponse | null> {
    const result = await this.service.userPracticeResponse(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => UserPracticeResponse)
  async createUserPracticeResponse(
    @graphql.Args() args: CreateUserPracticeResponseArgs
  ): Promise<UserPracticeResponse> {
    return await this.service.createUserPracticeResponse({
      ...args,
      data: {
        ...args.data,

        practice: args.data.practice
          ? {
              connect: args.data.practice,
            }
          : undefined,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => UserPracticeResponse)
  async updateUserPracticeResponse(
    @graphql.Args() args: UpdateUserPracticeResponseArgs
  ): Promise<UserPracticeResponse | null> {
    try {
      return await this.service.updateUserPracticeResponse({
        ...args,
        data: {
          ...args.data,

          practice: args.data.practice
            ? {
                connect: args.data.practice,
              }
            : undefined,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
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

  @graphql.Mutation(() => UserPracticeResponse)
  async deleteUserPracticeResponse(
    @graphql.Args() args: DeleteUserPracticeResponseArgs
  ): Promise<UserPracticeResponse | null> {
    try {
      return await this.service.deleteUserPracticeResponse(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Practice, {
    nullable: true,
    name: "practice",
  })
  async getPractice(
    @graphql.Parent() parent: UserPracticeResponse
  ): Promise<Practice | null> {
    const result = await this.service.getPractice(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  async getUser(
    @graphql.Parent() parent: UserPracticeResponse
  ): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
