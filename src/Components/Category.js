import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import getCategoryByIndex from "../Data/getCategoryByIndex";
import CategoryItem from "./CategoryItem";

function Category() {
    const { index } = useParams()
    const category = getCategoryByIndex(index)
    const [keyWord, setKeyWord] = useState('')

    const itemPropsList = category.itemProps
        .filter(category => keyWord === '' ||
            category.titleItem.toLowerCase().includes(keyWord.toLowerCase()))
        .map((itemProp, i) => {
            return (
                <div className="col-md-2 m-3">
                    <img src={itemProp.imgItem} key={i} className="img-fluid rounded m-2" alt="cover" style={{ height: '20rem' }} />
                </div>
            )
        })

    return (
        <div className="container-fluid" style={{ backgroundImage: "url(/Images/booksHand.jpg)", backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <div className="row justify-content-end align-middle pt-5">
                <div className="col-md-3 pt-5 mt-5">
                    <input
                        type="text"
                        value={keyWord}
                        onChange={(event) => setKeyWord(event.target.value)} />
                    <span className="m-3" style={{ color: 'rgb(50, 105, 84)' }}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg></span>
                </div>
            </div>
            <div className="row p-3 ms-5 me-5">
                {itemPropsList}
            </div>
        </div>


    )
}

export default Category