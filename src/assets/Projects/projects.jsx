import './projects.css';
import movie1 from '../../assets/img/movie1.png'
import movie2 from '../../assets/img/movie2.png'
import task1 from '../../assets/img/task1.png'
import ecom1 from '../../assets/img/ecom1.png'
import ecom2 from '../../assets/img/ecom2.png'
import erp1 from '../../assets/img/erp1.png'
import erp2 from '../../assets/img/erp2.png'


function Project() {

    return (
        <>
            <div className='d-flex flex-column justify-content-center align-items-center pt-3 '>
                <h1 className='projecthead size'>Projects</h1>
                <ProjectList5 />
                <ProjectList1 />
                {/* <ProjectList2 /> */}
                <ProjectList3 />
                <ProjectList4 />
            </div>
        </>
    )
}

export default Project;

function ProjectList1() {

    return (
        <>
            <div className='projectview p-3 shadow-lg m-3'>
                <h3 className='projecthead p-2'>ERP Application</h3>
                <h4 className='projectdescription'>Project Overview:</h4>
                <h6 className='projectdescription'> Developed a robust Enterprise Resource Planning (ERP) application using the MERN stack
                    (MongoDB, Express, React, Node.js) for managing business operations like sales, and customer relations.</h6>
                <h4 className='projectdescription '>Technologies Used</h4>
                <ul><b>Frontend:</b> React, React Router DOM, React Hooks (useState, useEffect)</ul>
                <ul><b>Backend:</b> Node.js, Express.js, JWT (JSON Web Token), bcrypt.js, Middleware</ul>
                <ul><b>Database:</b> MongoDB, Mongoose</ul>
                <ul><b>Authentication & Authorization:</b> JWT-based user authentication, bcrypt for password hashing</ul>
                <ul><b>Credentials:</b> id - admin@gmail.com , pwrd - admin</ul>
                <div>
                    <a href='https://github.com/Chakkaravarthik/CRM_FE' target='_blank' className='p-2 text-decoration-none'>Front End Code</a>
                    <a href='https://github.com/Chakkaravarthik/CRM_BE' target='_blank' className='p-2 text-decoration-none' >Back End Code</a>
                    <a href='https://stellular-marzipan-57118a.netlify.app/login' target='_blank' className='p-2 text-decoration-none'>Demo Link</a>
                </div>
                <div className=" p-3 m-2 d-flex " style={{width: "18rem"}}>
                    <img src={erp1} className="border card-img-top m-2" alt="..."></img>
                    <img src={erp2} className="border card-img-top m-2" alt="..."></img>
                </div>
            </div>
        </>
    )
}

function ProjectList2() {

    return (
        <>
            <div className='projectview p-3 shadow-lg m-3'>
                <h3 className='projecthead p-2' >URL Shortner</h3>
                <h4 className='projectdescription'>Project Overview:</h4>
                <h6 className='projectdescription'> Developed an fully functional URL Shortner application with authentication</h6>
                <h4 className='projectdescription '>Technologies Used</h4>
                <ul><b>Frontend:</b> React, React Router DOM, React Hooks (useState, useEffect)</ul>
                <ul><b>Backend:</b> Node.js, Express.js, JWT (JSON Web Token), bcrypt.js, Middleware</ul>
                <ul><b>Database:</b> MongoDB, Mongoose</ul>
                <ul><b>Authentication & Authorization:</b> JWT-based user authentication, bcrypt for password hashing</ul>
                <div>
                    <a href='https://github.com/Chakkaravarthik/URL_shortner' target='_blank' className='p-2 text-decoration-none'>Front End Code</a>
                    <a href='https://github.com/Chakkaravarthik/Task-URL-shortener' target='_blank' className='p-2 text-decoration-none' >Back End Code</a>
                    <a href='https://urlshortnertask.netlify.app/' target='_blank' className='p-2 text-decoration-none'>Demo Link</a>
                </div>
            </div>
        </>
    )
}

