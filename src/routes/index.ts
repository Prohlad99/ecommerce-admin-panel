import { lazy } from 'react';
import SignUp from '../pages/Authentication/AddUser';
import PremiumUser from '../pages/User/PremiumUser';
import TrialUser from '../pages/User/TrialUser';
import AddCategory from './../pages/category/AddCategory';
import ListCategory from './../pages/category/ListCategory';
import AddPackage from './../pages/package/AddPackage';
import ListPackage from './../pages/package/ListPackage';

const Calendar = lazy(() => import('../pages/Calendar'));
const Chart = lazy(() => import('../pages/Chart'));
const FormElements = lazy(() => import('../pages/Form/FormElements'));
const FormLayout = lazy(() => import('../pages/Form/FormLayout'));
const Profile = lazy(() => import('../pages/Profile'));
const Settings = lazy(() => import('../pages/Settings'));
const Tables = lazy(() => import('../pages/Tables'));
const Alerts = lazy(() => import('../pages/UiElements/Alerts'));
const Buttons = lazy(() => import('../pages/UiElements/Buttons'));

const coreRoutes = [
  {
    path: '/profile',
    title: 'Profile',
    component: Profile,
  },
  {
    path: 'user/add',
    title: 'User',
    component: SignUp,
  },
  {
    path: 'user/trial',
    title: 'User',
    component: TrialUser,
  },
  {
    path: 'user/premium',
    title: 'User',
    component: PremiumUser,
  },
  {
    path: '/template-list',
    title: 'Template',
    component: SignUp,
  },
  {
    path: 'category/add-category',
    title: 'Category',
    component: AddCategory,
  },
  {
    path: 'category/list-category',
    title: 'Category',
    component: ListCategory,
  },
  {
    path: 'package/add',
    title: 'Template',
    component: AddPackage,
  },
  {
    path: 'package/list-package',
    title: 'Template',
    component: ListPackage,
  },
  {
    path: '/settings',
    title: 'Settings',
    component: Settings,
  },
];

const routes = [...coreRoutes];
export default routes;
