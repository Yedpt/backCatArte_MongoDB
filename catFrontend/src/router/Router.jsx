import { createBrowserRouter } from 'react-router-dom'
import Layout from '../layout/Layout'
import Home from '../pages/Home'
import EditMeme from '../pages/EditMeme'
import NotFound from '../pages/NotFound'
import AboutUs from '../pages/AboutUs'
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'aboutus',
                element: <AboutUs />,
            },
        ],
    },
])
