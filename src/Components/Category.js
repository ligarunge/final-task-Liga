import { Link, useParams } from "react-router-dom";
import getCategoryByIndex from "../Data/getCategoryByIndex";

function Category() {
    const {index} = useParams()
    const category = getCategoryByIndex(index)

    return (
        <div>
            <h5>
                <Link to="/">Back</Link>
            </h5>
            <h3>{category.title}</h3>
        </div>
    )
}

export default Category