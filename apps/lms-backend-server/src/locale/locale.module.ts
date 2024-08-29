import { Module } from "@nestjs/common";
import { LocaleModuleBase } from "./base/locale.module.base";
import { LocaleService } from "./locale.service";
import { LocaleController } from "./locale.controller";
import { LocaleResolver } from "./locale.resolver";

@Module({
  imports: [LocaleModuleBase],
  controllers: [LocaleController],
  providers: [LocaleService, LocaleResolver],
  exports: [LocaleService],
})
export class LocaleModule {}
