import Tabs from "../Components/Tabs";

function AboutUs() {

    return(

        <div className="container-fluid" style={{ backgroundImage: "url(/Images/openNotebook.)", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '140vh' }}>
            <Tabs />
            <img className="opacity-50" src="/images/pippi.jpg" style={{height: '30rem'}}></img>
        </div>
    )
}

export default AboutUs