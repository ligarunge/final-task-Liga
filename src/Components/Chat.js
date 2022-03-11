import { useEffect, useState } from "react";
import { getTasks } from "../API/tasks";
import CreateNewTask from "./CreateNewTask";
import CreateNewUser from "./CreateNewUser";
import TasksList from "./TasksList";
import UsersList from "./UsersList";

function Chat() {
    const [tasks, setTasks] = useState([])
    const [users, setUsers] = useState([])
    const [tasksLoading, setTasksLoading] = useState(true)
    const [usersLoading, setUsersLoading] = useState(true)

    const loadTasks = async () => {
        setTasksLoading(true)
        const tasksFromBackend = await getTasks()
        setTasks(tasksFromBackend)
        setTasksLoading(false)
    }
    const loadUsers = async () => {
        setUsersLoading(true)
        const usersFromBackend = await getTasks()
        setUsers(usersFromBackend)
        setUsersLoading(false)
    }

    useEffect(() => {
        loadTasks()
    }, [])

    let tasksList = <div><h4>Loading...</h4></div>
    if (tasksLoading === false && tasks.length > 0) {
        tasksList = <TasksList tasks={tasks} loadTasks={loadTasks} />
    } else if (tasksLoading === false && tasks.length === 0) {
        tasksList = <div><h4>No tasks found</h4></div>
    }
    useEffect(() => {
        loadUsers()
    }, [])

    let usersList = <div><h4>Loading...</h4></div>
    if (usersLoading === false && users.length > 0) {
        usersList = <UsersList users={users} loadUsers={loadUsers} />
    } else if (usersLoading === false && users.length === 0) {
        usersList = <div><h4>No tasks found</h4></div>
    }

    return (
        <div className="mt-5">
            <h1>My messages:</h1>
            {usersList}
            {tasksList}
            <h3>Create a new task</h3>
            <CreateNewTask loadTasks={loadTasks} />
            <CreateNewUser loadUser={loadUsers} />
        </div>
    );
}

export default Chat;