
const year = document.querySelector("#year");
const today = new Date();
if (year) {
    year.innerHTML = ` <span class="highlight">${today.getFullYear()}</span>`;
}
const lastModifiedEl = document.getElementById("lastModified");
if (lastModifiedEl) {
    lastModifiedEl.textContent = document.lastModified;
}


const hamButton = document.querySelector('#menu'); 
const mainnav = document.querySelector('.navigation');
const title = document.querySelector('.title');
if (hamButton && mainnav) {
    hamButton.addEventListener('click', () => {
        mainnav.classList.toggle('open');
        hamButton.classList.toggle('open');
        if (title) title.classList.toggle('hidden');
    });
}

const products = [
    { name: "T-Shirt" },
    { name: "Jeans" },
    { name: "Jacket" },
    { name: "Bows" },
    { name: "Hat" },
    { name: "Dress" },
    { name: "Sweater" },
    { name: "Other" }
];

function populateProducts() {
    const select = document.getElementById("productSelect");
    if (!select) return;

    
    select.innerHTML = "";

    
    const placeholder = document.createElement("option");
    placeholder.textContent = "Select an Apparel Item ...";
    placeholder.disabled = true;
    placeholder.selected = true;
    select.appendChild(placeholder);

    
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.name;   
        option.textContent = product.name;
        select.appendChild(option);
    });
}



const fileInput = document.getElementById('fileInput');
const preview = document.getElementById('preview');

if (fileInput) {
    fileInput.addEventListener('change', function () {
        const file = this.files?.[0];
        if (!file) return;

        if (!file.type.startsWith('image/')) {
            alert('Please select a valid image file.');
            this.value = '';
            return;
        }
        if (!preview) return;

        const reader = new FileReader();
        reader.onload = function (e) {
            preview.src = e.target.result;
            preview.style.display = 'block';
        };
        reader.readAsDataURL(file);
    });
}


const uploadBox = document.querySelector('.upload-box');
if (uploadBox) {
    uploadBox.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadBox.style.borderColor = '#333';
    });
    uploadBox.addEventListener('dragleave', () => {
        uploadBox.style.borderColor = '#aaa';
    });
    uploadBox.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadBox.style.borderColor = '#aaa';
        const file = e.dataTransfer.files?.[0];
        if (file && file.type.startsWith('image/')) {
            if (!preview) return;
            const reader = new FileReader();
            reader.onload = function (e) {
                preview.src = e.target.result;
                preview.style.display = 'block';
            };
            reader.readAsDataURL(file);
        } else {
            alert('Please drop a valid image file.');
        }
    });
}

document.addEventListener("DOMContentLoaded", populateProducts);


const apparel = [
    {
        name: "Classic T-Shirt",
        description: "Soft cotton tee with tailored fit.",
        price: 19.99,
        imageUrl: "images/backToSchool.webp"
    },
    {
        name: "Decorations",
        description: "Bright, Fun, Customizable",
        price: 15.50,
        imageUrl: "images/decorations.webp"
    },
    {
        name: "Bow",
        description: "Stretch, Cottom, 3 Sizes",
        price: 10.00,
        imageUrl: "images/bows.webp"
    },
    {
        name: "Pinata",
        description: "Durable, customizable",
        price: 84.00,
        imageUrl: "images/stitch.webp"
    },
    {
        name: "Sweater",
        description: "100% cotton super soft texture.",
        price: 48.00,
        imageUrl: "images/treeSweater.webp"
    },
    {
        name: "Baby Bow",
        description: "Made to order, Customizable, Ear to Ear flowers",
        price: 10.99,
        imageUrl: "images/babybow.webp"
    },
    {
        name: "Sticker",
        description: "Easy, Quick, Customizable",
        price: 19.50,
        imageUrl: "images/sticker.webp"
    },
    {
        name: "Murder Tee",
        description: "65% polyester",
        price: 30.00,
        imageUrl: "images/murdertee.webp"
    },
    {
        name: "Wall Art",
        description: "3D, Princess Dresses",
        price: 84.00,
        imageUrl: "images/wallart.webp"
    },
    {
        name: "Boo Bow",
        description: "Faux leather clip",
        price: 10.00,
        imageUrl: "images/boobow.webp"
    },
    {
        name: "Hair Clip",
        description: "Minimal, Fabric, Flower, Aligator clip",
        price: 19.99,
        imageUrl: "images/hairclip.webp"
    },
    {
        name: "Duo Shirts",
        description: "Two shirts, Ink or Vinyl designs",
        price: 35.50,
        imageUrl: "images/pairshirts.webp"
    },
    {
        name: "Ties",
        description: "Patters and solids, Customizable",
        price: 10.00,
        imageUrl: "images/ties.webp"
    },
    {
        name: "Skull Door Decor",
        description: "Durable, Custom floral arrangement",
        price: 84.00,
        imageUrl: "images/skulldoordecor.webp"
    },
    {
        name: "Baseball Shirt",
        description: "Any team, Any color",
        price: 25.00,
        imageUrl: "images/baseballshirt.webp"
    }
];


function formatPrice(value) {
    return `$${value.toFixed(2)}`;
}


function createApparelCard(items) {
    const container = document.querySelector(".container");
    if (!container) return;
    container.innerHTML = "";

    items.forEach(item => {
        const card = document.createElement("section");
        card.classList.add("product-card");

        const name = document.createElement("h3");
        name.textContent = item.name;

        const description = document.createElement("p");
        description.innerHTML = `<span class="label">Description:</span> ${item.description}`;

        const price = document.createElement("p");
        price.innerHTML = `<span class="label">Price:</span> ${formatPrice(item.price)}`;

        const img = document.createElement("img");
        img.setAttribute("src", item.imageUrl);
        img.setAttribute("alt", `${item.name}`);
        img.setAttribute("loading", "lazy");
        img.setAttribute("width", "400");
        img.setAttribute("height", "250");

        card.appendChild(name);
        card.appendChild(description);
        card.appendChild(price);
        card.appendChild(img);

        container.appendChild(card);
    });
}

createApparelCard(apparel);
