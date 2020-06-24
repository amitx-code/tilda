import Vue from 'vue'
import Router from 'vue-router'


const TheContainer = () => import('../containers/TheContainer')
const Site = () => import('../views/Site')
const PagesID = () => import('../views/PagesID')
const PagesAll = () => import('../views/Pages')


Vue.use(Router)

export default new Router({
  mode: 'hash', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
      {
          path: '/',
          redirect: '/MySite',
          name: 'Home',
          component: TheContainer,
          children: [

              {
                  path: 'MySite',
                  name: 'Мой сайт',
                  component: Site
              },
              {
                  path: 'pages',
                  name: 'Страницы',
                  redirect: '/pages/all',

                  component: {
                      render (c) { return c('router-view') }
                  },

                  children: [
                      {
                          path: 'all',
                          name: 'Список страниц',
                          component: PagesAll
                      },
                      {
                          path: ':id',
                          name: 'Страница',
                          component: PagesID,




                      },

                  ]
              },

          ]
      },

  ]
})



