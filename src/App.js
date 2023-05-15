import CV from "./CV/CV-Jakub Piwtorak.pdf"
import './App.css'

function App() {
  return (
  <>
    <nav className="navigation-bar">
        <div className="menu">
            <div className="blur"></div>
            <div className="menu-links">
                <a href="#about">01.<span>About</span></a>
                <a href="#experience">02.<span>Experience</span></a>
                <a href="#projects">03.<span>Projects</span></a>
                <a href="#contact">04.<span>Contact</span></a>
                <a className="anchor-button" target="_blank" href={ CV }>See my CV</a>
            </div>
        </div>
        <button className="menu-button">
            <div className="menu-icon">
                <div className="menu-icon-inner">
                </div>
            </div>
        </button>
    </nav>
    <main>
        <section id="intro">
            <header>
                <p className="intro">Hello, my name is</p>
                <h1 className="page-title">Jakub Piwtorak.</h1>
                <h2>I'm a young and beginning front-end software developer.</h2>
                <p className="description">I try to learn as much as possible and always want to give my best. Below are some of the projects I already worked on, take a look!</p>
            </header>
        </section>
        <section id="about" className="about">
            <h2 className="headline"><span className="number">01.&nbsp;</span><span className="title-03">About Me</span></h2>
            <div className="inner">
                <p className="about-me">Hello! My name is Jakub Piwtorak, I was born in Poland, where I currently live and I started to learn code since March 2022. I'm an open-minded person that is
                ready to learn new things to achieve his goals. Some of my interests include video games, football, history, politics and of course coding.</p>
                <div className="profile">
                    <img alt="Picture of Me" src="images/Myself.jpg" loading="lazy"/>
                </div>
            </div>
        </section>
        <section id="projects" className="projects">
            <h2 className="headline"><span className="number">03.&nbsp;</span><span className="title-03">Some Things I've built</span></h2>
            <ul className="project-list">
                <li className="project">
                    <div className="project-image"><img className="thumbnail" src="images/ChatApp.PNG"/></div>
                    <div className="project-content">
                        <div className="project-details">
                            <h3 className="project-title">
                                <a className="image-github" href="https://github.com/Jaxu01/Chat-React-MERN-App" target="_blank">Chat App</a>
                            </h3>
                            <div className="project-description">Responsive chatting application designed to echange messages between more than one user. Design made using the MERN Stack - MongoDB, Express, React JS and Node.js.</div>
                        </div>
                        <ul className="project-tech-list">
                            <li>MongoDB</li>
                            <li>Express</li>
                            <li>ReactJS</li>
                            <li>Node.js</li>
                        </ul>
                        <div className="project-links">
                            <a className="github" href="https://github.com/Jaxu01/Chat-React-MERN-App" aria-label="GitHub" target="_blank">
                                <svg className="github-project media-icon-project" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                            </a>
                            <a className="external-link" href="https://warm-retreat-87623.herokuapp.com" aria-label="External Link" target="_blank">
                                <svg className="external-link-project media-icon-project" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-external-link"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                            </a>
                        </div>
                    </div>
                </li>
                <li className="project project-align-right">
                <div className="project-image"><img className="thumbnail" src="images/FootballApp.PNG"/></div>
                    <div className="project-content">
                        <div className="project-details">
                            <h3 className="project-title">
                                <a className="image-github" href="https://github.com/Jaxu01/Football-React-App" target="_blank">Football App</a>
                            </h3>
                            <div className="project-description">Responsive football application using API for looking through different football leagues and their standings. Build within the React Framework.</div>
                        </div>
                        <ul className="project-tech-list-right">
                            <li>ReactJS</li>
                            <li>API</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Material UI</li>
                        </ul>
                        <div className="project-links">
                            <a className="github" href="https://github.com/Jaxu01/Football-React-App" aria-label="GitHub" target="_blank">
                                <svg className="github-project media-icon-project" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                            </a>
                            <a className="external-link" href="https://jaxu01.github.io/Football-React-App" aria-label="External Link" target="_blank">
                                <svg className="external-link-project media-icon-project" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-external-link"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                            </a>
                        </div>
                    </div>
                </li>
                <li className="project">
                    <div className="project-image"><img className="thumbnail" src="images/WeatherApp.PNG"/></div>
                    <div className="project-content">
                        <div className="project-details">
                            <h3 className="project-title">
                                <a className="image-github" href="https://github.com/Jaxu01/Weather-App" target="_blank">Weather App</a>
                            </h3>
                            <div className="project-description">Responsive weather application that allows to look up the weather of a specific city. Design made in pure HTML, CSS and JavaScript.</div>
                        </div>
                        <ul className="project-tech-list">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>ReactJS</li>
                            <li>API</li>
                        </ul>
                        <div className="project-links">
                            <a className="github" href="https://github.com/Jaxu01/Weather-App" aria-label="GitHub" target="_blank">
                                <svg className="github-project media-icon-project" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                            </a>
                            <a className="external-link" href="https://jaxu01.github.io/Weather-React-App" aria-label="External Link" target="_blank">
                                <svg className="external-link-project media-icon-project" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-external-link"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                            </a>
                        </div>
                    </div>
                </li>
                <li className="project project-align-right">
                    <div className="project-image"><img className="thumbnail" src="images/ToDoList.PNG"/></div>
                    <div className="project-content">
                        <div className="project-details">
                            <h3 className="project-title">
                                <a className="image-github" href="https://github.com/Jaxu01/ToDo-List" target="_blank">ToDo List</a>
                            </h3>
                            <div className="project-description">Responsive ToDo List with options to add, remove and complete a task coded with pure HTML, CSS and JavaScript.</div>
                        </div>
                        <ul className="project-tech-list-right">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                        </ul>
                        <div className="project-links">
                            <a className="github" href="https://github.com/Jaxu01/ToDo-List" aria-label="GitHub" target="_blank">
                                <svg className="github-project media-icon-project" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                            </a>
                            <a className="external-link" href="https://jaxu01.github.io/ToDo-List" aria-label="External Link" target="_blank">
                                <svg className="external-link-project media-icon-project" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-external-link"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                            </a>
                        </div>
                    </div>
                </li>
                <li className="project">
                    <div className="project-image"><img className="thumbnail" src="images/ContactForm.PNG"/></div>
                    <div className="project-content">
                        <div className="project-details">
                            <h3 className="project-title">
                                <a className="image-github" href="https://github.com/Jaxu01/ContactForm" target="_blank">Contact Form</a>
                            </h3>
                            <div className="project-description">Responsive business form including Unique Selling Points and modern contact form. Design made in pure HTML and CSS.</div>
                        </div>
                        <ul className="project-tech-list">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li></li>
                        </ul>
                        <div className="project-links">
                            <a className="github" href="https://github.com/Jaxu01/ContactForm" aria-label="GitHub" target="_blank">
                                <svg className="github-project media-icon-project" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                            </a>
                            <a className="external-link" href="https://jaxu01.github.io/ContactForm" aria-label="External Link" target="_blank">
                                <svg className="external-link-project media-icon-project" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-external-link"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                            </a>
                        </div>
                    </div>
                </li>
            </ul>
        </section>
    </main>
    <div className="media-container">
        <a className="github" href="https://github.com/Jaxu01" aria-label="GitHub" target="_blank">
            <svg className="github-icon media-icon" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
        </a>
        <a className="linkedin" href="https://www.linkedin.com/in/jakub-piwtorak-79a013227/" aria-label="LinkedIn" target="_blank">
            <svg className="linkedin-icon media-icon" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-linkedin"><title>LinkedIn</title><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
        </a>
    </div>
    <div className="email-container">   
        <a href="mailto:jakubpiwtorak@gmail.com" className="email">jakubpiwtorak@gmail.com</a>
    </div>
  </>
  )
}

export default App
