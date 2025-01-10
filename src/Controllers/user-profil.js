import ViewUser from '../Views/user';

const Users = class Users {
  constructor(data) {
    this.element = document.querySelector('#app');
    this.data = data;
    this.run();
  }

  render() {
    return `
      <div class="container-fluid">${ViewUser(this.data)}</div>
    `;
  }

  run() {
    this.element.innerHTML += this.render();
  }
};

export default Users;
