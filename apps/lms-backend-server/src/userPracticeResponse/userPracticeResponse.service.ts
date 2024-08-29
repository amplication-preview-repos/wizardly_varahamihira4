import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserPracticeResponseServiceBase } from "./base/userPracticeResponse.service.base";

@Injectable()
export class UserPracticeResponseService extends UserPracticeResponseServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
