import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Components/Main/Main';
import Link from './Components/Link/Link';
import Home from './Components/Home/Home';
import OutHome from './Components/OutHome/OutHome';
import About from './Components/About/About';
import OutAbout from './Components/OutAbout/OutAbout';

function App() {
  const router = createBrowserRouter([
    {path : "/", element : <Link></Link>, children : [
      {path : "/home",
      loader : async ()=>{
        return fetch('https://jsonplaceholder.typicode.com/posts')
      },
      element :<Home></Home>},
      {path : "/home/:homeId",
      loader : async ({params}) => {
        return fetch(`https://jsonplaceholder.typicode.com/posts/${params.homeId}`)
      },
      element : <OutHome></OutHome>},
      {path : '/about',
      loader : async ()=>{
        return fetch('https://jsonplaceholder.typicode.com/comments')
      },
      element : <About></About>},
      {path : "/about/:aboutId",
      loader : async ({params}) => {
        return fetch(`https://jsonplaceholder.typicode.com/comments/${params.aboutId}`)
      },
      element : <OutAbout></OutAbout>
      },
      {path : "*", element : <h1>The item you searched for was not found. Please try again</h1>}
    ]}
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
