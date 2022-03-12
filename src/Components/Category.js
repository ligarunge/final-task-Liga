import { Link, useParams } from "react-router-dom";
import getCategoryByIndex from "../Data/getCategoryByIndex";

function Category() {
    const {index} = useParams()
    const category = getCategoryByIndex(index)

    return (
        <div className="container-fluid" style={{ backgroundImage: "url(/Images/booksHand.jpg)", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', minHeight:'120vh'}}>
            <div className="row pt-5">
                <div className="col mt-5">
                <h5>
                <Link to="/categories">Back</Link>
            </h5>
            <h3>{category.title}</h3>
                </div>
            </div>
            
            
        </div>
       
    )
}

export default Category