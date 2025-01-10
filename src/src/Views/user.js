export default (first, last, picture) => `
  <div class="col-2 mt-4">
    <div class="card">
      <img src="${picture}" class="card-img-top" alt="superman">
      <div class="card-body">
        <h5 class="card-title">${first} ${last}</h5>
      </div>
    </div>
  </div>
`;
