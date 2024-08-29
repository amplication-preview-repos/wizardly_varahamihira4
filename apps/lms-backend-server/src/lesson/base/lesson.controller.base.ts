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
import { LessonService } from "../lesson.service";
import { LessonCreateInput } from "./LessonCreateInput";
import { Lesson } from "./Lesson";
import { LessonFindManyArgs } from "./LessonFindManyArgs";
import { LessonWhereUniqueInput } from "./LessonWhereUniqueInput";
import { LessonUpdateInput } from "./LessonUpdateInput";
import { PracticeFindManyArgs } from "../../practice/base/PracticeFindManyArgs";
import { Practice } from "../../practice/base/Practice";
import { PracticeWhereUniqueInput } from "../../practice/base/PracticeWhereUniqueInput";
import { TestFindManyArgs } from "../../test/base/TestFindManyArgs";
import { Test } from "../../test/base/Test";
import { TestWhereUniqueInput } from "../../test/base/TestWhereUniqueInput";
import { TextMaterialFindManyArgs } from "../../textMaterial/base/TextMaterialFindManyArgs";
import { TextMaterial } from "../../textMaterial/base/TextMaterial";
import { TextMaterialWhereUniqueInput } from "../../textMaterial/base/TextMaterialWhereUniqueInput";
import { VideoFindManyArgs } from "../../video/base/VideoFindManyArgs";
import { Video } from "../../video/base/Video";
import { VideoWhereUniqueInput } from "../../video/base/VideoWhereUniqueInput";

