import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import {AuthorProfile} from '../src/components/author/AuthorProfile.jsx'
import {PostArticle} from '../src/components/author/PostArticle.jsx'
import {ArticleById} from '../src/components/common/ArticleById.jsx'
import {Articles} from '../src/components/common/Articles.jsx'
import {Footer} from '../src/components/common/Footer.jsx'
import {Header} from '../src/components/common/Header.jsx'
import {Home} from '../src/components/common/Home.jsx'
import {SignIn} from '../src/components/common/SignIn.jsx'
import {SignUp} from '../src/components/common/SignUp.jsx'
import{UserProfile} from '../src/components/user/UserProfile.jsx'
import {RootLayout} from '../src/components/RootLayout.jsx'

const BrowserRouterObj=createBrowserRouter([{
  path:'/',
  element:<RootLayout/>,
  children:[
    {
      path:'',
      element:<Home/>
    },
    {
      path:'signin',
      element:<SignIn/>
    },
    {
      path:'signup',
      element:<SignUp/>
    },
    {
      path:'user-profile/:email',
      element:<UserProfile/>,
      children:[
        {
          path:'articles',
          element:<Articles/>
        },
        {
          path:'articlesId',
          element:<ArticleById/>
        },
        {
          path:'',
          element:<Navigate to="articles"/>
        }

      ]
    },
    {
        path: 'author-profile/:email',
        element: <AuthorProfile />,
        children: [
          {
            path: "articles",
            element: <Articles />
          },
          {
            path: ":articleId",
            element: <ArticleByID />
          },
          {
            path: 'article',
            element: <PostArticle />
          },
          {
            path: "",
            element: <Navigate to="articles" />
          }
        ]
      }
  ]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={BrowserRouterObj}/>
  </StrictMode>
)
