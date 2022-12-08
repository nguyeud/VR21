// url to be fetched
const url = "https://valorant-api.com/v1/sprays";
fetch(url)
    .then (response => {
        if (response.ok) {
            return response.json();
        }
        return Promise.reject(response);
    })
    .then(data => {
        // Import data in API
        const API = data.data;
        console.log("Array", API);

        for (const item of API) {
            if (item["fullTransparentIcon"] !== null) {
                let image = item["fullTransparentIcon"];
                let name = item["displayName"];
                let uuid = item["uuid"];

                createCard(image, name, uuid);
            }
        }

        loader.remove();
    })
    .catch(error => {
        console.log("Something went wrong...", error);
    })

const row = document.querySelector(".row");
const loader = document.querySelector("#loader");

function createCard(image, name, uuid) {
    const cardHTML = 
    `<div class="mt-4 col-sm-4 col-lg-3" data-id="${uuid}">
        <div class="card">
            <img src="${image}" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
            </div>
        </div>
    </div>`;

    // Add template beforeend on .row container
    row.insertAdjacentHTML("beforeend", cardHTML);
}