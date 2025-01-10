export default (data) => `
    <img src=${data.img} alt="User Image" class="profile-img">
    <div class="infos>
        <h1>${decodeURIComponent(data.firstname)}</h1>
        <h1>${decodeURIComponent(data.lastname)}</h1>
        <h1>${decodeURIComponent(data.email)}</h1>
    </div>
`;
