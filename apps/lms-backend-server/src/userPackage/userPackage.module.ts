import { Module } from "@nestjs/common";
import { UserPackageModuleBase } from "./base/userPackage.module.base";
import { UserPackageService } from "./userPackage.service";
import { UserPackageController } from "./userPackage.controller";
import { UserPackageResolver } from "./userPackage.resolver";

@Module({
  imports: [UserPackageModuleBase],
  controllers: [UserPackageController],
  providers: [UserPackageService, UserPackageResolver],
  exports: [UserPackageService],
})
export class UserPackageModule {}
