import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { AuthorityTitle } from "../authority/AuthorityTitle";
import { CollectorTitle } from "../collector/CollectorTitle";
import { ReportTitle } from "../report/ReportTitle";

export const AssignmentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="authority.id"
          reference="Authority"
          label="authority"
        >
          <SelectInput optionText={AuthorityTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="collector.id"
          reference="Collector"
          label="collector"
        >
          <SelectInput optionText={CollectorTitle} />
        </ReferenceInput>
        <ReferenceInput source="report.id" reference="Report" label="report">
          <SelectInput optionText={ReportTitle} />
        </ReferenceInput>
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="updateImageUrl" source="updateImageUrl" />
      </SimpleForm>
    </Edit>
  );
};
