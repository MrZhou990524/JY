import Layout from '@/layouts/default/index'

export default [
  {
    path: '/',
    component: Layout,
    redirect: { name: 'home' },
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/home')
      },
      {
        path: 'login',
        name: 'login',
        component: () => import('@/views/auth/login')
      },
      {
        path: 'reference',
        name: 'reference',
        component: () => import('@/views/reference')
      }
    ]
  },
  {
    path: '*'
  }
]
