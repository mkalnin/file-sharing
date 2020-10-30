export const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('./components/Home.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('./components/Auth/Register.vue'),
    meta: {requiresGuest: true},
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('./components/Auth/Login.vue'),
    meta: {requiresGuest: true},
  },
  {
    path: '/upload',
    name: 'uploadFile',
    component: () => import('./components/Dashboard/UploadForm.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/files',
    name: 'files',
    component: () => import('./components/Dashboard/Files.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/404',
    name: '404',
    component: () => import('./components/404.vue'),
  },
  {
    path: '*',
    name: 'downloadFile',
    component: () => import('./components/downloadFile.vue'),
  },

]
