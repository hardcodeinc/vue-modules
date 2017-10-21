import Layout from '@/components/Layout'
import Example from './Example'

export default [
  {
    path: '/example',
    component: Layout,
    children: [
      {
        path: '/',
        component: Example
      }
    ]
  }
]
