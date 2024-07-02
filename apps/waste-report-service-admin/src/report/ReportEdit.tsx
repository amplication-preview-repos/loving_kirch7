import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  SelectInput,
} from "react-admin";

import { AssignmentTitle } from "../assignment/AssignmentTitle";

export const ReportEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="assignments"
          reference="Assignment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AssignmentTitle} />
        </ReferenceArrayInput>
        <TextInput label="description" multiline source="description" />
        <TextInput label="imageUrl" source="imageUrl" />
        <TextInput label="location" source="location" />
        <TextInput label="reportedBy" source="reportedBy" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
