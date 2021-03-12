import home from './views/home';
import services from './views/services';
import about from './views/about';
import projects from './views/projects';
import contact from './views/contact';

export const routes = [
  { path: '/', component: home },
  { path: '/services', component: services },
  { path: '/about', component: about },
  { path: '/projects', component: projects },
  { path: '/contact', component: contact }
];