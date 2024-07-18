import {createBrowserRouter, Outlet} from 'react-router-dom'
import Main from './src/Pages/Main/Main'
import Layout from './src/Component/Layout/Layout'
import CreatePost from './src/Pages/Post/CreatePost'



const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Main/>
            },
            {
                path: '/post',
                element: <CreatePost/>
            }
        ]
    }
])


export {router}