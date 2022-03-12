import axios from "axios";

const baseUrl = 'http://localhost:3000/tasks'

export async function getMessages() {

    const response = await axios.get(baseUrl)
    return response.data
}
export async function createMessage(title, message) {
    const data = {
        title: title,
        message: message,
    }

    await axios.post(baseUrl, data)

}

export async function deleteMessage(id) {
    const url = `${baseUrl}/${id}`
    await axios.delete(url)
}

