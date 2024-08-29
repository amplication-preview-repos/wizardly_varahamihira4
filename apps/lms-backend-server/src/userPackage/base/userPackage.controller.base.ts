/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { UserPackageService } from "../userPackage.service";
import { UserPackageCreateInput } from "./UserPackageCreateInput";
import { UserPackage } from "./UserPackage";
import { UserPackageFindManyArgs } from "./UserPackageFindManyArgs";
import { UserPackageWhereUniqueInput } from "./UserPackageWhereUniqueInput";
import { UserPackageUpdateInput } from "./UserPackageUpdateInput";

export class UserPackageControllerBase {
  constructor(protected readonly service: UserPackageService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: UserPackage })
  async createUserPackage(
    @common.Body() data: UserPackageCreateInput
  ): Promise<UserPackage> {
    return await this.service.createUserPackage({
      data: {
        ...data,

        packageField: data.packageField
          ? {
              connect: data.packageField,
            }
          : undefined,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,

        packageField: {
          select: {
            id: true,
          },
        },

        purchaseDate: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [UserPackage] })
  @ApiNestedQuery(UserPackageFindManyArgs)
  async userPackages(@common.Req() request: Request): Promise<UserPackage[]> {
    const args = plainToClass(UserPackageFindManyArgs, request.query);
    return this.service.userPackages({
      ...args,
      select: {
        createdAt: true,
        id: true,

        packageField: {
          select: {
            id: true,
          },
        },

        purchaseDate: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: UserPackage })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async userPackage(
    @common.Param() params: UserPackageWhereUniqueInput
  ): Promise<UserPackage | null> {
    const result = await this.service.userPackage({
      where: params,
      select: {
        createdAt: true,
        id: true,

        packageField: {
          select: {
            id: true,
          },
        },

        purchaseDate: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: UserPackage })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateUserPackage(
    @common.Param() params: UserPackageWhereUniqueInput,
    @common.Body() data: UserPackageUpdateInput
  ): Promise<UserPackage | null> {
    try {
      return await this.service.updateUserPackage({
        where: params,
        data: {
          ...data,

          packageField: data.packageField
            ? {
                connect: data.packageField,
              }
            : undefined,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,

          packageField: {
            select: {
              id: true,
            },
          },

          purchaseDate: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: UserPackage })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteUserPackage(
    @common.Param() params: UserPackageWhereUniqueInput
  ): Promise<UserPackage | null> {
    try {
      return await this.service.deleteUserPackage({
        where: params,
        select: {
          createdAt: true,
          id: true,

          packageField: {
            select: {
              id: true,
            },
          },

          purchaseDate: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}