import {Route, Routes} from "react-router-dom";
import {Layout} from "@/shared/layout/Layout.tsx";
import {Home} from "@/pages/Home.tsx";
import {MoviesShows} from "@/pages/MoviesShows.tsx";
import {Support} from "@/pages/Support.tsx";
import {Subscriptions} from "@/pages/Subscriptions.tsx";
import {GenrePage} from "@/pages/GenrePage.tsx";
import {Movie} from "@/pages/Movie.tsx";
import ScrollToTop from "@/shared/ui/ScrollToTop.tsx";
import {TvShow} from "@/pages/TvShow.tsx";

function App() {

  return (
    <>
        <ScrollToTop />
        <Routes>
            <Route path="/" element={<Layout />}>
               <Route index element={<Home/>}/>
                <Route path='movieshows' element={<MoviesShows/>}/>
                <Route path='support' element={<Support/>}/>
                <Route path='subscriptions' element={<Subscriptions/>}/>
                <Route path="/movie/genre/:id" element={<GenrePage contentType="movie" />} />
                <Route path="/tv/genre/:id" element={<GenrePage contentType="tv" />} />
                <Route path="movies/:id" element={<Movie />} />
                <Route path="tvshow/:id" element={<TvShow />} />
            </Route>
        </Routes>
    </>
  )
}

export default App
