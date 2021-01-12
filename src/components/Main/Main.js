import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../Home/Home'
import history from '../history/history'
import Charts from '../Charts/Charts'
import Login from '../Login/Login'
import Register from '../register/Register'
import NotFound from '../NotFound/NotFound'

const Main = () => (
  <main className="wrapper">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/history" component={history} />
      <Route path="/charts" component={Charts} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="*" component={NotFound} />
    </Switch>
  </main>
)

export default Main
