import projectData from '../../helpers/data/projectData';
// import util from '../../helpers/util';

const loadProjects = () => {
  projectData.getProjects()
    .then((resp) => {
      console.error(resp);
    }).catch(err => console.error(err));
};

export default { loadProjects };
