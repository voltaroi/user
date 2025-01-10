import axios from 'axios';

import ViewNav from '../Views/nav';
import ViewUsers from '../Views/users';
import ViewFooter from '../Views/footer';

const ListUsers = class ListUsers {
  constructor(params) {
    this.el = document.querySelector('#app');
    this.params = params;
    this.users = [];

    this.run();
  }

  render() {
    return `
      ${ViewNav()}
      <div class="container-fluid">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${ViewUsers(this.users)}</li>
        <li class="list-group-item">${ViewUsers(this.users)}</li>
        <li class="list-group-item">${ViewUsers(this.users)}</li>
        <li class="list-group-item">${ViewUsers(this.users)}</li>
        <li class="list-group-item">${ViewUsers(this.users)}</li>
      </ul>
      </div>
      ${ViewFooter()}
    `;
  }

  run() {
    axios.get('https://randomuser.me/api/', {
      params: {
        results: this.params.results
      }
    })
      .then((res) => {
        const { data } = res;

        this.users = data.results;

        this.el.innerHTML = this.render();
      });
  }
};

export default ListUsers;
