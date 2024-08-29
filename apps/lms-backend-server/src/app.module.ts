import { Module } from "@nestjs/common";
import { CourseModule } from "./course/course.module";
import { PackageModelModule } from "./packageModel/packageModel.module";
import { VideoModule } from "./video/video.module";
import { LocaleModule } from "./locale/locale.module";
import { TextMaterialModule } from "./textMaterial/textMaterial.module";
import { LessonModule } from "./lesson/lesson.module";
import { TestModule } from "./test/test.module";
import { PracticeModule } from "./practice/practice.module";
import { UserPackageModule } from "./userPackage/userPackage.module";
import { AnswerModule } from "./answer/answer.module";
import { UserModule } from "./user/user.module";
import { UserPracticeResponseModule } from "./userPracticeResponse/userPracticeResponse.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    CourseModule,
    PackageModelModule,
    VideoModule,
    LocaleModule,
    TextMaterialModule,
    LessonModule,
    TestModule,
    PracticeModule,
    UserPackageModule,
    AnswerModule,
    UserModule,
    UserPracticeResponseModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
