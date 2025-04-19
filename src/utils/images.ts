const images = import.meta.glob<{ default: string }>(
    "../assets/MoviesShows/MovieHero/*.{png,jpg,jpeg,svg}",
    {eager: true}
);
export const imagesArray = Object.values(images).map((img) => img.default);