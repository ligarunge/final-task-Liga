import { useState } from "react";
import { createUsername } from "../API/tasks";

function CreateNewUser(props) {
    const { loadUsers } = props
    const [newUserName, setNewUserName] = useState('')
    const [userCreating, setUserCreating] = useState(false)

    const createUserAction = async () => {
        setUserCreating(true)
        await createUsername(newUserName)
        setUserCreating(false)
        await loadUsers()
        setNewUserName('')
    }

    return (
        <div>
            <label htmlFor="new-user-name">New User:</label>
            <input 
                type="text" 
                value={newUserName} 
                onChange={(event) => setNewUserName(event.target.value)} 
                id="new-user-name"
            />
            <button 
                className="btn btn-success" 
                disabled={userCreating}
                onClick={createUserAction}
            >
                Add User
            </button>
      </div>
    );
}

export default CreateNewUser;