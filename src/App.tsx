import {Route, Routes} from "react-router-dom";
import {Layout} from "@/layout/Layout.tsx";
import {Home} from "@/pages/Home.tsx";
import {MoviesShows} from "@/pages/MoviesShows.tsx";
import {Support} from "@/pages/Support.tsx";
import {Subscription} from "@/pages/Subscription.tsx";

function App() {

  return (
    <>
        <Routes>
            <Route path="/" element={<Layout />}>
               <Route index element={<Home/>}/>
                <Route path='movieshows' element={<MoviesShows/>}/>
                <Route path='support' element={<Support/>}/>
                <Route path='subscriptions' element={<Subscription/>}/>
            </Route>
        </Routes>
    </>
  )
}

export default App
