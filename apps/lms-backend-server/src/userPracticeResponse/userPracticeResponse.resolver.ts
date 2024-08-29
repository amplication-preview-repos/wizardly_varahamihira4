import * as graphql from "@nestjs/graphql";
import { UserPracticeResponseResolverBase } from "./base/userPracticeResponse.resolver.base";
import { UserPracticeResponse } from "./base/UserPracticeResponse";
import { UserPracticeResponseService } from "./userPracticeResponse.service";

@graphql.Resolver(() => UserPracticeResponse)
export class UserPracticeResponseResolver extends UserPracticeResponseResolverBase {
  constructor(protected readonly service: UserPracticeResponseService) {
    super(service);
  }
}
