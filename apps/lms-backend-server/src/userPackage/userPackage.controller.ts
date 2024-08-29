import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserPackageService } from "./userPackage.service";
import { UserPackageControllerBase } from "./base/userPackage.controller.base";

@swagger.ApiTags("userPackages")
@common.Controller("userPackages")
export class UserPackageController extends UserPackageControllerBase {
  constructor(protected readonly service: UserPackageService) {
    super(service);
  }
}
