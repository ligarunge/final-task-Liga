import ReactPlayer from "react-player";
import "./Carousel.css"
function Carousel() {

    return (
        <div className="container-fluid px-0">
            <div id="carouselBooks" className="carousel carousel-dark slide m-0" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselBooks" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselBooks" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselBooks" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img src={'/images/booksHand.jpg'} className="d-block w-100" alt="booksOnHand" width={"100%"}
                            height={'100%'} />
                        <div className="carousel-caption carousel-caption-right d-none d-md-block" style={{ top: '0' }}>
                            <div className="pt-5 mt-5">
                                <p className="font-baskerville h3">"If you would tell me the heart of a man,</p>
                                <p className="font-baskerville h3">tell me not what he reads, but what he rereads.</p></div>
                            <p className="font-baskerville mt-3 blockquote-footer" style={{ color: 'black' }}> Francois Mauriac</p>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <ReactPlayer url="/videos/blackAndWhite.mp4" muted={true} playing={true}
                            loop={true}
                            width={"100%"}
                            height={'100%'} />
                        <div className="carousel-caption carousel-caption-left d-none d-md-block" style={{ top: '0' }}>
                        <div className="pt-5 mt-5" style={{ color: 'white' }}>
                                <p className="font-baskerville h3">"Some of these things are true and some of them lies. </p>
                                <p className="font-baskerville h3">But they are all good stories.</p></div>
                            <p className="font-baskerville mt-3 blockquote-footer" style={{ color: 'white' }}> Hilary Mantel, Wolf Hall</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <ReactPlayer url="/videos/bookInBed.mp4" muted={true} playing={true}
                            loop={true}
                            width={"100%"}
                            height={'100%'} />
                        <div className="carousel-caption d-none d-md-block" style={{ top: '0', paddingTop: '20rem' }}>
                        <div className="pt-5 mt-5">
                                <p className="font-baskerville h3">"You know you've read a good book when you turn the last page</p>
                                <p className="font-baskerville h3">and feel a little as if you have lost a friend.</p></div>
                            <p className="font-baskerville mt-3 blockquote-footer" style={{ color: 'black' }}> Paul Sweeney</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselBooks" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselBooks" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Carousel