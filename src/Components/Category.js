import { Link, useParams } from "react-router-dom";
import getCategoryByIndex from "../Data/getCategoryByIndex";
import CategoryItem from "./CategoryItem";

function Category() {
    const { index } = useParams()
    const category = getCategoryByIndex(index)

    return (
        <div className="container-fluid" style={{ backgroundImage: "url(/Images/booksHand.jpg)", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', minHeight: '120vh' }}>
            <div className="row pt-3 justify-content-end">
                <div className="col-11 p-5">     
                    <h1 className="font-baskerville m-3">{category.title}</h1>
                </div>
            </div>
            <div className="m-5">
                <CategoryItem />
            </div>
        </div>
    )
}

export default Category