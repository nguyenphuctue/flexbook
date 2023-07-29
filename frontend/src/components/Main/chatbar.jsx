
function Chatbar() {
    return (

        <div className="col-12 col-lg-3">
            <div
                className="
d-none d-xxl-block
h-100
end-0
overflow-hidden
scrollbar
"
                style={{
                    maxWidth: 360,
                    width: "100%",
                    zIndex: 4,
                    paddingTop: 56,
                    left: "initial !important"
                }}
            >
                <div className="p-3 mt-4">
                    {/* sponsors */}
                    <h5 className="text-muted">Sponsored</h5>
                    {/* s 1 */}
                    <li className="dropdown-item my-2 d-flex justify-content-between">
                        {/* img */}
                        <a
                            href="#"
                            className="
d-flex
align-items-center
text-decoration-none
link-dark
"
                        >
                            <img
                                src="https://source.unsplash.com/random/1"
                                alt="ads"
                                style={{ width: 100, height: 100, objectFit: "cover" }}
                                className="rounded me-3"
                            />
                            <div>
                                <p className="m-0">Lorem ipsum</p>
                                <span className="text-muted fs-7">loremipsum.com</span>
                            </div>
                        </a>
                        {/* icon */}
                        <div
                            className="
rounded-circle
p-1
bg-white
d-flex
align-items-center
justify-content-center
mx-2
sponsor-icon
nav-item
"
                            type="button"
                            style={{ width: 38, height: 38 }}
                        >
                            <i
                                className="fas fa-ellipsis-h text-muted p-2"
                                data-bs-toggle="dropdown"
                            />
                            {/* menu */}
                            <ul className="dropdown-menu">
                                {/* item 1 */}
                                <li className="dropdown-item">
                                    <a
                                        href="#"
                                        className="
d-flex
align-items-center
text-decoration-none text-dark
"
                                    >
                                        <i className="far fa-window-close" />
                                        <div className="ms-3">
                                            <p className="m-0">Hide Ad</p>
                                            <span className="text-muted fs-7">
                                                Never see this add again.
                                            </span>
                                        </div>
                                    </a>
                                </li>
                                {/* item 2 */}
                                <li className="dropdown-item">
                                    <a
                                        href="#"
                                        className="
d-flex
align-items-center
text-decoration-none text-dark
"
                                    >
                                        <i className="fas fa-exclamation-triangle" />
                                        <div className="ms-3">
                                            <p className="m-0">Report Ad</p>
                                            <span className="text-muted fs-7">
                                                Tell us a problem with this add.
                                            </span>
                                        </div>
                                    </a>
                                </li>
                                {/* item 3 */}
                                <li className="dropdown-item">
                                    <a
                                        href="#"
                                        className="
d-flex
align-items-center
text-decoration-none text-dark
"
                                    >
                                        <i className="fas fa-info-circle" />
                                        <div className="ms-3">
                                            <p className="m-0">Why am I seeing this ad?</p>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    {/* s 2 */}
                    <li className="dropdown-item my-2 d-flex justify-content-between">
                        {/* img */}
                        <a
                            href="#"
                            className="
d-flex
align-items-center
text-decoration-none
link-dark
"
                        >
                            <img
                                src="https://source.unsplash.com/random/2"
                                alt="ads"
                                style={{ width: 100, height: 100, objectFit: "cover" }}
                                className="rounded me-3"
                            />
                            <div>
                                <p className="m-0">Lorem ipsum</p>
                                <span className="text-muted fs-7">loremipsum.com</span>
                            </div>
                        </a>
                        {/* icon */}
                        <div
                            className="
rounded-circle
p-1
bg-white
d-flex
align-items-center
justify-content-center
mx-2
sponsor-icon
nav-item
"
                            type="button"
                            style={{ width: 38, height: 38 }}
                        >
                            <i
                                className="fas fa-ellipsis-h text-muted p-2"
                                data-bs-toggle="dropdown"
                            />
                            {/* menu */}
                            <ul className="dropdown-menu">
                                {/* item 1 */}
                                <li className="dropdown-item">
                                    <a
                                        href="#"
                                        className="
d-flex
align-items-center
text-decoration-none text-dark
"
                                    >
                                        <i className="far fa-window-close" />
                                        <div className="ms-3">
                                            <p className="m-0">Hide Ad</p>
                                            <span className="text-muted fs-7">
                                                Never see this add again.
                                            </span>
                                        </div>
                                    </a>
                                </li>
                                {/* item 2 */}
                                <li className="dropdown-item">
                                    <a
                                        href="#"
                                        className="
d-flex
align-items-center
text-decoration-none text-dark
"
                                    >
                                        <i className="fas fa-exclamation-triangle" />
                                        <div className="ms-3">
                                            <p className="m-0">Report Ad</p>
                                            <span className="text-muted fs-7">
                                                Tell us a problem with this add.
                                            </span>
                                        </div>
                                    </a>
                                </li>
                                {/* item 3 */}
                                <li className="dropdown-item">
                                    <a
                                        href="#"
                                        className="
d-flex
align-items-center
text-decoration-none text-dark
"
                                    >
                                        <i className="fas fa-info-circle" />
                                        <div className="ms-3">
                                            <p className="m-0">Why am I seeing this ad?</p>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    {/* contacts */}
                    <hr className="m-0" />
                    <div className="my-3 d-flex justify-content-between align-items-center">
                        <p className="text-muted fs-5 m-0">Contacts</p>
                        {/* icons */}
                        <div className="text-muted">
                            {/* video room */}
                            <i
                                className="fas fa-video mx-2 pointer"
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#videoRoomD"
                            />
                            {/* video room modal */}
                            <div
                                className="modal fade"
                                id="videoRoomD"
                                tabIndex={-1}
                                aria-labelledby="videoRoomDLabel"
                                aria-hidden="true"
                                data-bs-backdrop="false"
                            >
                                <div className="modal-dialog modal-dialog-centered modal-lg">
                                    <div className="modal-content bg-dark">
                                        {/* header */}
                                        <div className="modal-header border-0">
                                            <button
                                                type="button"
                                                className="btn-close btn-close-white"
                                                data-bs-dismiss="modal"
                                                aria-label="Close"
                                            />
                                        </div>
                                        {/* body */}
                                        <div
                                            className="
modal-body
d-flex
flex-column
align-items-center
justify-content-center
"
                                            style={{ minHeight: 400 }}
                                        >
                                            <i className="fas fa-video fs-0" />
                                            <h3 className="text-white">
                                                Schedule A Room For Later
                                            </h3>
                                            <p className="text-white text-center w-50 mx-auto">
                                                Lorem ipsum dolor sit amet consectetur adipisicing
                                                elit. Ut deserunt alias laudantium itaque eius enim
                                                natus culpa eligendi consectetur maiores!
                                            </p>
                                            <button className="btn btn-lg btn-primary rounded-pill">
                                                Schedule Room
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* new chat */}
                            <i
                                className="fas fa-search mx-2 pointer"
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#newChat"
                            />
                            {/* chat settings */}
                            <i
                                className="fas fa-ellipsis-h pointer text-muted mx-2"
                                type="button"
                                data-bs-toggle="dropdown"
                            />
                            {/* chat setting dd */}
                            <ul className="dropdown-menu shadow" style={{ width: "18em" }}>
                                {/* title */}
                                <div className="p-2">
                                    <h5>Chat Settings</h5>
                                    <span className="text-muted fs-7">
                                        Customize your Messenger experience.
                                    </span>
                                </div>
                                <hr />
                                {/* incoming sound */}
                                <li>
                                    <div
                                        className="
dropdown-item
d-flex
align-items-center
justify-content-between
"
                                    >
                                        {/* icon */}
                                        <div className="d-flex align-items-center">
                                            <i className="fas fa-phone-alt me-3" />
                                            <p className="m-0">Incoming call sounds</p>
                                        </div>
                                        {/* toggle */}
                                        <div className="form-check form-switch m-0">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="flexSwitchCheckChecked"
                                                defaultChecked=""
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="flexSwitchCheckChecked"
                                            />
                                        </div>
                                    </div>
                                </li>
                                {/* message sound */}
                                <li>
                                    <div
                                        className="
dropdown-item
d-flex
align-items-center
justify-content-between
"
                                    >
                                        {/* icon */}
                                        <div className="d-flex align-items-center">
                                            <i className="fas fa-volume-off me-4 fs-4" />
                                            <p className="m-0">Message sounds</p>
                                        </div>
                                        {/* toggle */}
                                        <div className="form-check form-switch m-0">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="flexSwitchCheckChecked"
                                                defaultChecked=""
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="flexSwitchCheckChecked"
                                            />
                                        </div>
                                    </div>
                                </li>
                                {/* popup message */}
                                <li>
                                    <div
                                        className="
dropdown-item
d-flex
align-items-center
justify-content-between
"
                                    >
                                        {/* icon */}
                                        <div className="d-flex align-items-center">
                                            <i className="fas fa-spinner me-3" />
                                            <p className="m-0">Pop-up new messages</p>
                                        </div>
                                        {/* toggle */}
                                        <div className="form-check form-switch m-0">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="flexSwitchCheckChecked"
                                                defaultChecked=""
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="flexSwitchCheckChecked"
                                            />
                                        </div>
                                    </div>
                                    <span className="ms-5 text-muted fs-7">
                                        Automatically open new messages.
                                    </span>
                                </li>
                                <hr className="m-0" />
                                {/* item 1 */}
                                <li>
                                    <div
                                        className="
dropdown-item
d-flex
align-items-center
justify-content-between
"
                                    >
                                        {/* icon */}
                                        <div className="d-flex align-items-center">
                                            <i className="fas fa-toggle-off me-3" />
                                            <p className="m-0">Turn Off Active Status</p>
                                        </div>
                                    </div>
                                </li>
                                {/* item 2 */}
                                <li>
                                    <div
                                        className="
dropdown-item
d-flex
align-items-center
justify-content-between
"
                                    >
                                        {/* icon */}
                                        <div className="d-flex align-items-center">
                                            <i className="far fa-comment-alt me-3" />
                                            <p className="m-0">Message Request</p>
                                        </div>
                                    </div>
                                </li>
                                {/* item 3 */}
                                <li>
                                    <div
                                        className="
dropdown-item
d-flex
align-items-center
justify-content-between
"
                                    >
                                        {/* icon */}
                                        <div className="d-flex align-items-center">
                                            <i className="fas fa-share-square me-3" />
                                            <p className="m-0">Message delivery settings</p>
                                        </div>
                                    </div>
                                </li>
                                {/* item 4 */}
                                <li>
                                    <div
                                        className="
dropdown-item
d-flex
align-items-center
justify-content-between
"
                                    >
                                        {/* icon */}
                                        <div className="d-flex align-items-center">
                                            <i className="fas fa-shield-alt me-3" />
                                            <p className="m-0">Block settings</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* friend 1 */}
                    <li
                        className="dropdown-item rounded my-2 px-0"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#singleChat1"
                    >
                        {/* avatar */}
                        <div
                            className="d-flex align-items-center mx-2 chat-avatar"
                            data-bs-custom-class="chat-box"
                            data-bs-container="body"
                            data-bs-toggle="popover"
                            data-bs-placement="left"
                            data-bs-trigger="hover"
                            data-bs-content='
