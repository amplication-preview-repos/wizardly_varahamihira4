import { Module } from "@nestjs/common";
import { UserPracticeResponseModuleBase } from "./base/userPracticeResponse.module.base";
import { UserPracticeResponseService } from "./userPracticeResponse.service";
import { UserPracticeResponseController } from "./userPracticeResponse.controller";
import { UserPracticeResponseResolver } from "./userPracticeResponse.resolver";

@Module({
  imports: [UserPracticeResponseModuleBase],
  controllers: [UserPracticeResponseController],
  providers: [UserPracticeResponseService, UserPracticeResponseResolver],
  exports: [UserPracticeResponseService],
})
export class UserPracticeResponseModule {}
