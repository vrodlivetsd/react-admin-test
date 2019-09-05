import React from 'react';
import {List, Datagrid, ReferenceField, TextField, EditButton, Filter, ReferenceInput, SelectInput} from 'react-admin';

const PostFilter = props => (
    <Filter {...props}>
        <TextField label="Search" source="q" alwaysOn/>
        <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name"/>
        </ReferenceInput>
    </Filter>
);

export const PostList = props => (
    <List filters={<PostFilter/>} {...props}>
        <Datagrid>
            <TextField source="id" />
            <ReferenceField source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="title" />
            <TextField source="body" />
            <EditButton/>
        </Datagrid>
    </List>
);