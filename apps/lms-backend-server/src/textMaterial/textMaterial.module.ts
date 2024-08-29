import { Module } from "@nestjs/common";
import { TextMaterialModuleBase } from "./base/textMaterial.module.base";
import { TextMaterialService } from "./textMaterial.service";
import { TextMaterialController } from "./textMaterial.controller";
import { TextMaterialResolver } from "./textMaterial.resolver";

@Module({
  imports: [TextMaterialModuleBase],
  controllers: [TextMaterialController],
  providers: [TextMaterialService, TextMaterialResolver],
  exports: [TextMaterialService],
})
export class TextMaterialModule {}