<div>
<div class="popover-body d-flex p-2">
<div>
<img src="https://source.unsplash.com/random/4" alt="avatar" class="pop-avatar"  />
</div>
<div >
<h5>Mike</h5>
<div class="d-flex">
<i class="fas fa-user-friends m-1 text-muted"></i>
<p>2 mutual friends: <span class="fw-bold">Jerry</span> and <span class="fw-bold">Phu</span></p>
</div>
<div class="d-flex">
<i class="fas fa-graduation-cap m-1 text-muted"></i>
<p>Studies at MIT</p>
</div>
</div>
</div>
</div>
'
                            data-bs-html="true"
                        >
                            <div className="position-relative">
                                <img
                                    src="https://source.unsplash.com/random/4"
                                    alt="avatar"
                                    className="rounded-circle me-2"
                                    style={{ width: 38, height: 38, objectFit: "cover" }}
                                />
                                <span
                                    className="
position-absolute
bottom-0
translate-middle
border border-light
rounded-circle
bg-success
p-1
"
                                    style={{ left: "75%" }}
                                >
                                    <span className="visually-hidden" />
                                </span>
                            </div>
                            <p className="m-0">Mike</p>
                        </div>
                    </li>
                    {/* friend 2 */}
                    <li
                        className="dropdown-item rounded my-2 px-0"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#singleChat2"
                    >
                        {/* avatar */}
                        <div
                            className="d-flex align-items-center mx-2 chat-avatar"
                            data-bs-custom-class="chat-box"
                            data-bs-container="body"
                            data-bs-toggle="popover"
                            data-bs-placement="left"
                            data-bs-trigger="hover"
                            data-bs-content='
