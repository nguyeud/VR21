// VARIABLES
// Constants
const buttonAdd = document.querySelector("#button-add");
const row = document.querySelector(".row");

// Variables
let storage;
let buttonDelete;
let buttonUpdate;
let buttonSave;

// Create unique ID
const uid = function () {
    return Date.now().toString(36) + Math.floor(Math.pow(10, 12) + Math.random() * 9*Math.pow(10, 12)).toString(36)
}


// EVENT LISTENERS
// When the "Save changes" button in the "Add" modal is clicked, callback the addToLocalStorage function,
// which adds the information inputted to local storage and creates a card to display on webpage
buttonAdd.addEventListener("click", addToLocalStorage);


// CONSTRUCTORS
// Card
function Card(uid, image, title, text) {
    this.uid = uid;
    this.image = image;
    this.title = title;
    this.text = text;
}


// FUNCTIONS
// Get localStorage items
function getStorage() {
    return JSON.parse(window.localStorage.getItem("storageCardListIndex"));
}

// Takes the information in localStorage and iterates through the array to create each card
// IF any localStorage exists - only called at window load
function displayCard() {
    for (const item of storage) {
        let uid = item["uid"];
        let image = item["image"];
        let title = item["title"];
        let text = item["text"];

        createCard(uid, image, title, text);
    }
}

// Takes the information inputted into the "Add" modal and uses the Card constructor to create an object,
// then, pushes the information into the storage array and sets the localStorage item
// This is called when the form is submitted through the "Add" modal
function addToLocalStorage() {
    // Query input from form
    let img = document.querySelector("#form-add-image").value;
    let title = document.querySelector("#form-add-title").value;
    let text = document.querySelector("#form-add-textarea").value;

    // Create new card object and push into storage array
    let card = new Card(uid(), img, title, text);
    storage.push(card);

    // Re-set storage and counter keys in localStorage
    window.localStorage.setItem("storageCardListIndex", JSON.stringify(storage));

    // create HTML card and display on screen
    createCard(uid, img, title, text);

    // Updates the array of delete buttons upon creating cards
    updateDeleteButtons();
    deleteCard();

    // Updates the array of update buttons upon creating cards
    updateUpdateButtons();
    populateUpdateModalForm();

    // Updates the array of save buttons upon creating cards
    updateSaveButtons();
    saveCard();
}

// Creates the card using template literal and information passed from addToLocalStorage
function createCard(uid, image, title, text) {
    let contentCard =
    `<div class="col-md-3" data-id="${uid}">
        <div class="card">
        <img src="${image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${text}</p>
            <!-- Button trigger modal -->
            <button type="button" class="btn btn-primary button-update" data-bs-toggle="modal"
                data-bs-target="#${uid}-saveModal">
                Update
            </button>
            <!-- Modal -->
            <div class="modal fade" id="${uid}-saveModal" tabindex="-1" aria-labelledby="saveModalLabel"
                aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="saveModalLabel">Update</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form id="${uid}-form-update">
                                <div class="mb-3">
                                    <label for="form-image" class="form-label">Image</label>
                                    <input type="input" class="form-control" id="${uid}-form-update-image">
                                </div>
                                <div class="mb-3">
                                    <label for="form-title" class="form-label">Title</label>
                                    <input type="input" class="form-control" id="${uid}-form-update-title">
                                </div>
                                <div class="mb-3">
                                    <label for="form-textarea" class="form-label">Description</label>
                                    <textarea class="form-control" id="${uid}-form-update-textarea"
                                        rows="3"></textarea>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary"
                                data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary button-save" data-bs-dismiss="modal">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Button trigger modal -->
            <button type="button" class="btn btn-danger" data-bs-toggle="modal"
                data-bs-target="#${uid}-deleteModal">
                Delete
            </button>
            <!-- Modal -->
            <div class="modal fade" id="${uid}-deleteModal" tabindex="-1" aria-labelledby="deleteModalLabel"
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
                            <button type="button" class="btn btn-danger button-delete" data-bs-dismiss="modal">Confirm</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>`;

    // Add template beforeend on .row container
    row.insertAdjacentHTML("beforeend", contentCard);

    // Clear the form used to add cards
    clearAddForm();
}

