import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';

import Dashboard  from './components/Dashboard';
import { UserList } from './components/UserList';
import { PostList } from './components/PostList';
import { PostEdit } from './components/PostList/PostEdit';
import { PostCreate } from './components/PostList/PostCreate';
import authProvider from './components/authProvider';

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');

const App = () => (
  <Admin dashboard={Dashboard} dataProvider={dataProvider} authProvider={authProvider}>
    <Resource name="posts" icon={PostIcon} list={PostList} edit={PostEdit} create={PostCreate}/>
    <Resource name="users" icon={UserIcon} list={UserList}/>
  </Admin>
);

export default App;