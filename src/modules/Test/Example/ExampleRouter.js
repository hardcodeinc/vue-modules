import Layout from '@theme/components/Layout'
import Home from './Home'
import Example from './Example'

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
        path: '/crud',
        component: Example
      }
    ]
  }
]