<div>
<div class="popover-body d-flex p-2">
<div>
<img src="https://source.unsplash.com/random/2" alt="avatar" class="pop-avatar"  />
</div>
<div >
<h5>Tuan</h5>
<div class="d-flex">
<i class="fas fa-user-friends m-1 text-muted"></i>
<p>2 mutual friends: <span class="fw-bold">Jerry</span> and <span class="fw-bold">Phu</span></p>
</div>
<div class="d-flex">
<i class="fas fa-graduation-cap m-1 text-muted"></i>
<p>Studies at MIT</p>
</div>
</div>
</div>
</div>
'
                            data-bs-html="true"
                        >
                            <div className="position-relative">
                                <img
                                    src="https://source.unsplash.com/random/2"
                                    alt="avatar"
                                    className="rounded-circle me-2"
                                    style={{ width: 38, height: 38, objectFit: "cover" }}
                                />
                                <span
                                    className="
position-absolute
bottom-0
translate-middle
border border-light
rounded-circle
bg-success
p-1
"
                                    style={{ left: "75%" }}
                                >
                                    <span className="visually-hidden" />
                                </span>
                            </div>
                            <p className="m-0">Tuan</p>
                        </div>
                    </li>
                    {/* friend 3 */}
                    <li
                        className="dropdown-item rounded my-2 px-0"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#singleChat3"
                    >
                        {/* avatar */}
                        <div
                            className="d-flex align-items-center mx-2 chat-avatar"
                            data-bs-custom-class="chat-box"
                            data-bs-container="body"
                            data-bs-toggle="popover"
                            data-bs-placement="left"
                            data-bs-trigger="hover"
                            data-bs-content='
