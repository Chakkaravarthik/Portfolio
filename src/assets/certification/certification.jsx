import React, { useState } from 'react';
import './certificate.css';
import FSD from './FSD.png';
import REACT from './React JS.png';
import NODEJS from './Node JS.png';
import MYSQL from './MySQL.png';
import MongoDB from './MongoDB.png';

function ShowCertificate() {
    // State to manage popup visibility and the image to display
    const [popupImg, setPopupImg] = useState(null);

    // Function to handle image click and show popup
    const popimg = (img) => {
        setPopupImg(img); // Set the image for the popup
    };

    // Function to close the popup
    const closePopup = () => {
        setPopupImg(null); // Clear the image, closing the popup
    };

    return (
        <>
            <div className="d-flex flex-column align-items-center p-3">
                <div className="colorh p-3">Certificate</div>
                <div className="d-flex justify-content-center paadingtop">
                    <div className="widthset d-flex">
                        {/* Cards for images */}
                        <div className="card width m-3">
                            <img
                                src={FSD}
                                className="card-img-top"
                                alt="Full Stack Developer"
                                onClick={() => popimg(FSD)} // Pass image to popimg
                            />
                            <div className="card-body d-flex justify-content-center">
                                <p className="card-text"><b>Full Stack Developer</b></p>
                            </div>
                        </div>

                        <div className="card width m-3">
                            <img
                                src={REACT}
                                className="card-img-top"
                                alt="React JS"
                                onClick={() => popimg(REACT)}
                            />
                            <div className="card-body d-flex justify-content-center">
                                <p className="card-text"><b>React JS</b></p>
                            </div>
                        </div>

                        <div className="card width m-3">
                            <img
                                src={NODEJS}
                                className="card-img-top"
                                alt="Node JS"
                                onClick={() => popimg(NODEJS)}
                            />
                            <div className="card-body d-flex justify-content-center">
                                <p className="card-text"><b>Node JS</b></p>
                            </div>
                        </div>

                        <div className="card width m-3">
                            <img
                                src={MongoDB}
                                className="card-img-top"
                                alt="MongoDB"
                                onClick={() => popimg(MongoDB)}
                            />
                            <div className="card-body d-flex justify-content-center">
                                <p className="card-text"><b>MongoDB</b></p>
                            </div>
                        </div>

                        <div className="card width m-3">
                            <img
                                src={MYSQL}
                                className="card-img-top"
                                alt="MySQL"
                                onClick={() => popimg(MYSQL)}
                            />
                            <div className="card-body d-flex justify-content-center">
                                <p className="card-text"><b>MySQL</b></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Popup Component */}
            {popupImg && <PopUpImage img={popupImg} closePopup={closePopup} />}
        </>
    );
}

// PopUpImage Component
function PopUpImage({ img, closePopup }) {
    return (
        <div className="popup-overlay" onClick={closePopup}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                <img src={img} alt="Certificate" className="popup-img" />
                <button className="close-btn" onClick={closePopup}>Close</button>
            </div>
        </div>
    );
}

export default ShowCertificate;
