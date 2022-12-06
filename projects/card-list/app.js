const buttonAdd = document.querySelector("#button-add");
const row = document.querySelector(".row");

// Create card
buttonAdd.addEventListener("click", createCard);

function createCard() {
    let formImage = document.querySelector("#form-image").value;
    let formTitle = document.querySelector("#form-title").value;
    let formText = document.querySelector("#form-textarea").value;

    let contentCard =
    `<div class="col-md-3">
        <div class="card" id="${formTitle}">
        <img src="${formImage}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${formTitle}</h5>
            <p class="card-text">${formText}</p>
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
                            <button type="button" class="btn btn-primary">Save changes</button>
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
                            <button type="button" class="btn btn-danger">Confirm</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>`;

    row.insertAdjacentHTML("beforeend", contentCard);
}