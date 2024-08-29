import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserPracticeResponseService } from "./userPracticeResponse.service";
import { UserPracticeResponseControllerBase } from "./base/userPracticeResponse.controller.base";

@swagger.ApiTags("userPracticeResponses")
@common.Controller("userPracticeResponses")
export class UserPracticeResponseController extends UserPracticeResponseControllerBase {
  constructor(protected readonly service: UserPracticeResponseService) {
    super(service);
  }
}
