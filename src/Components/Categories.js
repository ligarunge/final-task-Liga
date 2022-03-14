import { Link } from "react-router-dom"
import getCategories from "../Data/getCategories"
import "./Categories.css"

function Categories() {

    const categories = getCategories()
    const categoriesList = categories.map((category, index) => {
        return (
            <div className="row pt-5 pb-5 justify-content-center" key={index}>
                <div className="col-md-3 mt-5 pt-5 pb-5 d-flex justify-content-center" style={{ backgroundColor: '' }}>
                    <Link to={`/categories/${index}`} style={{ textDecoration: 'none', color: 'black' }}>
                        <img src={category.img} className="img-fluid rounded" alt="cover" />
                    </Link>
                </div>
                <div className="col-md-7 mt-5 pt-5 rounded" style={{ backgroundColor: 'whitesmoke' }}>
                    <div className="row ms-5">
                        <div className="col">
                            <h2 className="font-baskerville hover-bold">
                                <Link to={`/categories/${index}`} style={{ textDecoration: 'none', color: 'black' }}>
                                    {category.title}
                                </Link></h2>
                        </div>
                    </div>
                    <div className="row m-4">
                        <div className="col">
                            <p className="card-text">{category.description}</p>
                        </div>
                    </div>
                    <div className="row m-4">
                        {category.itemProps
                        .slice(0, 6)
                        .map((itemProp, j) => {
                            return (
                                <div className="col-md-2 p-0">
                                    <img src={itemProp.imgItem} className="img-fluid rounded" style={{ height: '13rem' }} alt="cover" />
                                </div>
                            )
                        }
                        )}
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