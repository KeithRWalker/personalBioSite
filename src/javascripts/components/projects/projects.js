import projectData from '../../helpers/data/projectData';
import util from '../../helpers/util';

const makeProjectCard = (projects) => {
  let string = '';
  projects.forEach((project) => {
    string += '<div class="projectCard card bg-dark col-5">';
    string += '<div class= "card-header">';
    string += `   ${project.title}`;
    string += '</div>';
    string += '<div class="card-body">';
    string += `   <p> ${project.description} </p>`;
    string += `   <p class = "techP">${project.technologiesUsed} </p>`;
    string += '</div>';
    string += '<div class="card-footer">';
    string += `   <a href="${project.url}" target="_blank">View Project</a><br />`;
    string += `   <a href="${project.githubUrl}" target="_blank">View GitHub Project</a>`;
    string += '</div>';
    string += '</div>';
  });
  string += '';
  util.printToDomRep(string, 'projectsPageCon');
};

const loadProjects = () => {
  projectData.getProjects()
    .then((resp) => {
      makeProjectCard(resp);
    }).catch(err => console.error(err));
};

export default { loadProjects };
