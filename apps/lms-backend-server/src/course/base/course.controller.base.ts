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
import { CourseService } from "../course.service";
import { CourseCreateInput } from "./CourseCreateInput";
import { Course } from "./Course";
import { CourseFindManyArgs } from "./CourseFindManyArgs";
import { CourseWhereUniqueInput } from "./CourseWhereUniqueInput";
import { CourseUpdateInput } from "./CourseUpdateInput";
import { PackageModelFindManyArgs } from "../../packageModel/base/PackageModelFindManyArgs";
import { PackageModel } from "../../packageModel/base/PackageModel";
import { PackageModelWhereUniqueInput } from "../../packageModel/base/PackageModelWhereUniqueInput";

export class CourseControllerBase {
  constructor(protected readonly service: CourseService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Course })
  async createCourse(@common.Body() data: CourseCreateInput): Promise<Course> {
    return await this.service.createCourse({
      data: data,
      select: {
        createdAt: true,
        deletedAt: true,
        description: true,
        id: true,
        language: true,
        price: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Course] })
  @ApiNestedQuery(CourseFindManyArgs)
  async courses(@common.Req() request: Request): Promise<Course[]> {
    const args = plainToClass(CourseFindManyArgs, request.query);
    return this.service.courses({
      ...args,
      select: {
        createdAt: true,
        deletedAt: true,
        description: true,
        id: true,
        language: true,
        price: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Course })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async course(
    @common.Param() params: CourseWhereUniqueInput
  ): Promise<Course | null> {
    const result = await this.service.course({
      where: params,
      select: {
        createdAt: true,
        deletedAt: true,
        description: true,
        id: true,
        language: true,
        price: true,
        title: true,
        updatedAt: true,
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
  @swagger.ApiOkResponse({ type: Course })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateCourse(
    @common.Param() params: CourseWhereUniqueInput,
    @common.Body() data: CourseUpdateInput
  ): Promise<Course | null> {
    try {
      return await this.service.updateCourse({
        where: params,
        data: data,
        select: {
          createdAt: true,
          deletedAt: true,
          description: true,
          id: true,
          language: true,
          price: true,
          title: true,
          updatedAt: true,
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
  @swagger.ApiOkResponse({ type: Course })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteCourse(
    @common.Param() params: CourseWhereUniqueInput
  ): Promise<Course | null> {
    try {
      return await this.service.deleteCourse({
        where: params,
        select: {
          createdAt: true,
          deletedAt: true,
          description: true,
          id: true,
          language: true,
          price: true,
          title: true,
          updatedAt: true,
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

  @common.Get("/:id/packages")
  @ApiNestedQuery(PackageModelFindManyArgs)
  async findPackages(
    @common.Req() request: Request,
    @common.Param() params: CourseWhereUniqueInput
  ): Promise<PackageModel[]> {
    const query = plainToClass(PackageModelFindManyArgs, request.query);
    const results = await this.service.findPackages(params.id, {
      ...query,
      select: {
        course: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        deletedAt: true,
        endDate: true,
        homeworkCheckEndDate: true,
        id: true,
        sequenceNumber: true,
        startDate: true,
        title: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/packages")
  async connectPackages(
    @common.Param() params: CourseWhereUniqueInput,
    @common.Body() body: PackageModelWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      packages: {
        connect: body,
      },
    };
    await this.service.updateCourse({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/packages")
  async updatePackages(
    @common.Param() params: CourseWhereUniqueInput,
    @common.Body() body: PackageModelWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      packages: {
        set: body,
      },
    };
    await this.service.updateCourse({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/packages")
  async disconnectPackages(
    @common.Param() params: CourseWhereUniqueInput,
    @common.Body() body: PackageModelWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      packages: {
        disconnect: body,
      },
    };
    await this.service.updateCourse({
      where: params,
      data,
      select: { id: true },
    });
  }
}
