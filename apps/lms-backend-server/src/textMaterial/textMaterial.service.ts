import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TextMaterialServiceBase } from "./base/textMaterial.service.base";

@Injectable()
export class TextMaterialService extends TextMaterialServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