<div>
<div class="popover-body d-flex p-2">
<div>
  <img src="https://source.unsplash.com/random/3" alt="avatar" class="pop-avatar"  />
</div>
<div >
  <h5>Jerry</h5>
  <div class="d-flex">
    <i class="fas fa-user-friends m-1 text-muted"></i>
    <p>2 mutual friends: <span class="fw-bold">Jerry</span> and <span class="fw-bold">Phu</span></p>
  </div>
  <div class="d-flex">
  <i class="fas fa-graduation-cap m-1 text-muted"></i>
  <p>Studies at MIT</p>
  </div>
</div>
</div>
</div>
'
                            data-bs-html="true"
                        >
                            <div className="position-relative">
                                <img
                                    src="https://source.unsplash.com/random/3"
                                    alt="avatar"
                                    className="rounded-circle me-2"
                                    style={{ width: 38, height: 38, objectFit: "cover" }}
                                />
                                <span
                                    className="
position-absolute
bottom-0
translate-middle
border border-light
rounded-circle
bg-success
p-1
"
                                    style={{ left: "75%" }}
                                >
                                    <span className="visually-hidden" />
                                </span>
                            </div>
                            <p className="m-0">Jerry</p>
                        </div>
                    </li>
                    {/* friend 4 */}
                    <li
                        className="dropdown-item rounded my-2 px-0"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#singleChat4"
                    >
                        {/* avatar */}
                        <div
                            className="d-flex align-items-center mx-2 chat-avatar"
                            data-bs-custom-class="chat-box"
                            data-bs-container="body"
                            data-bs-toggle="popover"
                            data-bs-placement="left"
                            data-bs-trigger="hover"
                            data-bs-content='
<div>
<div class="popover-body d-flex p-2">
<div>
<img src="https://source.unsplash.com/random/4" alt="avatar" class="pop-avatar"  />
</div>
<div >
<h5>Tony</h5>
<div class="d-flex">
<i class="fas fa-user-friends m-1 text-muted"></i>
<p>2 mutual friends: <span class="fw-bold">Jerry</span> and <span class="fw-bold">Phu</span></p>
</div>
<div class="d-flex">
<i class="fas fa-graduation-cap m-1 text-muted"></i>
<p>Studies at MIT</p>
</div>
</div>
</div>
</div>
'
                            data-bs-html="true"
                        >
                            <div className="position-relative">
                                <img
                                    src="https://source.unsplash.com/random/4"
                                    alt="avatar"
                                    className="rounded-circle me-2"
                                    style={{ width: 38, height: 38, objectFit: "cover" }}
                                />
                                <span
                                    className="
position-absolute
bottom-0
translate-middle
border border-light
rounded-circle
bg-success
p-1
"
                                    style={{ left: "75%" }}
                                >
                                    <span className="visually-hidden" />
                                </span>
                            </div>
                            <p className="m-0">Tony</p>
                        </div>
                    </li>
                    {/* friend 5 */}
                    <li
                        className="dropdown-item rounded my-2 px-0"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#singleChat5"
                    >
                        {/* avatar */}
                        <div
                            className="d-flex align-items-center mx-2 chat-avatar"
                            data-bs-custom-class="chat-box"
                            data-bs-container="body"
                            data-bs-toggle="popover"
                            data-bs-placement="left"
                            data-bs-trigger="hover"
                            data-bs-content='
