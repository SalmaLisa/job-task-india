import {  createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layout/Main';
import CartPage from './pages.js/CartPage';
import Home from './pages.js/Home';
import SearchPage from './pages.js/SearchPage';


function App() {
  const router = createBrowserRouter([
     {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
         },
        {
          path: '/search',
          element: <SearchPage></SearchPage>
         },
        {
          path: '/cart',
          element: <CartPage></CartPage>
         },
       ]
    }
    
  ])
  return (
    <div className='max-w-[1400px] mx-auto'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
