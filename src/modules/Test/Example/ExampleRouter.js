import Layout from '@theme/components/Layout'
import Example from './Example'

export default [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        component: Example,
        meta: {unrequiredAuth: true}
      }
    ]
  }
]
