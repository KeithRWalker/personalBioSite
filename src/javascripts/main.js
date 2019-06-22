import Firebase from 'firebase/app';

import apiKeys from './helpers/apiKeys.json';

import nav from './components/nav/nav';
import projects from './components/projects/projects';

import '../styles/main.scss';

const init = () => {
  Firebase.initializeApp(apiKeys.firebaseKeys);
  nav.eventListeners();
  projects.loadProjects();
};

init();