<div>
<div class="popover-body d-flex p-2">
<div>
<img src="https://source.unsplash.com/random/5" alt="avatar" class="pop-avatar"  />
</div>
<div >
<h5>Phu</h5>
<div class="d-flex">
<i class="fas fa-user-friends m-1 text-muted"></i>
<p>2 mutual friends: <span class="fw-bold">Jerry</span> and <span class="fw-bold">Phu</span></p>
</div>
<div class="d-flex">
<i class="fas fa-graduation-cap m-1 text-muted"></i>
<p>Studies at MIT</p>
</div>
</div>
</div>
</div>
'
                            data-bs-html="true"
                        >
                            <div className="position-relative">
                                <img
                                    src="https://source.unsplash.com/random/5"
                                    alt="avatar"
                                    className="rounded-circle me-2"
                                    style={{ width: 38, height: 38, objectFit: "cover" }}
                                />
                                <span
                                    className="
position-absolute
bottom-0
translate-middle
border border-light
rounded-circle
bg-success
p-1
"
                                    style={{ left: "75%" }}
                                >
                                    <span className="visually-hidden" />
                                </span>
                            </div>
                            <p className="m-0">Phu</p>
                        </div>
                    </li>
                    {/* friend 6 */}
                    <li
                        className="dropdown-item rounded my-2 px-0"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#singleChat1"
                    >
                        {/* avatar */}
                        <div
                            className="d-flex align-items-center mx-2 chat-avatar"
                            data-bs-custom-class="chat-box"
                            data-bs-container="body"
                            data-bs-toggle="popover"
                            data-bs-placement="left"
                            data-bs-trigger="hover"
                            data-bs-content='
<div>
  <div class="popover-body d-flex p-2">
    <div>
      <img src="https://source.unsplash.com/random/4" alt="avatar" class="pop-avatar"  />
    </div>
    <div >
      <h5>Mike</h5>
      <div class="d-flex">
        <i class="fas fa-user-friends m-1 text-muted"></i>
        <p>2 mutual friends: <span class="fw-bold">Jerry</span> and <span class="fw-bold">Phu</span></p>
      </div>
      <div class="d-flex">
      <i class="fas fa-graduation-cap m-1 text-muted"></i>
      <p>Studies at MIT</p>
      </div>
    </div>
  </div>
</div>
'
                            data-bs-html="true"
                        >
                            <div className="position-relative">
                                <img
                                    src="https://source.unsplash.com/random/4"
                                    alt="avatar"
                                    className="rounded-circle me-2"
                                    style={{ width: 38, height: 38, objectFit: "cover" }}
                                />
                                <span
                                    className="
position-absolute
bottom-0
translate-middle
border border-light
rounded-circle
bg-success
p-1
"
                                    style={{ left: "75%" }}
                                >
                                    <span className="visually-hidden" />
                                </span>
                            </div>
                            <p className="m-0">Mike</p>
                        </div>
                    </li>
                    {/* friend 7 */}
                    <li
                        className="dropdown-item rounded my-2 px-0"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#singleChat2"
                    >
                        {/* avatar */}
                        <div
                            className="d-flex align-items-center mx-2 chat-avatar"
                            data-bs-custom-class="chat-box"
                            data-bs-container="body"
                            data-bs-toggle="popover"
                            data-bs-placement="left"
                            data-bs-trigger="hover"
                            data-bs-content='
      <div>
        <div class="popover-body d-flex p-2">
          <div>
            <img src="https://source.unsplash.com/random/2" alt="avatar" class="pop-avatar"  />
          </div>
          <div >
            <h5>Tuan</h5>
            <div class="d-flex">
              <i class="fas fa-user-friends m-1 text-muted"></i>
              <p>2 mutual friends: <span class="fw-bold">Jerry</span> and <span class="fw-bold">Phu</span></p>
            </div>
            <div class="d-flex">
            <i class="fas fa-graduation-cap m-1 text-muted"></i>
            <p>Studies at MIT</p>
            </div>
          </div>
        </div>
      </div>
    '
                            data-bs-html="true"
                        >
                            <div className="position-relative">
                                <img
                                    src="https://source.unsplash.com/random/2"
                                    alt="avatar"
                                    className="rounded-circle me-2"
                                    style={{ width: 38, height: 38, objectFit: "cover" }}
                                />
                                <span
                                    className="
