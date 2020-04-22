//Create info on hover of question mark

const infomationHover = document.querySelector('.infoIcon');
const mainSection = document.querySelector('main');

infomationHover.addEventListener("mouseover", showInfo);
infomationHover.addEventListener("mouseout", hideinfo);

function showInfo(event) {

    event.preventDefault();
    infoContainer = document.createElement("div");
    infoContainer.classList.add("infoContainer");

    siteInfo = document.createElement("h6");
    siteInfo.classList.add("infoText")
    siteInfo.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non magna sed dui mollis posuere vitae eget diam. Sed et facilisis felis. Aenean eget dictum tellus. Aenean est ipsum, vehicula non mauris non, efficitur tincidunt tortor. Phasellus id molestie magna, sit amet egestas libero. Morbi lacinia lorem at gravida porta';

    infoContainer.appendChild(siteInfo);

    mainSection.appendChild(infoContainer)
}

function hideinfo(event) {
    event.preventDefault();
    const infoContainer = document.querySelector('.infoContainer')
    infoContainer.remove();
}

//click episode two

const episode1 = document.querySelector('.episodeOne');
const episode2 = document.querySelector('.episodeTwo');
const episode3 = document.querySelector('.episodeThree');
const episode4 = document.querySelector('.episodeFour');
const episode5 = document.querySelector('.episodeFive');
const episode6 = document.querySelector('.episodeSix');
const episode7 = document.querySelector('.episodeSeven');
const episode8 = document.querySelector('.episodeEight');
const episode9 = document.querySelector('.episodeNine');

episode1.addEventListener("click", updatePage);
episode2.addEventListener("click", updatePage);
episode3.addEventListener("click", updatePage);
episode4.addEventListener("click", updatePage);
episode5.addEventListener("click", updatePage);
episode6.addEventListener("click", updatePage);
episode7.addEventListener("click", updatePage);
episode8.addEventListener("click", updatePage);
episode9.addEventListener("click", updatePage);


//Change background, change title, change episode, change link

const title = document.querySelector(".title");
const episode = document.querySelector(".episode");
const youtubeLink = document.querySelector(".youtubeLink");

function updatePage(event) {
     const episodeNumber = event.target.innerHTML;
     const seriesParameter = series[episodeNumber[8] - 1];
     console.log(youtubeLink);
     document.body.style.backgroundImage = `linear-gradient(90deg, rgba(0, 0, 0, 1) 10%, rgba(255, 255, 255, 0) 100%), url(${seriesParameter.background})`;
     title.textContent = seriesParameter.title;
     episode.textContent = seriesParameter.episode;
     youtubeLink.setAttribute("href", seriesParameter.link);
}


const series = [{
    title: "The Frontier Is Everywhere",
    episode: "Episode 1",
    link: "https://www.youtube.com/watch?v=oY59wZdCDo0&list=PLF17F07CFC3208E29",
    background: "img/EarthSunrise.jpg"
}, {
    title: "Life Looks for Life",
    episode: "Episode 2",
    link: "https://www.youtube.com/watch?v=j2oXFWKpJiA&list=PLF17F07CFC3208E29&index=2",
    background: "img/flightPath.jpg"
},
{
    title: "A Reassuring Fabel",
    episode: "Episode 3",
    link: "https://www.youtube.com/watch?v=gCfemmxqaRg&list=PLF17F07CFC3208E29&index=3",
    background: "img/northernLights.jpg"
},
{
    title: "Per Aspera Ad Astra",
    episode: "Episode 4",
    link: "https://www.youtube.com/watch?v=zxsJeND_D-k&list=PLF17F07CFC3208E29&index=4",
    background: "img/Universe.jpg"
},
{
    title: "Decide To Listen",
    episode: "Episode 5",
    link: "https://www.youtube.com/watch?v=EHuve33yOVY&list=PLF17F07CFC3208E29&index=5",
    background: "img/hubble.jpg"
},
{
    title: "End of an Era: The Final Shuttle Launch",
    episode: "Episode 6",
    link: "https://www.youtube.com/watch?v=3wJYpRJQVbo&list=PLF17F07CFC3208E29&index=6",
    background: "img/ShuttleLaunch.jpg"
},
{
    title: "The Long Astronomical Perspective",
    episode: "Episode 7",
    link: "https://www.youtube.com/watch?v=drAWo_zFh8M&list=PLF17F07CFC3208E29&index=7",
    background: "img/interstella.jpg"
},
{
    title: "Gift of Apollo",
    episode: "Episode 8",
    link: "https://www.youtube.com/watch?v=8Xtly-dpBeA&list=PLF17F07CFC3208E29&index=8",
    background: "img/apollo.jpg"
},
{
    title: "The Humans",
    episode: "Episode 9",
    link: "https://www.youtube.com/watch?v=iR-mFcEhQXQ&list=PLF17F07CFC3208E29&index=9",
    background: "img/humans.jpeg"
}
];

