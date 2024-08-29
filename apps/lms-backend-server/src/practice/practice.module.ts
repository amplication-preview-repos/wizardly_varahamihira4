import { Module } from "@nestjs/common";
import { PracticeModuleBase } from "./base/practice.module.base";
import { PracticeService } from "./practice.service";
import { PracticeController } from "./practice.controller";
import { PracticeResolver } from "./practice.resolver";

@Module({
  imports: [PracticeModuleBase],
  controllers: [PracticeController],
  providers: [PracticeService, PracticeResolver],
  exports: [PracticeService],
})
export class PracticeModule {}
