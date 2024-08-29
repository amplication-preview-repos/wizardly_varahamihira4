import * as graphql from "@nestjs/graphql";
import { PracticeResolverBase } from "./base/practice.resolver.base";
import { Practice } from "./base/Practice";
import { PracticeService } from "./practice.service";

@graphql.Resolver(() => Practice)
export class PracticeResolver extends PracticeResolverBase {
  constructor(protected readonly service: PracticeService) {
    super(service);
  }
}
