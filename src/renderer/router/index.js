import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage').default,
    },
    {
      path: '/evaluation-page',
      name: 'evaluation-page',
      component: require('@/components/EvaluationPage').default,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
