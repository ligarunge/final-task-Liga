function Community() {

    return (
        <div style={{ backgroundColor: 'whitesmoke' }}>
            <div className="row font-baskerville p-4">
                <h3 className="ms-3">About our community</h3>
            </div>
            <div className="row ps-5">
                <div className="col-md-3">
                    <img src='/images/community.jpg' className="img-fluid rounded" alt="creator" />
                </div>
                <div className="col-md-9">
                    <div className="row ps-3 pe-5">
                        <p>Taking time to curl up in your favorite reading chair and devour a good book is one of life's small pleasures.
                            But if you want to share your love for an author, discuss a book's thorny moral questions, or just see some human faces,
                            then the act of reading need not be an isolated affair. In-person book clubs may still be shelved for the foreseeable
                            future, but online book clubs have sprouted up across the globe, breaking physical barriers and crossing international
                            borders to bring like-minded bookworms — and your favorite authors — into your living room.
                        </p>
                    </div>
                </div>
                <div className="row ps-5 p-5">
                    <div className="col-md-9">
                        <p>
                            Small talk? No, thanks. Homework? Pass. <span style={{ textShadow: '2px 2px 4px #000000' }}>BookSea</span> is all about enjoying books,
                            company, and beverages — without having to think of something smart to say. Founded in 2021 by a couple of friends who
                            liked to read in companionable silence, <span style={{ textShadow: '2px 2px 4px #000000' }}>BookSea</span>
                            now has over 240 “chapters” (that's a group) who gather across 30+ countries to read together in silence. <span style={{ textShadow: '2px 2px 4px #000000' }}>BookSea</span>  is all
                            about community. They think it's important to put down our phones and be “real, live, breathing-the-same-air social”. Sure, nobody's
                            forcing you to make small talk over a glass of wine,
                            but you can sit with a book and a friend in a cafe, and if you want to chat about what you're reading — go for it!
                        </p>
                    </div>
                    <div className="col-md-3">
                        <img src='/images/communityKIds.jpeg' className="img-fluid rounded" alt="creator" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Community