import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import DerivedState from './app/Components/DerivedState'
import SnapShot from './app/Components/Snapshot'

// import { Provider as ReduxProvider } from 'react-redux'
// import { persistor } from './app/Redux/store'
// import store from 'app/store/index'
// import { PersistGate } from 'redux-persist/integration/react'
// import { BrowserRouter } from 'react-router-dom'
// import reportWebVitals from './reportWebVitals'
// import { QueryClient, QueryClientProvider } from 'react-query'
// import { Router } from './app/Router'
// import { ReactQueryDevtools } from 'react-query/devtools'


ReactDOM.render(

  <>

  < DerivedState Show= "getDrivedStateFromPros" /><br/>
  <SnapShot/>
  </>
, document.getElementById(`root`),
)

