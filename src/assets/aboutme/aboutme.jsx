import './aboutme.css';

function AboutMe() {
    return (
        <>
            <div className="container-fluid d-flex justify-content-center paddingtop50">
                <div className="carddisplay d-flex justify-content-center ">
                    <div className="d-flex flex-column justify-content-center  paddingtop50">
                        <div className='fontweight2rem p-2'>Hello World, I am</div>
                        <div className='color fontweight '>Chakkaravarthi K</div>
                        <div className='fs-3 p-2'>A Full Stack Developer</div>
                        <div className='fs-4 opacity p-2'>"Building dynamic, full-stack web applications with MERN Stack."</div>
                        <div className="d-flex justify-content-start ">
                            <a className='p-3' href='https://www.linkedin.com/in/chakkaravarthi-k-083345172/' target="_blank"><svg fill="#000000" width="50px" height="50px" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg">
                                <path d="M96,80a8,8,0,1,1-8-8A7.99993,7.99993,0,0,1,96,80Zm-8,28.001a4,4,0,0,0-4,4v64a4,4,0,1,0,8,0v-64A4,4,0,0,0,88,108.001Zm60,0a31.92463,31.92463,0,0,0-24,10.86767V112.001a4,4,0,0,0-8,0v64a4,4,0,1,0,8,0v-36a24,24,0,0,1,48,0v36a4,4,0,1,0,8,0v-36A32.03619,32.03619,0,0,0,148,108.001ZM224,44V212a12.01375,12.01375,0,0,1-12,12H44a12.01375,12.01375,0,0,1-12-12V44A12.01359,12.01359,0,0,1,44,32H212A12.01359,12.01359,0,0,1,224,44Zm-8,0a4.00458,4.00458,0,0,0-4-4H44a4.00458,4.00458,0,0,0-4,4V212a4.00458,4.00458,0,0,0,4,4H212a4.00458,4.00458,0,0,0,4-4Z" />
                            </svg></a>
                            <a className='p-3' href='https://github.com/Chakkaravarthik' target='_blank'>
                                <svg fill="#000000" width="50px" height="50px" viewBox="0 0 32 32" id="icon" xmlns="http://www.w3.org/2000/svg">
                                    <title>logo--github</title>
                                    <path d="M16,2a14,14,0,0,0-4.43,27.28c.7.13,1-.3,1-.67s0-1.21,0-2.38c-3.89.84-4.71-1.88-4.71-1.88A3.71,3.71,0,0,0,6.24,22.3c-1.27-.86.1-.85.1-.85A2.94,2.94,0,0,1,8.48,22.9a3,3,0,0,0,4.08,1.16,2.93,2.93,0,0,1,.88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4,5.4,0,0,1,1.44-3.76,5,5,0,0,1,.14-3.7s1.17-.38,3.85,1.43a13.3,13.3,0,0,1,7,0c2.67-1.81,3.84-1.43,3.84-1.43a5,5,0,0,1,.14,3.7,5.4,5.4,0,0,1,1.44,3.76c0,5.38-3.27,6.56-6.39,6.91a3.33,3.33,0,0,1,.95,2.59c0,1.87,0,3.38,0,3.84s.25.81,1,.67A14,14,0,0,0,16,2Z" fill-rule="evenodd" />
                                    <rect width="32" height="32" fill="none" />
                                </svg>
                            </a>
                            <a className='p-3' href='https://drive.google.com/file/d/1MJ-l56pMsoa0v37OU4HoXRFsMDReb1o8/view?usp=drive_link' target='_blank'>
                                <svg height="50px" width="50px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                    viewBox="0 0 512 512" xml:space="preserve">
                                    <g>
                                        <path fill='#000000' d="M276.239,252.183c-6.37,2.127-13.165,3.308-20.239,3.308c-7.074,0-13.87-1.181-20.24-3.308
		c-46.272,7.599-70.489,41.608-70.489,82.877H256h90.728C346.728,293.791,322.515,259.782,276.239,252.183z"/>
                                        <path fill='#000000' d="M256,240.788c27.43,0,49.658-22.24,49.658-49.666v-14.087c0-27.426-22.228-49.659-49.658-49.659
		c-27.43,0-49.658,22.233-49.658,49.659v14.087C206.342,218.548,228.57,240.788,256,240.788z"/>
                                        <path fill='#000000' d="M378.4,0H133.582C86.234,0,47.7,38.542,47.7,85.899v340.22C47.7,473.476,86.234,512,133.582,512h205.695
		h13.175l9.318-9.301l93.229-93.229l9.301-9.31v-13.174V85.899C464.3,38.542,425.766,0,378.4,0z M432.497,386.985H384.35
		c-24.882,0-45.074,20.183-45.074,45.073v48.139H133.582c-29.866,0-54.078-24.221-54.078-54.078V85.899
		c0-29.874,24.212-54.096,54.078-54.096H378.4c29.876,0,54.096,24.222,54.096,54.096V386.985z"/>
                                    </g>
                                </svg>
                            </a>
                            <a className='p-3' href='mailto:chakkaravarthik99@gmail.com' target='_blank'>
                                <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <rect x="3" y="5" width="18" height="14" rx="2" stroke="#000000" stroke-width="2" stroke-linecap="round" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className=' paddingtop50'>
                        <div className=' p-3 d-flex justify-content-center'>
                            <svg width="350px" height="350px" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M147.401 313.003C39.8487 313.003 42.2988 313.003 87.1135 209.526V275.47" stroke="#8a2be2" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M324.557 227.946C304.429 227.192 195.421 226.265 187.533 234.155C176.154 245.537 148.004 324.113 159.274 339.143C235.863 340.602 293.78 342.161 305.108 337.629C310.954 335.29 315.624 328.565 318.228 322.487C320.29 317.673 341.944 244.299 341.944 242.231" stroke="#8a2be2" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M155.578 338.466C139.386 332.347 122.408 326.968 106.819 318.962" stroke="#8a2be2" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M109.285 124.88C83.9951 207.964 197.142 243.153 227.106 159.615C243.349 114.329 188.699 47.6707 132.681 97.7025" stroke="#8a2be2" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M187.702 157.793C188.738 154.993 189.477 153.351 190.056 150.635" stroke="#8a2be2" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M164.323 157.307C165.41 155.075 165.59 153.074 166.015 150.55" stroke="#8a2be2" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutMe;