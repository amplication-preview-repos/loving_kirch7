import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { AUTHORITY_TITLE_FIELD } from "../authority/AuthorityTitle";
import { COLLECTOR_TITLE_FIELD } from "./CollectorTitle";
import { REPORT_TITLE_FIELD } from "../report/ReportTitle";

export const CollectorShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Assignment"
          target="collectorId"
          label="Assignments"
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
            <ReferenceField
              label="report"
              source="report.id"
              reference="Report"
            >
              <TextField source={REPORT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="updateImageUrl" source="updateImageUrl" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
