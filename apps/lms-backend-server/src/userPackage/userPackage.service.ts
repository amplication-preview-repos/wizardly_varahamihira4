import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserPackageServiceBase } from "./base/userPackage.service.base";

@Injectable()
export class UserPackageService extends UserPackageServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