export class LessonControllerBase {
  constructor(protected readonly service: LessonService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Lesson })
  async createLesson(@common.Body() data: LessonCreateInput): Promise<Lesson> {
    return await this.service.createLesson({
      data: {
        ...data,

        packageField: data.packageField
          ? {
              connect: data.packageField,
            }
          : undefined,
      },
      select: {
        content: true,
        createdAt: true,
        deletedAt: true,
        id: true,

        packageField: {
          select: {
            id: true,
          },
        },

        title: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Lesson] })
  @ApiNestedQuery(LessonFindManyArgs)
  async lessons(@common.Req() request: Request): Promise<Lesson[]> {
    const args = plainToClass(LessonFindManyArgs, request.query);
    return this.service.lessons({
      ...args,
      select: {
        content: true,
        createdAt: true,
        deletedAt: true,
        id: true,

        packageField: {
          select: {
            id: true,
          },
        },

        title: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Lesson })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async lesson(
    @common.Param() params: LessonWhereUniqueInput
  ): Promise<Lesson | null> {
    const result = await this.service.lesson({
      where: params,
      select: {
        content: true,
        createdAt: true,
        deletedAt: true,
        id: true,

        packageField: {
          select: {
            id: true,
          },
        },

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
  @swagger.ApiOkResponse({ type: Lesson })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateLesson(
    @common.Param() params: LessonWhereUniqueInput,
    @common.Body() data: LessonUpdateInput
  ): Promise<Lesson | null> {
    try {
      return await this.service.updateLesson({
        where: params,
        data: {
          ...data,

          packageField: data.packageField
            ? {
                connect: data.packageField,
              }
            : undefined,
        },
        select: {
          content: true,
          createdAt: true,
          deletedAt: true,
          id: true,

          packageField: {
            select: {
              id: true,
            },
          },

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
  @swagger.ApiOkResponse({ type: Lesson })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteLesson(
    @common.Param() params: LessonWhereUniqueInput
  ): Promise<Lesson | null> {
    try {
      return await this.service.deleteLesson({
        where: params,
        select: {
          content: true,
          createdAt: true,
          deletedAt: true,
          id: true,

          packageField: {
            select: {
              id: true,
            },
          },

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

  @common.Get("/:id/practices")
  @ApiNestedQuery(PracticeFindManyArgs)
  async findPractices(
    @common.Req() request: Request,
    @common.Param() params: LessonWhereUniqueInput
  ): Promise<Practice[]> {
    const query = plainToClass(PracticeFindManyArgs, request.query);
    const results = await this.service.findPractices(params.id, {
      ...query,
      select: {
        createdAt: true,
        deletedAt: true,
        id: true,

        lesson: {
          select: {
            id: true,
          },
        },

        textTask: true,
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

  @common.Post("/:id/practices")
  async connectPractices(
    @common.Param() params: LessonWhereUniqueInput,
    @common.Body() body: PracticeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      practices: {
        connect: body,
      },
    };
    await this.service.updateLesson({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/practices")
  async updatePractices(
    @common.Param() params: LessonWhereUniqueInput,
    @common.Body() body: PracticeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      practices: {
        set: body,
      },
    };
    await this.service.updateLesson({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/practices")
  async disconnectPractices(
    @common.Param() params: LessonWhereUniqueInput,
    @common.Body() body: PracticeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      practices: {
        disconnect: body,
      },
    };
    await this.service.updateLesson({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/tests")
  @ApiNestedQuery(TestFindManyArgs)
  async findTests(
    @common.Req() request: Request,
    @common.Param() params: LessonWhereUniqueInput
  ): Promise<Test[]> {
    const query = plainToClass(TestFindManyArgs, request.query);
    const results = await this.service.findTests(params.id, {
      ...query,
      select: {
        createdAt: true,
        deletedAt: true,
        id: true,

        lesson: {
          select: {
            id: true,
          },
        },

        questions: true,
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

  @common.Post("/:id/tests")
  async connectTests(
    @common.Param() params: LessonWhereUniqueInput,
    @common.Body() body: TestWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      tests: {
        connect: body,
      },
    };
    await this.service.updateLesson({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/tests")
  async updateTests(
    @common.Param() params: LessonWhereUniqueInput,
    @common.Body() body: TestWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      tests: {
        set: body,
      },
    };
    await this.service.updateLesson({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/tests")
  async disconnectTests(
    @common.Param() params: LessonWhereUniqueInput,
    @common.Body() body: TestWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      tests: {
        disconnect: body,
      },
    };
    await this.service.updateLesson({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/textMaterials")
  @ApiNestedQuery(TextMaterialFindManyArgs)
  async findTextMaterials(
    @common.Req() request: Request,
    @common.Param() params: LessonWhereUniqueInput
  ): Promise<TextMaterial[]> {
    const query = plainToClass(TextMaterialFindManyArgs, request.query);
    const results = await this.service.findTextMaterials(params.id, {
      ...query,
      select: {
        content: true,
        createdAt: true,
        deletedAt: true,
        id: true,

        lesson: {
          select: {
            id: true,
          },
        },

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

  @common.Post("/:id/textMaterials")
  async connectTextMaterials(
    @common.Param() params: LessonWhereUniqueInput,
    @common.Body() body: TextMaterialWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      textMaterials: {
        connect: body,
      },
    };
    await this.service.updateLesson({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/textMaterials")
  async updateTextMaterials(
    @common.Param() params: LessonWhereUniqueInput,
    @common.Body() body: TextMaterialWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      textMaterials: {
        set: body,
      },
    };
    await this.service.updateLesson({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/textMaterials")
  async disconnectTextMaterials(
    @common.Param() params: LessonWhereUniqueInput,
    @common.Body() body: TextMaterialWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      textMaterials: {
        disconnect: body,
      },
    };
    await this.service.updateLesson({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/videos")
  @ApiNestedQuery(VideoFindManyArgs)
  async findVideos(
    @common.Req() request: Request,
    @common.Param() params: LessonWhereUniqueInput
  ): Promise<Video[]> {
    const query = plainToClass(VideoFindManyArgs, request.query);
    const results = await this.service.findVideos(params.id, {
      ...query,
      select: {
        createdAt: true,
        deletedAt: true,
        id: true,

        lesson: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        url: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/videos")
  async connectVideos(
    @common.Param() params: LessonWhereUniqueInput,
    @common.Body() body: VideoWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      videos: {
        connect: body,
      },
    };
    await this.service.updateLesson({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/videos")
  async updateVideos(
    @common.Param() params: LessonWhereUniqueInput,
    @common.Body() body: VideoWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      videos: {
        set: body,
      },
    };
    await this.service.updateLesson({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/videos")
  async disconnectVideos(
    @common.Param() params: LessonWhereUniqueInput,
    @common.Body() body: VideoWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      videos: {
        disconnect: body,
      },
    };
    await this.service.updateLesson({
      where: params,
      data,
      select: { id: true },
    });
  }
}
