import * as graphql from "@nestjs/graphql";
import { LocaleResolverBase } from "./base/locale.resolver.base";
import { Locale } from "./base/Locale";
import { LocaleService } from "./locale.service";

@graphql.Resolver(() => Locale)
export class LocaleResolver extends LocaleResolverBase {
  constructor(protected readonly service: LocaleService) {
    super(service);
  }
}
