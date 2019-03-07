console.log('main.js linked');
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
        available: false,
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
        available: false,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
    }//
];

const print = (id, message, br) => {
    const selectedDiv = document.getElementById(id);
    selectedDiv.innerHTML = message;
  };

const createProjectCards = () => {
    let pcString = '';

    for (let i = 0; i<projects.length; i++){
        if(projects[i].available === true){
            pcString += `<div class="projectDiv">`;
            pcString +=     `<header class= "projectHeader">`;
            pcString +=         `<h2 class= "projectTitle"> Project Title: ${projects[i].title} </h2>`;
            pcString +=         `<img src= "${projects[i].screenshot}" alt="Project Img" class ="projectImg">`;
            pcString +=     `</header>`;
            pcString +=     `<section class="projectSec">`;
            pcString +=         `<p> ${projects[i].description} </p>`;
            pcString +=         `<p> Tech Used: ${projects[i].technologiesUsed} </p>`;
            pcString +=     `</section>`;
            pcString +=     `<footer class= "projectFooter">`
            pcString +=         `<a href="${projects[i].url}">Link to project</a>`;
            pcString +=         `<a href="${projects[i].githubUrl}">Link to GitHub</a>`;
            pcString +=     `</footer>`
            pcString += `</div>`;
        };
    };
    print('projectsPage', pcString);
};

const init = () => {
    createProjectCards();
};

init();