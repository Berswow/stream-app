const imagesAction = import.meta.glob<{
    default: string
}>('../assets/home-category-images/action/*.{png,jpg,jpeg,svg}', {eager: true});
export const imageActionArray = Object.values(imagesAction).map((img) => img.default);

const imagesAdventure = import.meta.glob<{
    default: string
}>('../assets/home-category-images/adventure/*.{png,jpg,jpeg,svg}', {eager: true});
export const imageAdventureArray = Object.values(imagesAdventure).map((img) => img.default);

const imagesComedy = import.meta.glob<{
    default: string
}>('../assets/home-category-images/comedy/*.{png,jpg,jpeg,svg}', {eager: true});
export const imageComedyArray = Object.values(imagesComedy).map((img) => img.default);

const imagesDrama = import.meta.glob<{
    default: string
}>('../assets/home-category-images/drama/*.{png,jpg,jpeg,svg}', {eager: true});
export const imageDramaArray = Object.values(imagesDrama).map((img) => img.default);

const imagesHorror = import.meta.glob<{
    default: string
}>('../assets/home-category-images/horror/*.{png,jpg,jpeg,svg}', {eager: true});
export const imageHorrorArray = Object.values(imagesHorror).map((img) => img.default);

/************** Movies ******************/

const imagesMoviesTrend = import.meta.glob<{
    default: string
}>('../assets/MoviesShows/Movies/Trending Now/*.{png,jpg,jpeg,svg}', {eager: true});
export const imageMoviesTrendArray = Object.values(imagesMoviesTrend).map((img) => img.default);

const imagesMoviesNewReleases = import.meta.glob<{
    default: string
}>('../assets/MoviesShows/Movies/New Releases/*.{png,jpg,jpeg,svg}', {eager: true});
export const imageMoviesNewReleasesArray = Object.values(imagesMoviesNewReleases).map((img) => img.default);

const imagesMoviesMustWatch = import.meta.glob<{
    default: string
}>('../assets/MoviesShows/Movies/Must - Watch Movies/*.{png,jpg,jpeg,svg}', {eager: true});
export const imageMoviesMustWatchArray = Object.values(imagesMoviesMustWatch).map((img) => img.default);

/************** Shows ********************/

const imagesShowsTrend = import.meta.glob<{
    default: string
}>('../assets/MoviesShows/Shows/Trending Now/*.{png,jpg,jpeg,svg}', {eager: true});
export const imageShowsTrendArray = Object.values(imagesShowsTrend).map((img) => img.default);

const imagesShowsNewReleases = import.meta.glob<{
    default: string
}>('../assets/MoviesShows/Shows/New Releases/*.{png,jpg,jpeg,svg}', {eager: true});
export const imageShowsNewReleasesArray = Object.values(imagesShowsNewReleases).map((img) => img.default);

const imagesShowsMustWatch = import.meta.glob<{
    default: string
}>('../assets/MoviesShows/Shows/Must - Watch Movies/*.{png,jpg,jpeg,svg}', {eager: true});
export const imageShowsMustWatchArray = Object.values(imagesShowsMustWatch).map((img) => img.default);