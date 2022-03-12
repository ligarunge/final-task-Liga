import Categories from "../Components/Categories"

function CategoriesPage() {

    return (
        <div className="container-fluid" style={{ backgroundImage: "url(/Images/booksHand.jpg)", backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
            <Categories />
        </div>
    )
}

export default CategoriesPage