position-absolute
bottom-0
translate-middle
border border-light
rounded-circle
bg-success
p-1
"
                                    style={{ left: "75%" }}
                                >
                                    <span className="visually-hidden" />
                                </span>
                            </div>
                            <p className="m-0">Tuan</p>
                        </div>
                    </li>
                    {/* friend 8 */}
                    <li
                        className="dropdown-item rounded my-2 px-0"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#singleChat3"
                    >
                        {/* avatar */}
                        <div
                            className="d-flex align-items-center mx-2 chat-avatar"
                            data-bs-custom-class="chat-box"
                            data-bs-container="body"
                            data-bs-toggle="popover"
                            data-bs-placement="left"
                            data-bs-trigger="hover"
                            data-bs-content='
          <div>
            <div class="popover-body d-flex p-2">
              <div>
                <img src="https://source.unsplash.com/random/3" alt="avatar" class="pop-avatar"  />
              </div>
              <div >
                <h5>Jerry</h5>
                <div class="d-flex">
                  <i class="fas fa-user-friends m-1 text-muted"></i>
                  <p>2 mutual friends: <span class="fw-bold">Jerry</span> and <span class="fw-bold">Phu</span></p>
                </div>
                <div class="d-flex">
                <i class="fas fa-graduation-cap m-1 text-muted"></i>
                <p>Studies at MIT</p>
                </div>
              </div>
            </div>
          </div>
        '
                            data-bs-html="true"
                        >
                            <div className="position-relative">
                                <img
                                    src="https://source.unsplash.com/random/3"
                                    alt="avatar"
                                    className="rounded-circle me-2"
                                    style={{ width: 38, height: 38, objectFit: "cover" }}
                                />
                                <span
                                    className="
position-absolute
bottom-0
translate-middle
border border-light
rounded-circle
bg-success
p-1
"
                                    style={{ left: "75%" }}
                                >
                                    <span className="visually-hidden" />
                                </span>
                            </div>
                            <p className="m-0">Jerry</p>
                        </div>
                    </li>
                    {/* friend 9 */}
                    <li
                        className="dropdown-item rounded my-2 px-0"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#singleChat4"
                    >
                        {/* avatar */}
                        <div
                            className="d-flex align-items-center mx-2 chat-avatar"
                            data-bs-custom-class="chat-box"
                            data-bs-container="body"
                            data-bs-toggle="popover"
                            data-bs-placement="left"
                            data-bs-trigger="hover"
                            data-bs-content='
      <div>
        <div class="popover-body d-flex p-2">
          <div>
            <img src="https://source.unsplash.com/random/4" alt="avatar" class="pop-avatar"  />
          </div>
          <div >
            <h5>Tony</h5>
            <div class="d-flex">
              <i class="fas fa-user-friends m-1 text-muted"></i>
              <p>2 mutual friends: <span class="fw-bold">Jerry</span> and <span class="fw-bold">Phu</span></p>
            </div>
            <div class="d-flex">
            <i class="fas fa-graduation-cap m-1 text-muted"></i>
            <p>Studies at MIT</p>
            </div>
          </div>
        </div>
      </div>
    '
                            data-bs-html="true"
                        >
                            <div className="position-relative">
                                <img
                                    src="https://source.unsplash.com/random/4"
                                    alt="avatar"
                                    className="rounded-circle me-2"
                                    style={{ width: 38, height: 38, objectFit: "cover" }}
                                />
                                <span
                                    className="
position-absolute
bottom-0
translate-middle
border border-light
rounded-circle
bg-success
p-1
"
                                    style={{ left: "75%" }}
                                >
                                    <span className="visually-hidden" />
                                </span>
                            </div>
                            <p className="m-0">Tony</p>
                        </div>
                    </li>
                    {/* friend 10 */}
                    <li
                        className="dropdown-item rounded my-2 px-0"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#singleChat5"
                    >
                        {/* avatar */}
                        <div
                            className="d-flex align-items-center mx-2 chat-avatar"
                            data-bs-custom-class="chat-box"
                            data-bs-container="body"
                            data-bs-toggle="popover"
                            data-bs-placement="left"
                            data-bs-trigger="hover"
                            data-bs-content='
  <div>
    <div class="popover-body d-flex p-2">
      <div>
        <img src="https://source.unsplash.com/random/5" alt="avatar" class="pop-avatar"  />
      </div>
      <div >
        <h5>Phu</h5>
        <div class="d-flex">
          <i class="fas fa-user-friends m-1 text-muted"></i>
          <p>2 mutual friends: <span class="fw-bold">Jerry</span> and <span class="fw-bold">Phu</span></p>
        </div>
        <div class="d-flex">
        <i class="fas fa-graduation-cap m-1 text-muted"></i>
        <p>Studies at MIT</p>
        </div>
      </div>
    </div>
  </div>
