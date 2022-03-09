
import getCategories from "./getCategories"

function getCategoryByIndex(index) {
    const categories = getCategories()

    return categories[index]
}

export default getCategoryByIndex