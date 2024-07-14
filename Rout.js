import {createBrowserRouter, Outlet} from 'react-router-dom'
import Header from './src/Component/Header/Header'
import Main from './src/Pages/Main/Main'

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <>
                <Header/>
                <Outlet/>
            </>
        ),
        children: [
            {
                path: '/',
                element: <Main/>
            }
        ]
    }
])


export {router}