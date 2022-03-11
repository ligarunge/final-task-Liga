import { Link } from "react-router-dom"
import getCategories from "../Data/getCategories"

function Categories() {

    const categories = getCategories()
    const categoriesList = categories.map((category, index) => {
        return (
            <div className="row pt-5 justify-content-center">
                <div className="col-10 mt-5 pt-5">
                    <div className="card" key={index} style={{ maxWidth: '' }}>
                        <div className="row justify-content-center">
                            <div className="col-md-4">
                                <img src="/images/cover4.jpg" className="img-fluid rounded" alt="cover" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">

                                    <h5 className="card-title"><Link to={`/categories/${index}`}>
                                        {category.title}
                                    </Link></h5>
                                    <p className="card-text">{category.description}</p>
                                    <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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