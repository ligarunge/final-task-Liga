import { Link } from "react-router-dom"
import getCategories from "../Data/getCategories"

function Categories() {

    const categories = getCategories()
    const categoriesList = categories.map((category, index) => {
        return (
            <div className="container-fluid" key={index}>
                <h3>
                    <Link to={`/categories/${index}`}>
                        {category.title}
                    </Link>
                </h3>
                <p>{category.description}</p>

            </div>
        )
    })
    return (
        <div>
            {categoriesList}
        </div>
    )
}

export default Categories