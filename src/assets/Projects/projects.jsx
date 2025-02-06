import './projects.css';

function Project() {

    return (
        <>
            <div className='d-flex flex-column justify-content-center align-items-center pt-3 '>
                <h1 className='projecthead size'>Projects</h1>
                <ProjectList5 />
                <ProjectList1 />
                <ProjectList3 />
                <ProjectList2 />
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
                <ul><b>Frontend:</b> React, React Router DOM, Redux, React Hooks (useState, useEffect)</ul>
                <ul><b>Backend:</b> Node.js, Express.js, JWT (JSON Web Token), bcrypt.js, Middleware</ul>
                <ul><b>Database:</b> MongoDB, Mongoose</ul>
                <ul><b>Authentication & Authorization:</b> JWT-based user authentication, bcrypt for password hashing</ul>
                <div>
                    <a href='https://github.com/Chakkaravarthik/CRM_FE' target='_blank' className='p-2 text-decoration-none'>Front End Code</a>
                    <a href='https://github.com/Chakkaravarthik/CRM_BE' target='_blank' className='p-2 text-decoration-none' >Back End Code</a>
                    <a href='https://crmapplication123.netlify.app/' target='_blank' className='p-2 text-decoration-none'>Demo Link</a>
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
                <ul><b>Frontend:</b> React, React Router DOM, Redux, React Hooks (useState, useEffect)</ul>
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
                <h6 className='projectdescription'> Developed an E commerce Application with the help of REDUX , a state management
                library</h6>
                <div>
                    <a href='https://github.com/Chakkaravarthik/shopping-cart' target='_blank'className='p-2 text-decoration-none'>Front End Code</a>
                    <a href='https://effulgent-twilight-3bb5a2.netlify.app/' target='_blank' className='p-2 text-decoration-none'>Demo Link</a>
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
                <div>
                    <a href='https://github.com/Chakkaravarthik/task-todo' target='_blank'className='p-2 text-decoration-none'>Front End Code</a>
                    <a href='https://github.com/Chakkaravarthik/task-todo_be' target='_blank'className='p-2 text-decoration-none'>Back End Code</a>
                    <a href='https://taskmanager12345.netlify.app/login' target='_blank' className='p-2 text-decoration-none'>Demo Link</a>
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
                <ul><b>Frontend:</b> React, React Router DOM, React Hooks (useState, useEffect)</ul>
                <ul><b>Backend:</b> Node.js, Express.js, JWT (JSON Web Token), bcrypt.js, Middleware</ul>
                <ul><b>Database:</b> MongoDB, Mongoose</ul>
                <ul><b>Authentication & Authorization:</b> JWT-based user authentication, bcrypt for password hashing</ul>
                <div>
                    <a href='https://github.com/Chakkaravarthik/movieTicket_fe' target='_blank'className='p-2 text-decoration-none'>Front End Code</a>
                    <a href='https://github.com/Chakkaravarthik/be' target='_blank'className='p-2 text-decoration-none'>Back End Code</a>
                    <a href='https://movieticketbookingapplication.netlify.app/login' target='_blank' className='p-2 text-decoration-none'>Demo Link</a>
                </div>
            </div>
        </>
    )
}