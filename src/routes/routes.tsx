import {Navigate} from 'react-router-dom';

import About from '@billboggs/views/about';
import Blog from '@billboggs/views/blog';
import Projects from '@billboggs/views/projects';
import Resume from '@billboggs/views/resume';

import {ABOUT_PATH, BLOG_PATH, PROJECTS_PATH, RESUME_PATH} from './constants';

const routes = [
  {
    element: <About />,
    index: true,
    path: ABOUT_PATH,
  },
  {
    element: <Resume />,
    index: true,
    path: RESUME_PATH,
  },
  {
    element: <Projects />,
    index: true,
    path: PROJECTS_PATH,
  },
  {
    element: <Blog />,
    index: true,
    path: BLOG_PATH,
  },
  {
    element: <Navigate replace to={ABOUT_PATH} />,
    path: '*',
  },
];

export default routes;
