import * as graphql from "@nestjs/graphql";
import { TextMaterialResolverBase } from "./base/textMaterial.resolver.base";
import { TextMaterial } from "./base/TextMaterial";
import { TextMaterialService } from "./textMaterial.service";

@graphql.Resolver(() => TextMaterial)
export class TextMaterialResolver extends TextMaterialResolverBase {
  constructor(protected readonly service: TextMaterialService) {
    super(service);
  }
}
