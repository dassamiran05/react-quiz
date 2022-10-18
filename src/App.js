import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Topics from './component/Topics/Topics';
import List from './component/List/List';
import Blog from './component/Blog/Blog';
import QuizDetails from './component/Quiz/QuizDetails';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Topics></Topics>,
        },
        {
          path:'/api/quiz/:QuizID',
          element:<QuizDetails></QuizDetails>
        },
        {
          path: '/list',
          element: <List></List>,
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
      ]
    }
  ])


  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
