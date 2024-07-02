import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ReportList } from "./report/ReportList";
import { ReportCreate } from "./report/ReportCreate";
import { ReportEdit } from "./report/ReportEdit";
import { ReportShow } from "./report/ReportShow";
import { AuthorityList } from "./authority/AuthorityList";
import { AuthorityCreate } from "./authority/AuthorityCreate";
import { AuthorityEdit } from "./authority/AuthorityEdit";
import { AuthorityShow } from "./authority/AuthorityShow";
import { AssignmentList } from "./assignment/AssignmentList";
import { AssignmentCreate } from "./assignment/AssignmentCreate";
import { AssignmentEdit } from "./assignment/AssignmentEdit";
import { AssignmentShow } from "./assignment/AssignmentShow";
import { CollectorList } from "./collector/CollectorList";
import { CollectorCreate } from "./collector/CollectorCreate";
import { CollectorEdit } from "./collector/CollectorEdit";
import { CollectorShow } from "./collector/CollectorShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
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
        title={"WasteReportService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Report"
          list={ReportList}
          edit={ReportEdit}
          create={ReportCreate}
          show={ReportShow}
        />
        <Resource
          name="Authority"
          list={AuthorityList}
          edit={AuthorityEdit}
          create={AuthorityCreate}
          show={AuthorityShow}
        />
        <Resource
          name="Assignment"
          list={AssignmentList}
          edit={AssignmentEdit}
          create={AssignmentCreate}
          show={AssignmentShow}
        />
        <Resource
          name="Collector"
          list={CollectorList}
          edit={CollectorEdit}
          create={CollectorCreate}
          show={CollectorShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