function ProjectList4() {

    return (
        <>
            <div className='projectview p-3 shadow-lg m-3'>
                <h3 className='projecthead p-2' >E-commerce</h3>
                <h4 className='projectdescription'>Project Overview:</h4>
                <h6 className='projectdescription'> `Developed an E commerce Application with <b>Redux State Management </b> ( frontendonly )`</h6>
                <div>
                    <a href='https://github.com/Chakkaravarthik/E-Shop' target='_blank' className='p-2 text-decoration-none'>Front End Code</a>
                    <a href='https://eshop-technicaltask.netlify.app/' target='_blank' className='p-2 text-decoration-none'>Demo Link</a>
                </div>
                <div className=" p-3 m-2 d-flex " style={{width: "18rem"}}>
                    <img src={ecom1} className="border card-img-top m-2" alt="..."></img>
                    <img src={ecom2} className="border card-img-top m-2" alt="..."></img>
                </div>
            </div>
        </>
    )
}

function ProjectList3() {

    return (
        <>
            <div className='projectview p-3 shadow-lg m-3'>
                <h3 className='projecthead p-2' >Task management</h3>
                <h4 className='projectdescription'>Project Overview:</h4>
                <h6 className='projectdescription'>A simple and efficient task management app to create, update, and track your tasks. Stay organized and boost productivity with an easy-to-use interface. </h6>
                <h4 className='projectdescription '>Technologies Used</h4>
                <ul><b>Frontend:</b> React, React Router DOM, React Hooks (useState, useEffect)</ul>
                <ul><b>Backend:</b> Node.js, Express.js, JWT (JSON Web Token), bcrypt.js, Middleware</ul>
                <ul><b>Database:</b> MongoDB, Mongoose</ul>
                <ul><b>Authentication & Authorization:</b> JWT-based user authentication, bcrypt for password hashing</ul>
                <ul><b>Credentials:</b> id - chakkaravarthik99@gmail.com , pwrd - sugar</ul>
                <div>
                    <a href='https://github.com/Chakkaravarthik/task-todo' target='_blank' className='p-2 text-decoration-none'>Front End Code</a>
                    <a href='https://github.com/Chakkaravarthik/task-todo_be' target='_blank' className='p-2 text-decoration-none'>Back End Code</a>
                    <a href='https://task-management-app-1.netlify.app/login' target='_blank' className='p-2 text-decoration-none'>Demo Link</a>
                </div>
                <div className=" p-3 m-2 d-flex " style={{width: "18rem"}}>
                    <img src={task1} className="border card-img-top m-2" alt="..."></img>
                </div>
            </div>
        </>
    )
}


function ProjectList5() {

    return (
        <>
            <div className='projectview p-3 shadow-lg m-3'>
                <h3 className='projecthead p-2' >Movie Ticket Booking</h3>
                <h4 className='projectdescription'>Project Overview:</h4>
                <h6 className='projectdescription'>The Movie Ticket Booking App offers a seamless ticket booking experience with secure payments and instant confirmations. Users can easily select a movie, book tickets, and complete transactions hassle-free.</h6>
                <h4 className='projectdescription '>Technologies Used</h4>
                <ul><b>Payment Gateway Integration:</b> Razor Pay payment Gateway</ul>
                <ul><b>Frontend:</b> React, React Router DOM, React Hooks (useState, useEffect)</ul>
                <ul><b>Backend:</b> Node.js, Express.js, JWT (JSON Web Token), bcrypt.js, Middleware</ul>
                <ul><b>Database:</b> MongoDB, Mongoose</ul>
                <ul><b>Authentication & Authorization:</b> JWT-based user authentication, bcrypt for password hashing</ul>
                <ul><b>Credentials:</b> id - chakkaravarthik99@gmail.com , pwrd - sugar</ul>
                <div>
                    <a href='https://github.com/Chakkaravarthik/movieTicket_fe' target='_blank' className='p-2 text-decoration-none'>Front End Code</a>
                    <a href='https://github.com/Chakkaravarthik/be' target='_blank' className='p-2 text-decoration-none'>Back End Code</a>
                    <a href='https://movieticketbookingapplication.netlify.app/login' target='_blank' className='p-2 text-decoration-none'>Demo Link</a>
                </div>
                <div className=" p-3 m-2 d-flex " style={{width: "18rem"}}>
                    <img src={movie1} className="border card-img-top m-2" alt="..."></img>
                    <img src={movie2} className="card-img-top m-2" alt="..."></img>
                </div>
            </div>
        </>
    )
}