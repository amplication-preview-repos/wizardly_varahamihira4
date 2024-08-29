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
import { TestService } from "../test.service";
import { TestCreateInput } from "./TestCreateInput";
import { Test } from "./Test";
import { TestFindManyArgs } from "./TestFindManyArgs";
import { TestWhereUniqueInput } from "./TestWhereUniqueInput";
import { TestUpdateInput } from "./TestUpdateInput";
import { AnswerFindManyArgs } from "../../answer/base/AnswerFindManyArgs";
import { Answer } from "../../answer/base/Answer";
import { AnswerWhereUniqueInput } from "../../answer/base/AnswerWhereUniqueInput";

export class TestControllerBase {
  constructor(protected readonly service: TestService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Test })
  async createTest(@common.Body() data: TestCreateInput): Promise<Test> {
    return await this.service.createTest({
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
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Test] })
  @ApiNestedQuery(TestFindManyArgs)
  async tests(@common.Req() request: Request): Promise<Test[]> {
    const args = plainToClass(TestFindManyArgs, request.query);
    return this.service.tests({
      ...args,
      select: {
        createdAt: true,
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
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Test })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async test(
    @common.Param() params: TestWhereUniqueInput
  ): Promise<Test | null> {
    const result = await this.service.test({
      where: params,
      select: {
        createdAt: true,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Test })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateTest(
    @common.Param() params: TestWhereUniqueInput,
    @common.Body() data: TestUpdateInput
  ): Promise<Test | null> {
    try {
      return await this.service.updateTest({
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
  @swagger.ApiOkResponse({ type: Test })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteTest(
    @common.Param() params: TestWhereUniqueInput
  ): Promise<Test | null> {
    try {
      return await this.service.deleteTest({
        where: params,
        select: {
          createdAt: true,
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
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/answers")
  @ApiNestedQuery(AnswerFindManyArgs)
  async findAnswers(
    @common.Req() request: Request,
    @common.Param() params: TestWhereUniqueInput
  ): Promise<Answer[]> {
    const query = plainToClass(AnswerFindManyArgs, request.query);
    const results = await this.service.findAnswers(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,
        isCorrect: true,
        orderNumber: true,
        response: true,

        test: {
          select: {
            id: true,
          },
        },

        translation: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/answers")
  async connectAnswers(
    @common.Param() params: TestWhereUniqueInput,
    @common.Body() body: AnswerWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      answers: {
        connect: body,
      },
    };
    await this.service.updateTest({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/answers")
  async updateAnswers(
    @common.Param() params: TestWhereUniqueInput,
    @common.Body() body: AnswerWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      answers: {
        set: body,
      },
    };
    await this.service.updateTest({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/answers")
  async disconnectAnswers(
    @common.Param() params: TestWhereUniqueInput,
    @common.Body() body: AnswerWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      answers: {
        disconnect: body,
      },
    };
    await this.service.updateTest({
      where: params,
      data,
      select: { id: true },
    });
  }
}
