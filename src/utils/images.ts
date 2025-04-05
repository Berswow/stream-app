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