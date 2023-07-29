import Chatbar from "./Main/chatbar";
import Sidebar from "./Main/sideBar";
import Timeline from "./Main/timeline";
import Appbar from "./appbar";
import ChatModelMobile from "./chatModelMobile";

function Feed() {
    return (
        <>
            <div className="bg-gray postion-relative">
                <>
                    <Appbar></Appbar>
                    {/* =============== New Chat Mobile =============== */}
                    <div
                        className="modal fade"
                        id="newChat"
                        tabIndex={-1}
                        aria-labelledby="newChatLabel"
                        aria-hidden="true"
                        data-bs-backdrop="false"
                    >
                        <div
                            className="
    modal-dialog modal-sm
    position-absolute
    bottom-0
    end-0
    w-75
    shadow
  "
                            style={{ transform: "translateX(-80px)" }}
                        >
                            <div className="modal-content border-0">
                                {/* head */}
                                <div className="modal-header align-items-start">
                                    <div>
                                        <h6 className="modal-title text-dark mb-2" id="newChat1Label">
                                            New Message
                                        </h6>
                                        <label className="text-dark">To:</label>
                                        <input type="text" className="border-0" />
                                    </div>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                    />
                                </div>
                                {/* body */}
                                <div className="modal-body shadow m-0 chat-border">
                                    <p className="m-0 text-primary ms-4">Suggested</p>
                                </div>
                                {/* footer */}
                                <div className="modal-footer border-0" style={{ minHeight: 300 }} />
                            </div>
                        </div>
                    </div>
                    {/* ================= Chat Modal Mobile ================= */}
                    {/* chat 1 */}
                    <ChatModelMobile></ChatModelMobile>
                    {/* chat 2 */}
                    <ChatModelMobile></ChatModelMobile>
                    {/* chat 3 */}
                    <ChatModelMobile></ChatModelMobile>
                    {/* chat 4 */}
                    <ChatModelMobile></ChatModelMobile>
                    {/* chat 5 */}
                    <ChatModelMobile></ChatModelMobile>

                    {/* ================= Main ================= */}
                    <div className="container-fluid">
                        <div className="row justify-content-evenly">
                            {/* ================= Sidebar ================= */}
                            <Sidebar></Sidebar>
                            {/* ================= Timeline ================= */}
                            <Timeline></Timeline>
                            {/* ================= Chatbar ================= */}
                            <Chatbar></Chatbar>
                        </div>
                    </div>
                    {/* ================= Chat Icon ================= */}
                    <div
                        className="fixed-bottom right-100 p-3"
                        style={{ zIndex: 6, left: "initial" }}
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#newChat"
                    >
                        <i className="fas fa-edit bg-white rounded-circle p-3 shadow" />
                    </div>
                </>

            </div>
        </>

    );
}

export default Feed;