

function ChatModelMobile() {
    return (

        <div
            className="modal fade"
            id="singleChat1"
            tabIndex={-1}
            aria-labelledby="singleChat1Label"
            aria-hidden="true"
            data-bs-backdrop="false"
        >
            <div
                className="modal-dialog modal-sm position-absolute bottom-0 end-0 w-17"
                style={{ transform: "translateX(-80px)" }}
            >
                <div className="modal-content border-0 shadow">
                    {/* head */}
                    <div className="modal-header">
                        <div
                            className="dropdown-item d-flex rounded"
                            type="button"
                            data-bs-container="body"
                            data-bs-toggle="popover"
                            data-bs-placement="left">
                            <div>
                                <div class="popover-body d-flex flex-column p-0">
                                    <div class="d-flex align-items-center dropdown-item p-2 rounded pointer">
                                        <i class="far fa-comment me-3 fs-4"></i>
                                        <p class="m-0">Open Messenger App</p>
                                    </div>
                                    <div class="d-flex align-items-center dropdown-item p-2 rounded pointer">
                                        <i class="far fa-user me-3 fs-4"></i>
                                        <p class="m-0">Open Messenger App</p>
                                    </div>
                                    <hr />
                                    <div class="d-flex align-items-center dropdown-item p-2 rounded pointer">
                                        <i class="fas fa-fill-drip me-3 fs-4"></i>
                                        <p class="m-0">Color</p>
                                    </div>
                                    <div class="d-flex align-items-center dropdown-item p-2 rounded pointer">
                                        <i class="far fa-smile-beam me-3 fs-4"></i>
                                        <p class="m-0">Emoji</p>
                                    </div>
                                    <div class="d-flex align-items-center dropdown-item p-2 rounded pointer">
                                        <i class="fas fa-pencil-alt me-3 fs-4"></i>
                                        <p class="m-0">Nicknames</p>
                                    </div>
                                </div>
                            </div>
                            {/* avatar */}
                            <div className="position-relative">
                                <img
                                    src="https://source.unsplash.com/random/1"
                                    alt="avatar"
                                    className="rounded-circle me-2"
                                    style={{ width: 38, height: 38, objectFit: "cover" }}
                                />
                                <span
                                    className="
position-absolute
bottom-0
translate-middle
p-1
bg-success
border border-light
rounded-circle
"
                                    style={{ left: "75%" }}
                                >
                                    <span className="visually-hidden">New alerts</span>
                                </span>
                            </div>
                            {/* name */}
                            <div>
                                <p className="m-0">
                                    Mike <i className="fas fa-angle-down" />
                                </p>
                                <span className="text-muted fs-7">Active Now</span>
                            </div>
                        </div>
                        {/* close */}
                        <i className="fas fa-video mx-2 text-muted pointer" />
                        <i className="fas fa-phone-alt mx-2 text-muted pointer" />
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        />
                    </div>
                    {/* body */}
                    <div
                        className="modal-body p-0 overflow-auto"
                        style={{ maxHeight: 300 }}
                    >
                        {/* message l */}
                        <li className="list-group-item border-0 d-flex">
                            {/* avatar */}
                            <div>
                                <img
                                    src="https://source.unsplash.com/random/1"
                                    alt="avatar"
                                    className="rounded-circle me-2"
                                    style={{ width: 28, height: 28, objectFit: "cover" }}
                                />
                            </div>
                            {/* message */}
                            <p className="bg-gray p-2 rounded">Lorem, ipsum dolor</p>
                        </li>
                        {/* message r */}
                        <li className="list-group-item border-0 d-flex justify-content-end">
                            {/* message */}
                            <p className="bg-gray p-2 rounded">Lorem, ipsum dolor</p>
                            {/* avatar */}
                            <div>
                                <img
                                    src="https://source.unsplash.com/collection/happy-people"
                                    alt="avatar"
                                    className="rounded-circle ms-2"
                                    style={{ width: 28, height: 28, objectFit: "cover" }}
                                />
                            </div>
                        </li>
                        {/* message l */}
                        <li className="list-group-item border-0 d-flex">
                            {/* avatar */}
                            <div>
                                <img
                                    src="https://source.unsplash.com/random/1"
                                    alt="avatar"
                                    className="rounded-circle me-2"
                                    style={{ width: 28, height: 28, objectFit: "cover" }}
                                />
                            </div>
                            {/* message */}
                            <p className="bg-gray p-2 rounded">Lorem, ipsum dolor</p>
                        </li>
                        {/* message r */}
                        <li className="list-group-item border-0 d-flex justify-content-end">
                            {/* message */}
                            <p className="bg-gray p-2 rounded">Lorem, ipsum dolor</p>
                            {/* avatar */}
                            <div>
                                <img
                                    src="https://source.unsplash.com/collection/happy-people"
                                    alt="avatar"
                                    className="rounded-circle ms-2"
                                    style={{ width: 28, height: 28, objectFit: "cover" }}
                                />
                            </div>
                        </li>
                        {/* message l */}
                        <li className="list-group-item border-0 d-flex">
                            {/* avatar */}
                            <div>
                                <img
                                    src="https://source.unsplash.com/random/1"
                                    alt="avatar"
                                    className="rounded-circle me-2"
                                    style={{ width: 28, height: 28, objectFit: "cover" }}
                                />
                            </div>
                            {/* message */}
                            <p className="bg-gray p-2 rounded">Lorem, ipsum dolor</p>
                        </li>
                        {/* message r */}
                        <li className="list-group-item border-0 d-flex justify-content-end">
                            {/* message */}
                            <p className="bg-gray p-2 rounded">Lorem, ipsum dolor</p>
                            {/* avatar */}
                            <div>
                                <img
                                    src="https://source.unsplash.com/collection/happy-people"
                                    alt="avatar"
                                    className="rounded-circle ms-2"
                                    style={{ width: 28, height: 28, objectFit: "cover" }}
                                />
                            </div>
                        </li>
                    </div>
                    {/* message input */}
                    <div className="modal-footer p-0 m-0 border-0">
                        <div className="d-flex">
                            <div className="d-flex align-items-center">
                                <i className="fas fa-plus-circle mx-1 fs-5 text-muted pointer" />
                                <i className="far fa-file-image mx-1 fs-5 text-muted pointer" />
                                <i className="fas fa-portrait mx-1 fs-5 text-muted pointer" />
                                <i className="fas fa-adjust mx-1 fs-5 text-muted pointer" />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    className="form-control rounded-pill border-0 bg-gray"
                                    placeholder="Aa"
                                />
                            </div>
                            <div className="d-flex align-items-center mx-2">
                                <i className="fas fa-thumbs-up fs-5 text-muted pointer" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChatModelMobile;