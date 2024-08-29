import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { CourseList } from "./course/CourseList";
import { CourseCreate } from "./course/CourseCreate";
import { CourseEdit } from "./course/CourseEdit";
import { CourseShow } from "./course/CourseShow";
import { PackageModelList } from "./packageModel/PackageModelList";
import { PackageModelCreate } from "./packageModel/PackageModelCreate";
import { PackageModelEdit } from "./packageModel/PackageModelEdit";
import { PackageModelShow } from "./packageModel/PackageModelShow";
import { VideoList } from "./video/VideoList";
import { VideoCreate } from "./video/VideoCreate";
import { VideoEdit } from "./video/VideoEdit";
import { VideoShow } from "./video/VideoShow";
import { LocaleList } from "./locale/LocaleList";
import { LocaleCreate } from "./locale/LocaleCreate";
import { LocaleEdit } from "./locale/LocaleEdit";
import { LocaleShow } from "./locale/LocaleShow";
import { TextMaterialList } from "./textMaterial/TextMaterialList";
import { TextMaterialCreate } from "./textMaterial/TextMaterialCreate";
import { TextMaterialEdit } from "./textMaterial/TextMaterialEdit";
import { TextMaterialShow } from "./textMaterial/TextMaterialShow";
import { LessonList } from "./lesson/LessonList";
import { LessonCreate } from "./lesson/LessonCreate";
import { LessonEdit } from "./lesson/LessonEdit";
import { LessonShow } from "./lesson/LessonShow";
import { TestList } from "./test/TestList";
import { TestCreate } from "./test/TestCreate";
import { TestEdit } from "./test/TestEdit";
import { TestShow } from "./test/TestShow";
import { PracticeList } from "./practice/PracticeList";
import { PracticeCreate } from "./practice/PracticeCreate";
import { PracticeEdit } from "./practice/PracticeEdit";
import { PracticeShow } from "./practice/PracticeShow";
import { UserPackageList } from "./userPackage/UserPackageList";
import { UserPackageCreate } from "./userPackage/UserPackageCreate";
import { UserPackageEdit } from "./userPackage/UserPackageEdit";
import { UserPackageShow } from "./userPackage/UserPackageShow";
import { AnswerList } from "./answer/AnswerList";
import { AnswerCreate } from "./answer/AnswerCreate";
import { AnswerEdit } from "./answer/AnswerEdit";
import { AnswerShow } from "./answer/AnswerShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { UserPracticeResponseList } from "./userPracticeResponse/UserPracticeResponseList";
import { UserPracticeResponseCreate } from "./userPracticeResponse/UserPracticeResponseCreate";
import { UserPracticeResponseEdit } from "./userPracticeResponse/UserPracticeResponseEdit";
import { UserPracticeResponseShow } from "./userPracticeResponse/UserPracticeResponseShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"LMSBackend"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Course"
          list={CourseList}
          edit={CourseEdit}
          create={CourseCreate}
          show={CourseShow}
        />
        <Resource
          name="PackageModel"
          list={PackageModelList}
          edit={PackageModelEdit}
          create={PackageModelCreate}
          show={PackageModelShow}
        />
        <Resource
          name="Video"
          list={VideoList}
          edit={VideoEdit}
          create={VideoCreate}
          show={VideoShow}
        />
        <Resource
          name="Locale"
          list={LocaleList}
          edit={LocaleEdit}
          create={LocaleCreate}
          show={LocaleShow}
        />
        <Resource
          name="TextMaterial"
          list={TextMaterialList}
          edit={TextMaterialEdit}
          create={TextMaterialCreate}
          show={TextMaterialShow}
        />
        <Resource
          name="Lesson"
          list={LessonList}
          edit={LessonEdit}
          create={LessonCreate}
          show={LessonShow}
        />
        <Resource
          name="Test"
          list={TestList}
          edit={TestEdit}
          create={TestCreate}
          show={TestShow}
        />
        <Resource
          name="Practice"
          list={PracticeList}
          edit={PracticeEdit}
          create={PracticeCreate}
          show={PracticeShow}
        />
        <Resource
          name="UserPackage"
          list={UserPackageList}
          edit={UserPackageEdit}
          create={UserPackageCreate}
          show={UserPackageShow}
        />
        <Resource
          name="Answer"
          list={AnswerList}
          edit={AnswerEdit}
          create={AnswerCreate}
          show={AnswerShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="UserPracticeResponse"
          list={UserPracticeResponseList}
          edit={UserPracticeResponseEdit}
          create={UserPracticeResponseCreate}
          show={UserPracticeResponseShow}
        />
      </Admin>
    </div>
  );
};

export default App;
