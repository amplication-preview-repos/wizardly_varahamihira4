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
import { VideoService } from "../video.service";
import { VideoCreateInput } from "./VideoCreateInput";
import { Video } from "./Video";
import { VideoFindManyArgs } from "./VideoFindManyArgs";
import { VideoWhereUniqueInput } from "./VideoWhereUniqueInput";
import { VideoUpdateInput } from "./VideoUpdateInput";

export class VideoControllerBase {
  constructor(protected readonly service: VideoService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Video })
  async createVideo(@common.Body() data: VideoCreateInput): Promise<Video> {
    return await this.service.createVideo({
      data: {
        ...data,

        lesson: data.lesson
          ? {
              connect: data.lesson,
            }
          : undefined,
      },
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
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Video] })
  @ApiNestedQuery(VideoFindManyArgs)
  async videos(@common.Req() request: Request): Promise<Video[]> {
    const args = plainToClass(VideoFindManyArgs, request.query);
    return this.service.videos({
      ...args,
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
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Video })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async video(
    @common.Param() params: VideoWhereUniqueInput
  ): Promise<Video | null> {
    const result = await this.service.video({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Video })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateVideo(
    @common.Param() params: VideoWhereUniqueInput,
    @common.Body() data: VideoUpdateInput
  ): Promise<Video | null> {
    try {
      return await this.service.updateVideo({
        where: params,
        data: {
          ...data,

          lesson: data.lesson
            ? {
                connect: data.lesson,
              }
            : undefined,
        },
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
  @swagger.ApiOkResponse({ type: Video })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteVideo(
    @common.Param() params: VideoWhereUniqueInput
  ): Promise<Video | null> {
    try {
      return await this.service.deleteVideo({
        where: params,
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
