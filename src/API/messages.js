import axios from "axios";

const baseUrl = 'http://localhost:3000/tasks'

export async function getMessages() {

   const response = await axios.get(baseUrl)

   return response.data
}
export async function createMessage(usernameName, messageName) {
    const data = {
        title: usernameName,
        message: messageName,
    }

    await axios.post(baseUrl, data)

}


export function deleteMessage(id) {

}

