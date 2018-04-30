import EzlogNy from './views/index';
import EzlogNas from './views/index';


const routes = [
  { path: '/', exact: false, name: 'EzlogNy', component: EzlogNy  },
  { path: '/EzlogNas', exact: true, name: 'EzlogNas', component: EzlogNas  },
];

export default routes;