'
                            data-bs-html="true"
                        >
                            <div className="position-relative">
                                <img
                                    src="https://source.unsplash.com/random/5"
                                    alt="avatar"
                                    className="rounded-circle me-2"
                                    style={{ width: 38, height: 38, objectFit: "cover" }}
                                />
                                <span
                                    className="
position-absolute
bottom-0
translate-middle
border border-light
rounded-circle
bg-success
p-1
"
                                    style={{ left: "75%" }}
                                >
                                    <span className="visually-hidden" />
                                </span>
                            </div>
                            <p className="m-0">Phu</p>
                        </div>
                    </li>
                    {/* friend 11 */}
                    <li
                        className="dropdown-item rounded my-2 px-0"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#singleChat1"
                    >
                        {/* avatar */}
                        <div
                            className="d-flex align-items-center mx-2 chat-avatar"
                            data-bs-custom-class="chat-box"
                            data-bs-container="body"
                            data-bs-toggle="popover"
                            data-bs-placement="left"
                            data-bs-trigger="hover"
                            data-bs-content='
<div>
<div class="popover-body d-flex p-2">
<div>
<img src="https://source.unsplash.com/random/4" alt="avatar" class="pop-avatar"  />
</div>
<div >
<h5>Mike</h5>
<div class="d-flex">
<i class="fas fa-user-friends m-1 text-muted"></i>
<p>2 mutual friends: <span class="fw-bold">Jerry</span> and <span class="fw-bold">Phu</span></p>
</div>
<div class="d-flex">
<i class="fas fa-graduation-cap m-1 text-muted"></i>
<p>Studies at MIT</p>
</div>
</div>
</div>
</div>
'
                            data-bs-html="true"
                        >
                            <div className="position-relative">
                                <img
                                    src="https://source.unsplash.com/random/4"
                                    alt="avatar"
                                    className="rounded-circle me-2"
                                    style={{ width: 38, height: 38, objectFit: "cover" }}
                                />
                                <span
                                    className="
position-absolute
bottom-0
translate-middle
border border-light
rounded-circle
bg-success
p-1
"
                                    style={{ left: "75%" }}
                                >
                                    <span className="visually-hidden" />
                                </span>
                            </div>
                            <p className="m-0">Mike</p>
                        </div>
                    </li>
                    {/* friend 12 */}
                    <li
                        className="dropdown-item rounded my-2 px-0"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#singleChat2"
                    >
                        {/* avatar */}
                        <div
                            className="d-flex align-items-center mx-2 chat-avatar"
                            data-bs-custom-class="chat-box"
                            data-bs-container="body"
                            data-bs-toggle="popover"
                            data-bs-placement="left"
                            data-bs-trigger="hover"
                            data-bs-content='
<div>
<div class="popover-body d-flex p-2">
<div>
<img src="https://source.unsplash.com/random/2" alt="avatar" class="pop-avatar"  />
</div>
<div >
<h5>Tuan</h5>
<div class="d-flex">
<i class="fas fa-user-friends m-1 text-muted"></i>
<p>2 mutual friends: <span class="fw-bold">Jerry</span> and <span class="fw-bold">Phu</span></p>
</div>
<div class="d-flex">
<i class="fas fa-graduation-cap m-1 text-muted"></i>
<p>Studies at MIT</p>
</div>
</div>
</div>
</div>
'
                            data-bs-html="true"
                        >
                            <div className="position-relative">
                                <img
                                    src="https://source.unsplash.com/random/2"
                                    alt="avatar"
                                    className="rounded-circle me-2"
                                    style={{ width: 38, height: 38, objectFit: "cover" }}
                                />
                                <span
                                    className="
position-absolute
bottom-0
translate-middle
border border-light
rounded-circle
bg-success
p-1
"
                                    style={{ left: "75%" }}
                                >
                                    <span className="visually-hidden" />
                                </span>
                            </div>
                            <p className="m-0">Tuan</p>
                        </div>
                    </li>
                    {/* friend 13 */}
                    <li
                        className="dropdown-item rounded my-2 px-0"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#singleChat3"
                    >
                        {/* avatar */}
                        <div
                            className="d-flex align-items-center mx-2 chat-avatar"
                            data-bs-custom-class="chat-box"
                            data-bs-container="body"
                            data-bs-toggle="popover"
                            data-bs-placement="left"
                            data-bs-trigger="hover"
                            data-bs-content='
<div>
<div class="popover-body d-flex p-2">
<div>
  <img src="https://source.unsplash.com/random/3" alt="avatar" class="pop-avatar"  />
