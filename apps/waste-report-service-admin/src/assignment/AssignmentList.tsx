import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { AUTHORITY_TITLE_FIELD } from "../authority/AuthorityTitle";
import { COLLECTOR_TITLE_FIELD } from "../collector/CollectorTitle";
import { REPORT_TITLE_FIELD } from "../report/ReportTitle";

export const AssignmentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Assignments"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField
          label="authority"
          source="authority.id"
          reference="Authority"
        >
          <TextField source={AUTHORITY_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="collector"
          source="collector.id"
          reference="Collector"
        >
          <TextField source={COLLECTOR_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="report" source="report.id" reference="Report">
          <TextField source={REPORT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="updateImageUrl" source="updateImageUrl" />
      </Datagrid>
    </List>
  );
};
