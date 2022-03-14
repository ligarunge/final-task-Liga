import { Link } from "react-router-dom"
import getCategories from "../Data/getCategories"
import "./Categories.css"

function SuccessCategories() {

    const categories = getCategories()
    const successCategoriesList = categories.map((category, index) => {
        return (
            <div className="col-md-3 m-2 p-1 text-center rounded" key={index}>
                <div className="row m-1 rounded" style={{ backgroundColor: 'whitesmoke'}}>
                    <div className="col-12">
                        <h2 className="font-baskerville hover-bold mt-2">
                            <Link to={`/categories/${index}`} style={{ textDecoration: 'none', color: 'black' }}>
                                {category.title}
                            </Link></h2>
                    </div>
                </div>
                <div className="row m-1 p-1 rounded" style={{ backgroundColor: 'whitesmoke' }}>
                    <div className="col-12">
                        <Link to={`/categories/${index}`} style={{ textDecoration: 'none', color: 'black' }}>
                            <img src={category.img} className="img-fluid rounded" alt="cover" style={{height:'17rem'}}/>
                        </Link>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div className="row pt-5 justify-content-center">
            {successCategoriesList}
        </div>
    )
}

export default SuccessCategories