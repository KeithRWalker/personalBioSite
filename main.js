const projects = [
    {
        title: "Project 1", 
        screenshot: "./imgs/ph1.jpg", 
        description: "This is the best project 1", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
    },//
    {
        title: "Project 2", 
        screenshot: "./imgs/ph2.jpg", 
        description: "This is the best project 2", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
    },//
    {
        title: "Project 3", 
        screenshot: "./imgs/ph3.jpg", 
        description: "This is the best project 3", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
    },//
    {
        title: "Project 4", 
        screenshot: "./imgs/ph4.jpg", 
        description: "This is the best project 4", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
    },//
    {
        title: "Project 5", 
        screenshot: "./imgs/ph5.jpg", 
        description: "This is the best project 5", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
    }//
];

const print = (id, message) => {
    const selectedDiv = document.getElementById(id);
    selectedDiv.innerHTML = message;
  };

const createProjectCards = () => {
    let pcString = '';

    for (let i = 0; i<projects.length; i++){
        if(projects[i].available === true){
            pcString += `<div class="projectCard">`;
            pcString +=     `<h2 class= "projectTitle"> Project Title: ${projects[i].title} </h2>`;
            pcString +=     `<img src= "${projects[i].screenshot}" alt="Project Img" class ="projectImg">`;
            pcString +=     `<p> ${projects[i].description} </p>`;
            pcString +=     `<p class = "techP"> Tech Used: ${projects[i].technologiesUsed} </p>`;
            pcString +=     `<a href="${projects[i].url}">Link to project</a>`;
            pcString +=     `<br>`
            pcString +=     `<a href="${projects[i].githubUrl}">Link to GitHub</a>`;
            pcString += `</div>`;
        };
    };
    print('projectsPage', pcString);
};

const eventListeners = () => {
    const navBtn = document.getElementsByClassName('navBtn');
    for(let i=0; i < navBtn.length; i++){
        navBtn[i].addEventListener('click', modifyPage);
    }
};

const modifyPage = (e) => {
    const clickedBtn = e.target.id;
    const car = document.getElementById('carPage');
    const bio = document.getElementById('bioPage');
    const tech = document.getElementById('techPage');
    const projects = document.getElementById('projectsPage');

    e.preventDefault();
    if(clickedBtn === 'carLink'){
        bio.style.display = 'none';
        car.style.display = 'block';
        tech.style.display = 'none';
        projects.style.display = 'none';
    }
    else if(clickedBtn === 'bioLink'){
        bio.style.display = 'block';
        car.style.display = 'none';
        tech.style.display = 'none';
        projects.style.display = 'none';
    } 
    else if(clickedBtn === 'techLink'){
        bio.style.display = 'none';
        car.style.display = 'none';
        tech.style.display = 'block';
        projects.style.display = 'none';
    } 
    else if(clickedBtn === 'projectsLink'){
        bio.style.display = 'none';
        car.style.display = 'none';
        tech.style.display = 'none';
        projects.style.display = 'flex';
    };
};

const init = () => {
    createProjectCards();
    eventListeners();
};

init();