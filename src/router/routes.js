
import User from 'layouts/UserLayout.vue'
import Profile from 'pages/ProfilePage.vue'
import Posts from 'pages/PostsPage.vue'

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'test', component: Posts}
    ]
  },
  {
    path: '/user',

    // we use /src/layouts/User component which is imported above
    component: User,

    // hey, it has children routes and User has <router-view> in it;
    // It is really a Layout then!
    children: [
      // Profile page
      {
        path: 'profile', // here it is, route /user/profile
        component: Profile // we reference /src/pages/Profile.vue imported above
      },

      // Posts page
      {
        path: 'posts', // here it is, route /user/posts
        component: Posts // we reference /src/pages/Posts.vue imported above
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
