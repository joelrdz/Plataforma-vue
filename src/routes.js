import home from './views/home';
import services from './views/services';
import about from './views/about';
import projects from './views/projects';
import projectDetails from './views/projectDetails';
import contact from './views/contact';

export const routes = [
  { path: '/', component: home },
  { path: '/services', component: services },
  { path: '/about', component: about },
  { path: '/projects', component: projects },
  { path: '/projects/:slug', component: projectDetails, name: 'project-details', props: true },
  { path: '/contact', component: contact }
];