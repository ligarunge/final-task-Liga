import { useState } from "react"

function Grid() {

    const [imageKids, setImageKids] = useState('/images/pippi.jpg')
    const showImageKids = (image) => {
        setImageKids(image)
        
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
                        <img src="/images/bookQuote.jpg" className="img-fluid" alt="cover" />
                            
                        </div>
                        <div className="col-3 px-0">
                            <img src="/images/loveInTimes1.jpg" className="img-fluid" alt="cover" />
                        </div>
                        <div className="col-3 px-0">
                        <img src={imageKids} className="img-fluid" alt="cover" onMouseLeave={() => showImageKids('/images/pippi.jpg')} onMouseEnter={() => showImageKids('/images/pippiOpac.jpg')} />
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
                               <img src="/images/coverSq5.jpg" className="img-fluid" alt="cover" />
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
                        <img src="/images/girlReading.jpg" className="img-fluid" alt="cover" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                        <img src="/images/girlReading.jpg" className="img-fluid" alt="cover" />
                        </div>
                        <div className="col-6">
                        <img src="/images/girlReading.jpg" className="img-fluid" alt="cover" />
                        </div>
                    </div>
                    
                </div>

            </div>

        </div>
    )
}

export default Grid