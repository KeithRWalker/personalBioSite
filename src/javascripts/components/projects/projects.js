import projectData from '../../helpers/data/projectData';
import util from '../../helpers/util';

const makeProjectCard = (projects) => {
  let string = '';
  projects.forEach((project) => {
    string += '<div class="projectCard">';
    string += `<h2 class= "projectTitle"> Project Title: ${project.title} </h2>`;
    string += `<img src= "${project.screenshot}" alt="Project Img" class ="projectImg">`;
    string += `<p> ${project.description} </p>`;
    string += `<p class = "techP"> Tech Used: ${project.technologiesUsed} </p>`;
    string += `<a href="${project.url}">Link to project</a>`;
    string += '<br>';
    string += `<a href="${project.githubUrl}">Link to GitHub</a>`;
    string += '</div>';
  });
  util.printToDomRep(string, 'projectsPage');
};

const loadProjects = () => {
  projectData.getProjects()
    .then((resp) => {
      makeProjectCard(resp);
    }).catch(err => console.error(err));
};

export default { loadProjects };
