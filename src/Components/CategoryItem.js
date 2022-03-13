import { useState } from "react"
import getCategoryItem from "../Data/getCategoryItem"

function CategoryItem() {

    const categoryItems = getCategoryItem()
    const [keyWord, setKeyWord] = useState('')

    const categoryItemsList = categoryItems
        .filter(categoryItem => keyWord === '' ||
            categoryItem.title.toLowerCase().includes(keyWord.toLowerCase()))
                .map((categoryItem, index) => {

                    return (
                        <div className="col-2 m-3 align-self-center rounded p-1" key={index} style={{ backgroundColor: 'whitesmoke' }}>
                            <div className="row text-center">
                            </div>
                            <a href={categoryItem.imgItemDesc} data-fancybox="galleryFiction">
                                <img src={categoryItem.imgItem} className="img-fluid rounded" alt="cover" />
                            </a>
                        </div>
                    )
                })

    return (
        <div>
            <div className="row justify-content-end align-middle">
                <div className="col-md-3">
                    <input
                        type="text"
                        value={keyWord}
                        onChange={(event) => setKeyWord(event.target.value)} />
                    <span className="m-3" style={{ color: 'rgb(50, 105, 84)' }}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg></span>
                </div>
            </div>
            <div className="row justify-content-around">
                {categoryItemsList}
            </div>
        </div>

    )
}

export default CategoryItem