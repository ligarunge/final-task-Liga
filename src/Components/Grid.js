import { useState } from "react"
import { Link } from "react-router-dom"

function Grid() {

    const [imageKids, setImageKids] = useState('/images/pippi.jpg')
    const showImageKids = (image) => {
        setImageKids(image)
    }
    const [imageFiction, setImageFiction] = useState('/images/bookQuote.jpg')
    const showImageFiction = (image) => {
        setImageFiction(image)
    }
    const [imageCrime, setImageCrime] = useState('/images/coverSq5.jpg')
    const showImageCrime = (image) => {
        setImageCrime(image)
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-8 px-0">
                    <div className="row align-items-center">
                        <div className="col-3 px-0">
                            <img src="/images/coverSq2.jpg" className="img-fluid" alt="cover" />
                        </div>
                        <div className="col-3 px-0">
                            <Link to="/categories/0">
                                <img src={imageFiction} className="img-fluid" alt="cover"
                                    onMouseLeave={() => showImageFiction('/images/bookQuote.jpg')} onMouseEnter={() => showImageFiction('/images/bookQuoteOpac.jpg')} />
                            </Link>
                        </div>
                        <div className="col-3 px-0">
                            <img src="/images/loveInTimes1.jpg" className="img-fluid" alt="cover" />
                        </div>
                        <div className="col-3 px-0">
                            <Link to="/categories/2">
                                <img src={imageKids} className="img-fluid" alt="cover"
                                    onMouseLeave={() => showImageKids('/images/pippi.jpg')} onMouseEnter={() => showImageKids('/images/pippiOpac.jpg')} />
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3 px-0">
                            <div className="row">
                                <div className="col-12">
                                    <img src="/images/coverSq1.jpg" className="img-fluid" alt="cover" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">

                                </div>
                            </div>
                        </div>
                        <div className="col-3 px-0">
                            <div className="row">
                                <div className="col-12">
                                    <Link to="/categories/1">
                                        <img src={imageCrime} className="img-fluid" alt="cover"
                                            onMouseLeave={() => showImageCrime('/images/coverSq5.jpg')} onMouseEnter={() => showImageCrime('/images/crimeOpac.jpg')} />
                                    </Link>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <img src="/images/manReading.jpg" className="img-fluid" alt="cover" />
                                </div>
                            </div>
                        </div>

                        <div className="col-6 px-0">
                            <img src="/images/coverSq6.jpg" className="img-fluid" alt="cover" />
                        </div>

                    </div>
                </div>
                <div className="col-md-4 px-0">
                    <div className="row">
                        <div className="col-12">
                            <img src="/images/kids1.jpg" className="img-fluid" alt="cover" />
                        </div>
                    </div>
                    <div className="row g-0">
                        <div className="col-6 g-0">
                            <img src="/images/coverSq8.jpg" className="img-fluid" alt="cover" />
                        </div>
                        <div className="col-6">
                            <img src="/images/moose.jpg" className="img-fluid" alt="cover" />
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Grid