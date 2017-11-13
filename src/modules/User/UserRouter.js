import Layout from '@theme/components/Layout'
import Home from './Home'
import User from './User'

export default [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        component: Home
      },
      {
        path: '/users',
        component: User
      }
    ]
  }
]
