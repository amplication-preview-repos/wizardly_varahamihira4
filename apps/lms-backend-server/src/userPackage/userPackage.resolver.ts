import * as graphql from "@nestjs/graphql";
import { UserPackageResolverBase } from "./base/userPackage.resolver.base";
import { UserPackage } from "./base/UserPackage";
import { UserPackageService } from "./userPackage.service";

@graphql.Resolver(() => UserPackage)
export class UserPackageResolver extends UserPackageResolverBase {
  constructor(protected readonly service: UserPackageService) {
    super(service);
  }
}
