import Login from './Login'

export default [
  {
    path: '/login',
    component: Login,
    meta: {
      unrequiredAuth: true
    }
  }
]
