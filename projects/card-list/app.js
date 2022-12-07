// Variables
const buttonAdd = document.querySelector("#button-add");
const row = document.querySelector(".row");

// Create unique ID
const uid = function () {
    return Date.now().toString(36) + Math.floor(Math.pow(10, 12) + Math.random() * 9*Math.pow(10, 12)).toString(36)
}

let buttonDelete;

// Event listeners
buttonAdd.addEventListener("click", addToLocalStorage);

// Card constructor
function Card(uid, image, title, text) {
    this.uid = uid;
    this.image = image;
    this.title = title;
    this.text = text;
}

// Takes the storage in localStorage and iterators through the array and create each card
function displayCard(storage) {
    for (let i = 0; i < storage.length; i++) {
        let uid = storage[i]["uid"];
        let image = storage[i]["image"];
        let title = storage[i]["title"];
        let text = storage[i]["text"];

        createCard(uid, image, title, text);
    }
}

function addToLocalStorage() {
    // Query input from form
    let formImage = document.querySelector("#form-image").value;
    let formTitle = document.querySelector("#form-title").value;
    let formText = document.querySelector("#form-textarea").value;

    // Create new card object and push into storage array
    let card = new Card(uid(), formImage, formTitle, formText);
    storage.push(card);

    // Re-set storage and counter keys in localStorage
    window.localStorage.setItem("storage", JSON.stringify(storage));

    // create HTML card and display on screen
    createCard(uid, formImage, formTitle, formText);

    // Updates the array of delete buttons upon creating cards
    updateDeleteButtons();
    deleteCard();
}

function deleteFromLocalStorage(uid) {
    console.log("Deleted");

    let parseData = JSON.parse(localStorage.getItem("storage"));
    for (let i = 0; i < parseData.length; i++) {
        if (parseData[i]["uid"] == uid) {
            storage.splice(i, 1);
            localStorage.setItem("storage", JSON.stringify(storage));
        }
    }
}

// Creates the card
function createCard(uid, image, title, text) {
    let contentCard =
    `<div class="col-md-3" id="${uid}">
        <div class="card">
        <img src="${image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${text}</p>
            <!-- Button trigger modal -->
            <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                data-bs-target="#saveModal">
                Update
            </button>
            <!-- Modal -->
            <div class="modal fade" id="saveModal" tabindex="-1" aria-labelledby="saveModalLabel"
                aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="saveModalLabel">Modal title</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form id="form-update">
                                <div class="mb-3">
                                    <label for="form-image" class="form-label">Image</label>
                                    <input type="input" class="form-control" id="form-image">
                                </div>
                                <div class="mb-3">
                                    <label for="form-title" class="form-label">Title</label>
                                    <input type="input" class="form-control" id="form-title">
                                </div>
                                <div class="mb-3">
                                    <label for="form-textarea" class="form-label">Description</label>
                                    <textarea class="form-control" id="form-textarea"
                                        rows="3"></textarea>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary"
                                data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary button-update" data-num="${uid}" data-bs-dismiss="modal">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Button trigger modal -->
            <button type="button" class="btn btn-danger" data-bs-toggle="modal"
                data-bs-target="#deleteModal">
                Delete
            </button>
            <!-- Modal -->
            <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="deleteModalLabel"
                aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="deleteModalLabel">Delete</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <p>Are you sure you want to delete?</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary"
                                data-bs-dismiss="modal">Cancel</button>
                            <button type="button" class="btn btn-danger button-delete" data-num="${uid}" data-bs-dismiss="modal">Confirm</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>`;

    row.insertAdjacentHTML("beforeend", contentCard);
}

// Update array of delete buttons
function updateDeleteButtons() {
    buttonDelete = document.querySelectorAll(".button-delete");
}

// Adds event listeners to delete the card, update array if necessary
function deleteCard() {
    buttonDelete.forEach(btn => {
        btn.addEventListener("click", e => {
            let target = document.getElementById(e.target.getAttribute('data-num'));
            target.remove();

            deleteFromLocalStorage(e.target.getAttribute('data-num'));
            updateDeleteButtons();
        });
    })
}

// On window load
window.addEventListener("load", (e) => {
    // If localStorage is null, then create storage array
    // If localStorage is not null, then load localStorage storage
    if (JSON.parse(window.localStorage.getItem("storage")) !== null) {
        storage = JSON.parse(window.localStorage.getItem("storage"));
        if (storage.length !== 0) {
            displayCard(JSON.parse(window.localStorage.getItem("storage")));
 
            // Updates the array of delete buttons upon displaying cards
            updateDeleteButtons();
            deleteCard();
        }
    } else {
        storage = [];
    }
})