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
const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];


function populateProducts() {
    const select = document.getElementById("productSelect");


    const placeholder = document.createElement("option");
    placeholder.textContent = "Select a Product ...";
    placeholder.disabled = true;
    placeholder.selected = true;
    select.appendChild(placeholder);


    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        select.appendChild(option);
    });
}