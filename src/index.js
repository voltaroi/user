import Router from './router';
import ControllerListUsers from './Controllers/list-users';
import ControllerListUser from './Controllers/user-profil';

import './index.scss';

const routes = [{
  url: '/list-users',
  controller: ControllerListUsers
},
{
  url: '/user',
  controller: ControllerListUser
}
];

new Router(routes);
