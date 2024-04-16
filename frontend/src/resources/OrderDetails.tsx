//Source code generated by AppGPT (www.appgpt.tech)
import {
  Datagrid,
  List,
  EditButton,
  Edit,
  SimpleForm,
  Create,
  SelectColumnsButton,
  DatagridConfigurable,
  TopToolbar,
  CreateButton,
  ExportButton,
  FilterButton,
  //Field controls
  BooleanField,
  DateField,
  EmailField,
  ImageField,
  NumberField,
  ReferenceField,
  TextField,
  UrlField,
  //Input controls
  BooleanInput,
  DateInput,
  EmailInput,
  ImageInput,
  NumberInput,
  ReferenceInput,
  TextInput,
  UrlInput,
  PasswordInput,
} from 'react-admin';
import { useRecordContext } from 'react-admin';
import { Grid } from '@mui/material';
const ReadOnlyPasswordField = ({ record, source }) => {
  // You can customize the way you display the password here, e.g., mask it with asterisks
  const maskedPassword = '********';

  return <span>{maskedPassword}</span>;
};
const ListActions = () => (
  <TopToolbar>
    <FilterButton />
    <CreateButton />
    <ExportButton />
    <SelectColumnsButton />
  </TopToolbar>
);
const OrderDetailsTitle = () => {
  const record = useRecordContext();
  return <span>OrderDetails {record ? `"${record.orderNumber}"` : ''}</span>;
};

export const OrderDetailsList = () => (
  <List actions={<ListActions />} filters={ResourceFilters}>
    <DatagridConfigurable>
      <ReferenceField source="orderNumber" reference="Orders" />
      <NumberField source="line" />
      <ReferenceField source="product" reference="Products" />
      <NumberField source="price" />
      <NumberField source="quantity" />
      <EditButton />
    </DatagridConfigurable>
  </List>
);

export const OrderDetailsEdit = () => (
  <Edit title={<OrderDetailsTitle />}>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <ReferenceInput source="orderNumber" reference="Orders" />
        </Grid>
        <Grid item xs={4}>
          <NumberInput source="line" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="product" reference="Products" />
        </Grid>
        <Grid item xs={4}>
          <NumberInput source="price" />
        </Grid>
        <Grid item xs={4}>
          <NumberInput source="quantity" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Edit>
);

export const OrderDetailsCreate = () => (
  <Create>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <ReferenceInput source="orderNumber" reference="Orders" />
        </Grid>
        <Grid item xs={4}>
          <NumberInput source="line" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="product" reference="Products" />
        </Grid>
        <Grid item xs={4}>
          <NumberInput source="price" />
        </Grid>
        <Grid item xs={4}>
          <NumberInput source="quantity" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Create>
);

const ResourceFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  <ReferenceInput
    source="orderNumber"
    label="orderNumber"
    reference="Orders"
    alwaysOn
  />,
  ,
  <ReferenceInput
    source="product"
    label="product"
    reference="Products"
    alwaysOn
  />,
  ,
  ,
];
