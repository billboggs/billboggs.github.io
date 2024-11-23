import {BiHome} from 'react-icons/bi';
import {PiNewspaperClipping} from 'react-icons/pi';

import {ABOUT_PATH, RESUME_PATH} from '@billboggs/routes';

export const links = [
  {icon: <BiHome />, link: ABOUT_PATH, label: 'Home'},
  {icon: <PiNewspaperClipping />, link: RESUME_PATH, label: 'Resume'},
];
