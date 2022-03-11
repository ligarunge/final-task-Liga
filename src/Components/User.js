

function User(props) {
    const { user, loadUsers } = props


    return (
        <li className="list-group-item">
            <input 
                type="text" 
                
            />
            <span>{user.title}</span>
           
        </li>
    );
}

export default User;