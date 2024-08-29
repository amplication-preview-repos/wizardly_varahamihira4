import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LocaleService } from "./locale.service";
import { LocaleControllerBase } from "./base/locale.controller.base";

@swagger.ApiTags("locales")
@common.Controller("locales")
export class LocaleController extends LocaleControllerBase {
  constructor(protected readonly service: LocaleService) {
    super(service);
  }
}