// Adds event listeners to delete the card, update array if necessary
function deleteCard() {
    buttonDelete.forEach(btn => {
        btn.addEventListener("click", e => {
            // Get data-id of card & card element
            let uid = e.target.closest(".col-md-3").getAttribute('data-id');
            let target = e.target.closest(".col-md-3");

            // Remove card element in DOM
            target.remove();

            deleteFromLocalStorage(uid);
            updateDeleteButtons();
        });
    })
}

// Removes item from localStorage using uid (data-id)
function deleteFromLocalStorage(uid) {
    for (let i = 0; i < storage.length; i++) {
        if (storage[i]["uid"] == uid) {
            storage.splice(i, 1);
            localStorage.setItem("storageCardListIndex", JSON.stringify(storage));
        }
    }
}

// Update array of delete buttons
function updateDeleteButtons() {
    buttonDelete = document.querySelectorAll(".button-delete");
}

function populateUpdateModalForm() {
    buttonUpdate.forEach(btn => {
        btn.addEventListener("click", e => {
            // Get data-id of card & card element
            let uid = e.target.closest(".col-md-3").getAttribute('data-id');
            let target = e.target.closest(".col-md-3");

            // Pre-populate the values of the inputs with the values in the card
            document.getElementById(`${uid}-form-update-image`).value = target.querySelector(".card-img-top").getAttribute("src");
            document.getElementById(`${uid}-form-update-title`).value = target.querySelector(".card-title").innerText;
            document.getElementById(`${uid}-form-update-textarea`).value = target.querySelector(".card-text").innerText;
        });
    })
}

// Update array of update buttons
function updateUpdateButtons() {
    buttonUpdate = document.querySelectorAll(".button-update");
}

function saveCard() {
    buttonSave.forEach(btn => {
        btn.addEventListener("click", e => {
            // Get data-id of card & card element
            let uid = e.target.closest(".col-md-3").getAttribute('data-id');
            let target = e.target.closest(".col-md-3");

            target.querySelector(".card-img-top").setAttribute("src", document.getElementById(`${uid}-form-update-image`).value);
            target.querySelector(".card-title").innerText = document.getElementById(`${uid}-form-update-title`).value;
            target.querySelector(".card-text").innerText = document.getElementById(`${uid}-form-update-textarea`).value;

            // Update the values of the card
            let image = target.querySelector(".card-img-top").getAttribute("src");
            let title = target.querySelector(".card-title").innerText
            let text = target.querySelector(".card-text").innerText;

            updateToLocalStorage(uid, image, title, text);
        });
    })
}

// Updates item from localStorage using uid (data-id)
function updateToLocalStorage(uid, image, title, text) {
    for (let i = 0; i < storage.length; i++) {
        if (storage[i]["uid"] == uid) {
            storage[i]["image"] = image;
            storage[i]["title"] = title;
            storage[i]["text"] = text;

            localStorage.setItem("storageCardListIndex", JSON.stringify(storage));
        }
    }
}

// Update array of save buttons
function updateSaveButtons() {
    buttonSave = document.querySelectorAll(".button-save");
}

// Clears the "Add" modal form
function clearAddForm() {
    document.querySelector("#form-add-image").value = "";
    document.querySelector("#form-add-title").value = "";
    document.querySelector("#form-add-textarea").value = "";
}

// On window load
window.addEventListener("load", (e) => {
    // If localStorage is null, then create storage array
    // If localStorage is not null, then load localStorage
    storage = getStorage();

    if (JSON.parse(window.localStorage.getItem("storageCardListIndex")) !== null) {
        if (storage.length !== 0) {
            // Displays card in localStorage
            displayCard();
 
            // Updates the array of delete buttons upon displaying cards
            updateDeleteButtons();
            deleteCard();

            // Updates the array of update buttons upon displaying cards
            updateUpdateButtons();
            populateUpdateModalForm();

            // Updates the array of save buttons upon creating cards
            updateSaveButtons();
            saveCard();
        }
    } else {
        storage = [];
    }
})