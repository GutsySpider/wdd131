const year = document.querySelector("#year");
const today = new Date();
year.innerHTML = ` <span class="highlight">${today.getFullYear()}</span>`;

document.getElementById("lastModified").innerHTML = document.lastModified;

const hamButton = document.querySelector('#menu');
const mainnav = document.querySelector('.navigation');
const title = document.querySelector('.title');

hamButton.addEventListener('click', () => {
	mainnav.classList.toggle('open');
    hamButton.classList.toggle('open');
    title.classList.toggle('hidden');
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "images/aba-nigeria-temple.webp"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "images/manti-temple.webp"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "images/payson-utah-temple.webp"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "images/yigo_guam_temple_2.webp"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "images/washington_dc_temple.webp"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "images/lima-peru-temple.webp"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "images/mexico-city-temple.webp"
  },
  {
    templeName: "Billings Montana",
    location: "BIllings, MT, United States",
    dedicated: "1999, November, 21",
    area: 33800,
    imageUrl:
    "images/Billings-Montana-Temple.webp"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 12",
    area: 41010,
    imageUrl:
    "images/Rome-Temple.webp"
  },
  {
    templeName: "Hamilton New Zealand",
    location: "Hamilton New Zealand",
    dedicated: "1958, April, 22",
    area: 45251,
    imageUrl:
    "images/hamilton_new_zealand_temple.webp"
  }
];



const home = document.querySelector("#home");
const old = document.querySelector("#old");
const new1 = document.querySelector("#new");
const large = document.querySelector("#large");
const small = document.querySelector("#small");

home.addEventListener("click", () => {
  createTempleCard(temples);
});
old.addEventListener("click", () => {
  createTempleCard(temples.filter(t => new Date(t.dedicated).getFullYear()<1900));
});
new1.addEventListener("click", () => {
  createTempleCard(temples.filter(t => new Date(t.dedicated).getFullYear() > 2000));
});
large.addEventListener("click", () => {
  createTempleCard(temples.filter(t => t.area>90000));
});
small.addEventListener("click", () => {
  createTempleCard(temples.filter(t => t.area<10000));
});

function createTempleCard(filteredTemples) {
  const container = document.querySelector(".container");
  container.innerHTML = "";

  filteredTemples.forEach(temple => {
    let card = document.createElement("section");

    let name = document.createElement("h3");
    name.textContent = temple.templeName;

    let location = document.createElement("p");
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;

    let area = document.createElement("p");
    area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;

    
    let dedication = document.createElement("p")
    dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
    
    let img = document.createElement("img");
    img.setAttribute("src", temple.imageUrl );
    img.setAttribute("alt", `${ temple.templeName} Temple` );
    img.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img);

    container.appendChild(card);
  })
}
createTempleCard(temples);