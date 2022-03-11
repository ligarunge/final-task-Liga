import User from "./User";

function UsersList(props) {
    const { users, loadUsers } = props

    const usersList = users.map((user, index) => {
        return <User user={user} key={index} loadUsers={loadUsers} />
    })

    return (
        <div>
            <ul className="list-group">
                {usersList}
            </ul>
        </div>
    );
}

export default UsersList;