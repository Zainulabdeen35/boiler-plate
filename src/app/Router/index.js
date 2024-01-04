import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { About } from '../Pages/About'
import { Main } from '../Pages/Main'
import { NotFound } from '../Pages/NotFound'

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Main />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  )
}