</div>
<div >
  <h5>Jerry</h5>
  <div class="d-flex">
    <i class="fas fa-user-friends m-1 text-muted"></i>
    <p>2 mutual friends: <span class="fw-bold">Jerry</span> and <span class="fw-bold">Phu</span></p>
  </div>
  <div class="d-flex">
  <i class="fas fa-graduation-cap m-1 text-muted"></i>
  <p>Studies at MIT</p>
  </div>
</div>
</div>
</div>
'
                            data-bs-html="true"
                        >
                            <div className="position-relative">
                                <img
                                    src="https://source.unsplash.com/random/3"
                                    alt="avatar"
                                    className="rounded-circle me-2"
                                    style={{ width: 38, height: 38, objectFit: "cover" }}
                                />
                                <span
                                    className="
position-absolute
bottom-0
translate-middle
border border-light
rounded-circle
bg-success
p-1
"
                                    style={{ left: "75%" }}
                                >
                                    <span className="visually-hidden" />
                                </span>
                            </div>
                            <p className="m-0">Jerry</p>
                        </div>
                    </li>
                    {/* friend 14 */}
                    <li
                        className="dropdown-item rounded my-2 px-0"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#singleChat4"
                    >
                        {/* avatar */}
                        <div
                            className="d-flex align-items-center mx-2 chat-avatar"
                            data-bs-custom-class="chat-box"
                            data-bs-container="body"
                            data-bs-toggle="popover"
                            data-bs-placement="left"
                            data-bs-trigger="hover"
                            data-bs-content='
<div>
<div class="popover-body d-flex p-2">
<div>
<img src="https://source.unsplash.com/random/4" alt="avatar" class="pop-avatar"  />
</div>
<div >
<h5>Tony</h5>
<div class="d-flex">
<i class="fas fa-user-friends m-1 text-muted"></i>
<p>2 mutual friends: <span class="fw-bold">Jerry</span> and <span class="fw-bold">Phu</span></p>
</div>
<div class="d-flex">
<i class="fas fa-graduation-cap m-1 text-muted"></i>
<p>Studies at MIT</p>
</div>
</div>
</div>
</div>
'
                            data-bs-html="true"
                        >
                            <div className="position-relative">
                                <img
                                    src="https://source.unsplash.com/random/4"
                                    alt="avatar"
                                    className="rounded-circle me-2"
                                    style={{ width: 38, height: 38, objectFit: "cover" }}
                                />
                                <span
                                    className="
position-absolute
bottom-0
translate-middle
border border-light
rounded-circle
bg-success
p-1
"
                                    style={{ left: "75%" }}
                                >
                                    <span className="visually-hidden" />
                                </span>
                            </div>
                            <p className="m-0">Tony</p>
                        </div>
                    </li>
                    {/* friend 15 */}
                    <li
                        className="dropdown-item rounded my-2 px-0"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#singleChat5"
                    >
                        {/* avatar */}
                        <div
                            className="d-flex align-items-center mx-2 chat-avatar"
                            data-bs-custom-class="chat-box"
                            data-bs-container="body"
                            data-bs-toggle="popover"
                            data-bs-placement="left"
                            data-bs-trigger="hover"
                            data-bs-content='
<div>
<div class="popover-body d-flex p-2">
<div>
<img src="https://source.unsplash.com/random/5" alt="avatar" class="pop-avatar"  />
</div>
<div >
<h5>Phu</h5>
<div class="d-flex">
<i class="fas fa-user-friends m-1 text-muted"></i>
<p>2 mutual friends: <span class="fw-bold">Jerry</span> and <span class="fw-bold">Phu</span></p>
</div>
<div class="d-flex">
<i class="fas fa-graduation-cap m-1 text-muted"></i>
<p>Studies at MIT</p>
</div>
</div>
</div>
</div>
'
                            data-bs-html="true"
                        >
                            <div className="position-relative">
                                <img
                                    src="https://source.unsplash.com/random/5"
                                    alt="avatar"
                                    className="rounded-circle me-2"
                                    style={{ width: 38, height: 38, objectFit: "cover" }}
                                />
                                <span
                                    className="
position-absolute
bottom-0
translate-middle
border border-light
rounded-circle
bg-success
p-1
"
                                    style={{ left: "75%" }}
                                >
                                    <span className="visually-hidden" />
                                </span>
                            </div>
                            <p className="m-0">Phu</p>
                        </div>
                    </li>
                </div>
            </div>
        </div>
    );

}

export default Chatbar;