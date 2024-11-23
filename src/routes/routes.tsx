import {Navigate} from 'react-router-dom';

import About from '@billboggs/views/about';
import Resume from '@billboggs/views/resume';

import {ABOUT_PATH, RESUME_PATH} from './constants';

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
    element: <Navigate replace to={ABOUT_PATH} />,
    path: '*',
  },
];

export default routes;
