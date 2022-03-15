import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import getCategoryByIndex from "../Data/getCategoryByIndex";


function Category() {
    const { index } = useParams()
    const category = getCategoryByIndex(index)
    const [keyWord, setKeyWord] = useState('')
    const [tenItems, setTenItems] = useState(0)
    const nextTen = tenItems + 10

    const previousPage = () => {
        let nextPageItems = tenItems - 10
        if (nextPageItems < 0) {
            nextPageItems = 0
        }
        setTenItems(nextPageItems)
    }
    const showFirstPage = () => {
        setTenItems(0)
    }
    const showSecondPage = () => {
        setTenItems(10)
    }
    const showThirdPage = () => {
        setTenItems(20)
    }
    const nextPage = () => {
        let nextPageItems = tenItems + 10
        if (nextPageItems > 30) {
            nextPageItems = 30
        }
        setTenItems(nextPageItems)
    }

    const itemPropsList = category.itemProps
        .filter(category => keyWord === '' ||
            category.titleItem.toLowerCase().includes(keyWord.toLowerCase()))
        .slice(tenItems, nextTen)
        .map((itemProp, i) => {
            return (
                <div className="col-md-2 mb-5 mt-5 m-1 rounded text-center">
                    <a href={itemProp.imgItem} data-fancybox="galleryCategoryItems">
                        <img src={itemProp.imgItem} key={i} className="img-fluid img-responsive rounded m-2" alt="cover" style={{ height: '20rem' }} />
                    </a>
                </div>
            )
        })

    return (
        <div className="container-fluid" style={{ backgroundImage: "url(/Images/booksHand.jpg)", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', minHeight: '100vh' }}>
            <div className="row ms-5 pt-5 justify-content-end">
                <div className="col-md-11 pt-5 mt-3 ms-5">
                    <h1 className="font-baskerville">
                        {category.title}
                    </h1>
                </div>
            </div>
            <div className="row justify-content-end align-middle pt-5">
                <div className="col-md-3">
                    <input
                        type="text"
                        value={keyWord}
                        onChange={(event) => setKeyWord(event.target.value)} />
                    <span className="m-3" style={{ color: 'rgb(50, 105, 84)' }}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg></span>
                </div>
            </div>
            <div className="row justify-content-around ms-5 me-5" style={{ minHeight: '50vh' }}>
                {itemPropsList}
            </div>
            <nav aria-label="Page navigation align-bottom">
                <div className="row justify-content-end">
                    <div className="col-md-2 m-3">
                        <button className="btn btn-outline-secondary" onClick={() => previousPage(tenItems)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-left" viewBox="0 0 16 16">
                                <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z" />
                            </svg>
                        </button>
                        <button className="btn btn-outline-secondary" onClick={() => showFirstPage(tenItems)}>1</button>
                        <button className="btn btn-outline-secondary" onClick={() => showSecondPage(tenItems)}>2</button>
                        <button className="btn btn-outline-secondary" onClick={() => showThirdPage(tenItems)}>3</button>
                        <button className="btn btn-outline-secondary" onClick={() => nextPage(tenItems)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right" viewBox="0 0 16 16">
                                <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Category