import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/modules/home/pages/HomePage.vue';
import CapacitacionesPage from '@/modules/capacitaciones/pages/CapacitacionesPage.vue';
import UsuariosPage from '@/modules/usuarios/pages/UsuariosPage.vue';
import ReportesPage from '@/modules/reportes/pages/ReportesPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/capacitaciones',
      name: 'Capacitaciones',
      component: CapacitacionesPage
    },
    { 
      path: '/usuarios',
      name: 'Usuarios',
      component: UsuariosPage
    },
    { 
      path: '/reportes',
      name: 'Reportes',
      component: ReportesPage
    },
  ]
});

export default router;
