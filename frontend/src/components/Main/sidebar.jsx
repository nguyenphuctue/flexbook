import { useHistory } from "react-router-dom";


function Sidebar() {
    const history = useHistory();

    function logout(){
        sessionStorage.setItem("isAuthenticated", "false");
        history.push("/login");
    }


    return (

        <div className="col-12 col-lg-3">
            <div
                className="d-none d-xxl-block h-100 overflow-hidden scrollbar"
                style={{ maxWidth: 360, width: "100%", zIndex: 4 }}
            >
                <ul
                    className="navbar-nav mt-4 ms-3 d-flex flex-column pb-5 mb-5"
                    style={{ paddingTop: 56 }}
                >
                    {/* top */}
                    {/* avatar */}
                    <div>
                        <button  className="btn btn-primary" onClick={logout}>Logout</button>
                    </div>
                    <li className="dropdown-item p-1 rounded">
                        <a
                            href="#"
                            className="
              d-flex
              align-items-center
              text-decoration-none text-dark
            "
                        >
                            <div className="p-2">
                                <img
                                    src="https://source.unsplash.com/collection/happy-people"
                                    alt="avatar"
                                    className="rounded-circle me-2"
                                    style={{ width: 38, height: 38, objectFit: "cover" }}
                                />
                            </div>
                            <div>
                                <p className="m-0">John</p>
                            </div>
                        </a>
                    </li>
                    {/* top 1 */}
                    <li className="dropdown-item p-1 rounded">
                        <a
                            href="#"
                            className="
              d-flex
              align-items-center
              text-decoration-none text-dark
            "
                        >
                            <div className="p-2">
                                <img
                                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/tSXYIzZlfrS.png"
                                    alt="from fb"
                                    className="rounded-circle"
                                    style={{ width: 38, height: 38, objectFit: "cover" }}
                                />
                            </div>
                            <div>
                                <p className="m-0">Friends</p>
                            </div>
                        </a>
                    </li>
                    {/* top 2 */}
                    <li className="dropdown-item p-1 rounded">
                        <a
                            href="#"
                            className="
              d-flex
              align-items-center
              text-decoration-none text-dark
            "
                        >
                            <div className="p-2">
                                <img
                                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/Im_0d7HFH4n.png"
                                    alt="from fb"
                                    className="rounded-circle"
                                    style={{ width: 38, height: 38, objectFit: "cover" }}
                                />
                            </div>
                            <div>
                                <p className="m-0">Groups</p>
                                <i
                                    className="fas fa-circle text-primary"
                                    style={{ fontSize: "0.5rem !important" }}
                                />
                                <span className="fs-7 text-primary"> 1 new</span>
                            </div>
                        </a>
                    </li>
                    {/* top 3 */}
                    <li className="dropdown-item p-1">
                        <a
                            href="#"
                            className="
              d-flex
              align-items-center
              justify-content-between
              text-decoration-none text-dark
            "
                        >
                            <div className="d-flex align-items-center justify-content-evenly">
                                <div className="p-2">
                                    <img
                                        src="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/0gH3vbvr8Ee.png"
                                        alt="from fb"
                                        className="rounded-circle"
                                        style={{ width: 38, height: 38, objectFit: "cover" }}
                                    />
                                </div>
                                <div>
                                    <p className="m-0">Pages</p>
                                </div>
                            </div>
                        </a>
                    </li>
                    {/* top 4 */}
                    <li className="dropdown-item p-1">
                        <a
                            href="#"
                            className="
              d-flex
              align-items-center
              justify-content-between
              text-decoration-none text-dark
            "
                        >
                            <div className="d-flex align-items-center justify-content-evenly">
                                <div className="p-2">
                                    <img
                                        src="https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/MN44Sm-CTHN.png"
                                        alt="from fb"
                                        className="rounded-circle"
                                        style={{ width: 38, height: 38, objectFit: "cover" }}
                                    />
                                </div>
                                <div>
                                    <p className="m-0">Marketplace</p>
                                </div>
                            </div>
                        </a>
                    </li>
                    {/* top 5 */}
                    <li className="dropdown-item p-1">
                        <a
                            href="#"
                            className="
              d-flex
              align-items-center
              justify-content-between
              text-decoration-none text-dark
            "
                        >
                            <div className="d-flex align-items-center justify-content-evenly">
                                <div className="p-2">
                                    <img
                                        src="https://static.xx.fbcdn.net/rsrc.php/v3/y-/r/FhOLTyUFKwf.png"
                                        alt="from fb"
                                        className="rounded-circle"
                                        style={{ width: 38, height: 38, objectFit: "cover" }}
                                    />
                                </div>
                                <div>
                                    <p className="m-0">Watch</p>
                                    <i
                                        className="fas fa-circle text-primary"
                                        style={{ fontSize: "0.5rem !important" }}
                                    />
                                    <span className="fs-7 text-primary"> 9+ new videos</span>
                                </div>
                            </div>
                        </a>
                    </li>
                    {/* see more */}
                    <li className="p-1" type="button">
                        <div id="accordionFlushExample">
                            <div>
                                {/* see more button */}
                                <div
                                    className="d-flex align-items-center"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseOne"
                                    aria-expanded="false"
                                    aria-controls="flush-collapseOne"
                                >
                                    <div className="p-2">
                                        <i
                                            className="fas fa-chevron-down rounded-circle p-2"
                                            style={{ backgroundColor: "#d5d5d5 !important" }}
                                        />
                                    </div>
                                    <div>
                                        <p className="m-0">See More</p>
                                    </div>
                                </div>
                                {/* content */}
                                <div
                                    id="flush-collapseOne"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="flush-headingOne"
                                    data-bs-parent="#accordionFlushExample"
                                >
                                    <div>
                                        {/* item 1 */}
                                        <div
                                            className="
                      d-flex
                      align-items-center
                      dropdown-item
                      p-0
                      m-0
                    "
                                        >
                                            <div className="p-2">
                                                <img
                                                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/Y7r38CcFEw5.png"
                                                    alt="from fb"
                                                    className="rounded-circle"
                                                    style={{
                                                        width: 38,
                                                        height: 38,
                                                        objectFit: "cover"
                                                    }}
                                                />
                                            </div>
                                            <div>
                                                <p className="m-0">Campus</p>
                                            </div>
                                        </div>
                                        {/* item 2 */}
                                        <div
                                            className="
                      d-flex
                      align-items-center
                      dropdown-item
                      p-0
                      m-0
                    "
                                        >
                                            <div className="p-2">
                                                <img
                                                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/N7UOh8REweU.png"
                                                    alt="from fb"
                                                    className="rounded-circle"
                                                    style={{
                                                        width: 38,
                                                        height: 38,
                                                        objectFit: "cover"
                                                    }}
                                                />
                                            </div>
                                            <div>
                                                <p className="m-0">Events</p>
                                            </div>
                                        </div>
                                        {/* item 3 */}
                                        <div
                                            className="
                      d-flex
                      align-items-center
                      dropdown-item
                      p-0
                      m-0
                    "
                                        >
                                            <div className="p-2">
                                                <img
                                                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yo/r/hLkEFzsCyXC.png"
                                                    alt="from fb"
                                                    className="rounded-circle"
                                                    style={{
                                                        width: 38,
                                                        height: 38,
                                                        objectFit: "cover"
                                                    }}
                                                />
                                            </div>
                                            <div>
                                                <p className="m-0">Newsfeed</p>
                                            </div>
                                        </div>
                                        {/* end */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <hr className="m-0" />
                    {/* shortcuts */}
                    {/* heading */}
                    <div
                        className="
            d-flex
            justify-content-between
            align-items-center
            mt-2
            text-muted
            edit-heading
          "
                    >
                        <h4 className="m-0 pointer">Your Shorcuts</h4>
                        <p
                            className="m-0 text-primary me-3 pointer edit-button"
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#shortCutModal"
                        >
                            Edit
                        </p>
                        {/* modal */}
                        <div
                            className="modal fade"
                            id="shortCutModal"
                            tabIndex={-1}
                            aria-labelledby="shortCutModalLabel"
                            aria-hidden="true"
                            data-bs-backdrop="false"
                        >
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    {/* head */}
                                    <div className="modal-header align-items-center">
                                        <h5
                                            className="text-dark text-center w-100 m-0"
                                            id="exampleModalLabel"
                                        >
                                            Edit Your ShortCuts
                                        </h5>
                                        <button
                                            type="button"
                                            className="btn-close"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                        />
                                    </div>
                                    {/* body */}
                                    <div className="modal-body">
                                        <p className="text-muted">
                                            Shortcuts provide quick access to what you do most on
                                            Facebook. Your Shortcuts are sorted automatically, but
                                            you can pin something so it is always shown at the top or
                                            hide it from the list.
                                        </p>
                                        {/* Search */}
                                        <div className="p-1">
                                            <div
                                                className="
                        input-group-text
                        bg-gray
                        border-0
                        rounded-pill
                      "
                                                style={{ minHeight: 40, minWidth: 230 }}
                                            >
                                                <i className="fas fa-search me-2 text-muted" />
                                                <input
                                                    type="text"
                                                    className="form-control rounded-pill border-0 bg-gray"
                                                    placeholder="Search your Pages, groups, games, and events"
                                                />
                                            </div>
                                        </div>
                                        {/* short-1 */}
                                        <li className="my-1 p-1">
                                            <div
                                                className="
                        d-flex
                        align-items-center
                        justify-content-between
                        text-decoration-none text-dark
                      "
                                            >
                                                <div
                                                    className="
                          d-flex
                          align-items-center
                          justify-content-evenly
                        "
                                                >
                                                    <div className="p-2">
                                                        <img
                                                            src="https://source.unsplash.com/random/1"
                                                            alt="from fb"
                                                            className="
                              rounded
                              border border-1 border-secondary
                            "
                                                            style={{
                                                                width: 38,
                                                                height: 38,
                                                                objectFit: "cover"
                                                            }}
                                                        />
                                                    </div>
                                                    <div>
                                                        <p className="m-0">Lorem Ipsum</p>
                                                    </div>
                                                </div>
                                                <select
                                                    className="form-select w-50 border-0 bg-gray"
                                                    aria-label="Default select example"
                                                >
                                                    <option selected="" value={1}>
                                                        Short Automatically
                                                    </option>
                                                    <option value={2}>Pin To Top</option>
                                                    <option value={3}>Hide</option>
                                                </select>
                                            </div>
                                        </li>
                                        {/* short-2 */}
                                        <li className="my-1 p-1">
                                            <div
                                                className="
                        d-flex
                        align-items-center
                        justify-content-between
                        text-decoration-none text-dark
                      "
                                            >
                                                <div
                                                    className="
                          d-flex
                          align-items-center
                          justify-content-evenly
                        "
                                                >
                                                    <div className="p-2">
                                                        <img
                                                            src="https://source.unsplash.com/random/2"
                                                            alt="from fb"
                                                            className="
                              rounded
                              border border-1 border-secondary
                            "
                                                            style={{
                                                                width: 38,
                                                                height: 38,
                                                                objectFit: "cover"
                                                            }}
                                                        />
                                                    </div>
                                                    <div>
                                                        <p className="m-0">Lorem Ipsum</p>
                                                    </div>
                                                </div>
                                                <select
                                                    className="form-select w-50 border-0 bg-gray"
                                                    aria-label="Default select example"
                                                >
                                                    <option selected="" value={1}>
                                                        Short Automatically
                                                    </option>
                                                    <option value={2}>Pin To Top</option>
                                                    <option value={3}>Hide</option>
                                                </select>
                                            </div>
                                        </li>
                                        {/* short-3 */}
                                        <li className="my-1 p-1">
                                            <div
                                                className="
                        d-flex
                        align-items-center
                        justify-content-between
                        text-decoration-none text-dark
                      "
                                            >
                                                <div
                                                    className="
                          d-flex
                          align-items-center
                          justify-content-evenly
                        "
                                                >
                                                    <div className="p-2">
                                                        <img
                                                            src="https://source.unsplash.com/random/3"
                                                            alt="from fb"
                                                            className="
                              rounded
                              border border-1 border-secondary
                            "
                                                            style={{
                                                                width: 38,
                                                                height: 38,
                                                                objectFit: "cover"
                                                            }}
                                                        />
                                                    </div>
                                                    <div>
                                                        <p className="m-0">Lorem Ipsum</p>
                                                    </div>
                                                </div>
                                                <select
                                                    className="form-select w-50 border-0 bg-gray"
                                                    aria-label="Default select example"
                                                >
                                                    <option selected="" value={1}>
                                                        Short Automatically
                                                    </option>
                                                    <option value={2}>Pin To Top</option>
                                                    <option value={3}>Hide</option>
                                                </select>
                                            </div>
                                        </li>
                                        {/* end */}
                                    </div>
                                    {/* footer */}
                                    <div className="modal-footer">
                                        <button
                                            type="button"
                                            className="btn btn-light text-primary"
                                            data-bs-dismiss="modal"
                                        >
                                            Close
                                        </button>
                                        <button type="button" className="btn btn-primary">
                                            Save changes
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end */}
                    </div>
                    {/* short 1 */}
                    <li className="dropdown-item p-1">
                        <a
                            href="#"
                            className="
              d-flex
              align-items-center
              text-decoration-none text-dark
            "
                        >
                            <div className="p-2">
                                <img
                                    src="https://source.unsplash.com/random/1"
                                    alt="from fb"
                                    className="rounded border border-1 border-secondary"
                                    style={{ width: 38, height: 38, objectFit: "cover" }}
                                />
                            </div>
                            <div>
                                <p className="m-0">Lorem Ipsum</p>
                            </div>
                        </a>
                    </li>
                    {/* short-2 */}
                    <li className="dropdown-item p-1">
                        <a
                            href=""
                            className="
              d-flex
              align-items-center
              text-decoration-none text-dark
            "
                        >
                            <div className="p-2">
                                <img
                                    src="https://source.unsplash.com/random/2"
                                    alt="from fb"
                                    className="rounded border border-1 border-secondary"
                                    style={{ width: 38, height: 38, objectFit: "cover" }}
                                />
                            </div>
                            <div>
                                <p className="m-0">Lorem Ipsum</p>
                            </div>
                        </a>
                    </li>
                    {/* short-3 */}
                    <li className="dropdown-item p-1">
                        <a
                            href=""
                            className="
              d-flex
              align-items-center
              text-decoration-none text-dark
            "
                        >
                            <div className="p-2">
                                <img
                                    src="https://source.unsplash.com/random/3"
                                    alt="from fb"
                                    className="rounded border border-1 border-secondary"
                                    style={{ width: 38, height: 38, objectFit: "cover" }}
                                />
                            </div>
                            <div>
                                <p className="m-0">Lorem Ipsum</p>
                            </div>
                        </a>
                    </li>
                    {/* see more */}
                    <li className="p-1" type="button">
                        <div id="accordionFlushExample">
                            <div>
                                {/* see more button */}
                                <div
                                    className="d-flex align-items-center"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#shortModal"
                                    aria-expanded="false"
                                    aria-controls="shortModal"
                                >
                                    <div className="p-2">
                                        <i
                                            className="fas fa-chevron-down rounded-circle p-2"
                                            style={{ backgroundColor: "#d5d5d5 !important" }}
                                        />
                                    </div>
                                    <div>
                                        <p className="m-0">See More</p>
                                    </div>
                                </div>
                                {/* content */}
                                <div
                                    id="shortModal"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="flush-headingOne"
                                    data-bs-parent="#accordionFlushExample"
                                >
                                    <div>
                                        {/* item 1 */}
                                        <div
                                            className="
                      d-flex
                      align-items-center
                      dropdown-item
                      p-0
                      m-0
                    "
                                        >
                                            <div className="p-2">
                                                <img
                                                    src="https://source.unsplash.com/random/4"
                                                    alt="from fb"
                                                    className="rounded border border-1 border-secondary"
                                                    style={{
                                                        width: 38,
                                                        height: 38,
                                                        objectFit: "cover"
                                                    }}
                                                />
                                            </div>
                                            <div>
                                                <p className="m-0">Campus</p>
                                            </div>
                                        </div>
                                        {/* item 2 */}
                                        <div
                                            className="
                      d-flex
                      align-items-center
                      dropdown-item
                      p-0
                      m-0
                    "
                                        >
                                            <div className="p-2">
                                                <img
                                                    src="https://source.unsplash.com/random/5"
                                                    alt="from fb"
                                                    className="rounded border border-1 border-secondary"
                                                    style={{
                                                        width: 38,
                                                        height: 38,
                                                        objectFit: "cover"
                                                    }}
                                                />
                                            </div>
                                            <div>
                                                <p className="m-0">Events</p>
                                            </div>
                                        </div>
                                        {/* item 3 */}
                                        <div
                                            className="
                      d-flex
                      align-items-center
                      dropdown-item
                      p-0
                      m-0
                    "
                                        >
                                            <div className="p-2">
                                                <img
                                                    src="https://source.unsplash.com/random/6"
                                                    alt="from fb"
                                                    className="rounded border border-1 border-secondary"
                                                    style={{
                                                        width: 38,
                                                        height: 38,
                                                        objectFit: "cover"
                                                    }}
                                                />
                                            </div>
                                            <div>
                                                <p className="m-0">Newsfeed</p>
                                            </div>
                                        </div>
                                        {/* end */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                {/* terms */}
                <div className="p-2 mt-5">
                    <p className="text-muted fs-7">
                        Privacy • Terms • Advertising • Ad Choices • Cookies • Flexbook ©
                        2021
                    </p>
                </div>
            </div>
        </div>

    );
}

export default Sidebar;