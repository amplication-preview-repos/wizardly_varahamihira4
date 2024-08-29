import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TextMaterialService } from "./textMaterial.service";
import { TextMaterialControllerBase } from "./base/textMaterial.controller.base";

@swagger.ApiTags("textMaterials")
@common.Controller("textMaterials")
export class TextMaterialController extends TextMaterialControllerBase {
  constructor(protected readonly service: TextMaterialService) {
    super(service);
  }
}
