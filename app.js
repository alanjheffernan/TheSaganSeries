//Create info on hover of question mark

const infomationHover = document.querySelector('.infoIcon');
infomationHover.addEventListener("click", showInfo);


function showInfo(event) {
  
    event.preventDefault();
    infoContainer = document.createElement("div");
    infoContainer.classList.add("infoContainer");

    siteInfo = document.createElement("h6");
    siteInfo.classList.add("infoText")
    siteInfo.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non magna sed dui mollis posuere vitae eget diam. Sed et facilisis felis. Aenean eget dictum tellus. Aenean est ipsum, vehicula non mauris non, efficitur tincidunt tortor. Phasellus id molestie magna, sit amet egestas libero. Morbi lacinia lorem at gravida porta';
    infoContainer.appendChild(siteInfo);

    infomationHover.appendChild(infoContainer);

}