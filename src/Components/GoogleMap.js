function GoogleMap() {

    return (
        <div>
            <div className="map-responsive">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2178.4906810673156!2d24.094890315946937!3d56.906118380877544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eed1aef95e2c73%3A0xf00cfce43573480!2zxJJiZWxtdWnFvmFzIFBhcmtz!5e0!3m2!1ses!2slv!4v1638117045329!5m2!1ses!2slv"
                    width="600"
                    height="450"
                    frameBorder="0"
                    title="googleMap"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"></iframe>
            </div>
        </div>
    )
}

export default GoogleMap