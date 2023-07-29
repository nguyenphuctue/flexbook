import { useEffect, useState } from "react";
import Post from "./post";

function Timeline() {

    let postOfUser = JSON.parse(sessionStorage.getItem("postOfUser"))
    console.log("timeline", postOfUser)

    return (
        <div className="col-12 col-lg-6 pb-5">
            <div
                className="d-flex flex-column justify-content-center w-100 mx-auto"
                style={{ paddingTop: 56, maxWidth: 680 }}
            >
                {/* stories */}
                <div className="mt-5 d-flex justify-content-between position-relative">
                    {/* s 1 */}
                    <div
                        className="mx-1 bg-white rounded story"
                        type="button"
                        style={{ width: "6em", height: 190 }}
                    >
                        <img
                            src="https://source.unsplash.com/collection/happy-people"
                            className="card-img-top"
                            alt="story posts"
                            style={{ minHeight: 125, objectFit: "cover" }}
                        />
                        <div
                            className="
d-flex
align-items-center
justify-content-center
position-relative
"
                            style={{ minHeight: 65 }}
                        >
                            <p className="mb-0 text-center fs-7 fw-bold">Create Story</p>
                            <div className="position-absolute top-0 start-50 translate-middle">
                                <i
                                    className="
fas
fa-plus-circle
fs-3
text-primary
bg-white
p-1
rounded-circle
"
                                />
                            </div>
                        </div>
                    </div>
                    {/* s 2 */}
                    <div
                        className="rounded mx-1 story"
                        type="button"
                        style={{ width: "6em", height: 190 }}
                    >
                        <img
                            src="https://source.unsplash.com/random/2"
                            className="card-img-top rounded"
                            alt="story posts"
                            style={{ minHeight: 190, objectFit: "cover" }}
                        />
                    </div>
                    {/* s 3 */}
                    <div
                        className="rounded mx-1 story"
                        type="button"
                        style={{ width: "6em", height: 190 }}
                    >
                        <img
                            src="https://source.unsplash.com/random/3"
                            className="card-img-top rounded"
                            alt="story posts"
                            style={{ minHeight: 190, objectFit: "cover" }}
                        />
                    </div>
                    {/* s 4 */}
                    <div
                        className="rounded mx-1 story"
                        type="button"
                        style={{ width: "6em", height: 190 }}
                    >
                        <img
                            src="https://source.unsplash.com/random/4"
                            className="card-img-top rounded"
                            alt="story posts"
                            style={{ minHeight: 190, objectFit: "cover" }}
                        />
                    </div>
                    {/* s 5 */}
                    <div
                        className="d-none d-lg-block rounded mx-1 story"
                        type="button"
                        style={{ width: "6em", height: 190 }}
                    >
                        <img
                            src="https://source.unsplash.com/random/5"
                            className="card-img-top rounded"
                            alt="story posts"
                            style={{ minHeight: 190, objectFit: "cover" }}
                        />
                    </div>
                    {/* s 6 */}
                    <div
                        className="d-none d-lg-block rounded mx-1 story"
                        type="button"
                        style={{ width: "6em", height: 190 }}
                    >
                        <img
                            src="https://source.unsplash.com/random/6"
                            className="card-img-top rounded"
                            alt="story posts"
                            style={{ minHeight: 190, objectFit: "cover" }}
                        />
                    </div>
                    {/* next icon */}
                    <div
                        className="
position-absolute
top-50
start-100
translate-middle
pointer
d-none d-lg-block
"
                    >
                        <i
                            className="
fas
fa-arrow-right
p-3
border
text-muted
bg-white
rounded-circle
"
                        />
                    </div>
                </div>
                {/* create post */}
                <div className="bg-white p-3 mt-3 rounded border shadow">
                    {/* avatar */}
                    <div className="d-flex" type="button">
                        <div className="p-1">
                            <img
                                src="https://source.unsplash.com/collection/happy-people"
                                alt="avatar"
                                className="rounded-circle me-2"
                                style={{ width: 38, height: 38, objectFit: "cover" }}
                            />
                        </div>
                        <input
                            type="text"
                            className="form-control rounded-pill border-0 bg-gray pointer"
                            disabled=""
                            placeholder="What's on your mind, John?"
                            data-bs-toggle="modal"
                            data-bs-target="#createModal"
                        />
                    </div>
                    {/* create modal */}
                    <div
                        className="modal fade"
                        id="createModal"
                        tabIndex={-1}
                        aria-labelledby="createModalLabel"
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
                                        Create Post
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
                                    <div className="my-1 p-1">
                                        <div className="d-flex flex-column">
                                            {/* name */}
                                            <div className="d-flex align-items-center">
                                                <div className="p-2">
                                                    <img
                                                        src="https://source.unsplash.com/collection/happy-people"
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
                                                    <p className="m-0 fw-bold">John</p>
                                                    <select
                                                        className="form-select border-0 bg-gray w-75 fs-7"
                                                        aria-label="Default select example"
                                                    >
                                                        <option selected="" value={1}>
                                                            Public
                                                        </option>
                                                        <option value={2}>Pin To Top</option>
                                                        <option value={3}>Hide</option>
                                                    </select>
                                                </div>
                                            </div>
                                            {/* text */}
                                            <div>
                                                <textarea
                                                    cols={30}
                                                    rows={5}
                                                    className="form-control border-0"
                                                    defaultValue={""}
                                                />
                                            </div>
                                            {/* emoji  */}
                                            <div
                                                className="
d-flex
justify-content-between
align-items-center
"
                                            >
                                                <img
                                                    src="https://www.facebook.com/images/composer/SATP_Aa_square-2x.png"
                                                    className="pointer"
                                                    alt="fb text"
                                                    style={{
                                                        width: 30,
                                                        height: 30,
                                                        objectFit: "cover"
                                                    }}
                                                />
                                                <i className="far fa-laugh-wink fs-5 text-muted pointer" />
                                            </div>
                                            {/* options */}
                                            <div
                                                className="
d-flex
justify-content-between
border border-1 border-light
rounded
p-3
mt-3
"
                                            >
                                                <p className="m-0">Add to your post</p>
                                                <div>
                                                    <i
                                                        className="
    fas
    fa-images
    fs-5
    text-success
    pointer
    mx-1
  "
                                                    />
                                                    <i
                                                        className="
    fas
    fa-user-check
    fs-5
    text-primary
    pointer
    mx-1
  "
                                                    />
                                                    <i
                                                        className="
    far
    fa-smile
    fs-5
    text-warning
    pointer
    mx-1
  "
                                                    />
                                                    <i
                                                        className="
    fas
    fa-map-marker-alt
    fs-5
    text-info
    pointer
    mx-1
  "
                                                    />
                                                    <i
                                                        className="
    fas
    fa-microphone
    fs-5
    text-danger
    pointer
    mx-1
  "
                                                    />
                                                    <i
                                                        className="
    fas
    fa-ellipsis-h
    fs-5
    text-muted
    pointer
    mx-1
  "
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end */}
                                </div>
                                {/* footer */}
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-primary w-100">
                                        Post
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    {/* actions */}
                    <div className="d-flex flex-column flex-lg-row mt-3">
                        {/* a 1 */}
                        <div
                            className="
dropdown-item
rounded
d-flex
align-items-center
justify-content-center
"
                            type="button"
                        >
                            <i className="fas fa-video me-2 text-danger" />
                            <p className="m-0 text-muted">Live Video</p>
                        </div>
                        {/* a 2 */}
                        <div
                            className="
dropdown-item
rounded
d-flex
align-items-center
justify-content-center
"
                            type="button"
                        >
                            <i className="fas fa-photo-video me-2 text-success" />
                            <p className="m-0 text-muted">Photo/Video</p>
                        </div>
                        {/* a 3 */}
                        <div
                            className="
dropdown-item
rounded
d-flex
align-items-center
justify-content-center
"
                            type="button"
                        >
                            <i className="fas fa-smile me-2 text-warning" />
                            <p className="m-0 text-muted">Feeling/Activity</p>
                        </div>
                    </div>
                </div>
                {/* create room */}
                <div
                    className="
bg-white
p-3
mt-3
rounded
border
shadow
d-flex
justify-content-between
position-relative
"
                >
                    {/* btn */}
                    <div>
                        <button className="btn rounded-pill btn-info">
                            <i className="fas fa-video me-3" />
                            Create Room
                        </button>
                    </div>
                    {/* slider mobile */}
                    <div className="d-xxl-none">
                        <img
                            src="https://source.unsplash.com/random/1"
                            alt="avatar"
                            className="rounded-circle me-2"
                            style={{ width: 38, height: 38, objectFit: "cover" }}
                        />
                        <img
                            src="https://source.unsplash.com/random/2"
                            alt="avatar"
                            className="rounded-circle me-2"
                            style={{ width: 38, height: 38, objectFit: "cover" }}
                        />
                        <img
                            src="https://source.unsplash.com/random/3"
                            alt="avatar"
                            className="rounded-circle me-2"
                            style={{ width: 38, height: 38, objectFit: "cover" }}
                        />
                        <img
                            src="https://source.unsplash.com/random/4"
                            alt="avatar"
                            className="rounded-circle me-2"
                            style={{ width: 38, height: 38, objectFit: "cover" }}
                        />
                    </div>
                    {/* slider desktop */}
                    <div className="d-none d-xxl-block" style={{ maxWidth: 450 }}>
                        <div
                            id="carouselExampleControls"
                            className="carousel slide"
                            data-bs-ride="carousel"
                        >
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img
                                        src="https://source.unsplash.com/random/1"
                                        alt="avatar"
                                        className="rounded-circle me-2"
                                        style={{ width: 38, height: 38, objectFit: "cover" }}
                                    />
                                    <img
                                        src="https://source.unsplash.com/random/2"
                                        alt="avatar"
                                        className="rounded-circle me-2"
                                        style={{ width: 38, height: 38, objectFit: "cover" }}
                                    />
                                    <img
                                        src="https://source.unsplash.com/random/3"
                                        alt="avatar"
                                        className="rounded-circle me-2"
                                        style={{ width: 38, height: 38, objectFit: "cover" }}
                                    />
                                    <img
                                        src="https://source.unsplash.com/random/4"
                                        alt="avatar"
                                        className="rounded-circle me-2"
                                        style={{ width: 38, height: 38, objectFit: "cover" }}
                                    />
                                    <img
                                        src="https://source.unsplash.com/random/5"
                                        alt="avatar"
                                        className="rounded-circle me-2"
                                        style={{ width: 38, height: 38, objectFit: "cover" }}
                                    />
                                    <img
                                        src="https://source.unsplash.com/random/6"
                                        alt="avatar"
                                        className="rounded-circle me-2"
                                        style={{ width: 38, height: 38, objectFit: "cover" }}
                                    />
                                    <img
                                        src="https://source.unsplash.com/random/7"
                                        alt="avatar"
                                        className="rounded-circle me-2"
                                        style={{ width: 38, height: 38, objectFit: "cover" }}
                                    />
                                    <img
                                        src="https://source.unsplash.com/random/8"
                                        alt="avatar"
                                        className="rounded-circle me-2"
                                        style={{ width: 38, height: 38, objectFit: "cover" }}
                                    />
                                    <img
                                        src="https://source.unsplash.com/random/9"
                                        alt="avatar"
                                        className="rounded-circle me-2"
                                        style={{ width: 38, height: 38, objectFit: "cover" }}
                                    />
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src="https://source.unsplash.com/random/1"
                                        alt="avatar"
                                        className="rounded-circle me-2"
                                        style={{ width: 38, height: 38, objectFit: "cover" }}
                                    />
                                    <img
                                        src="https://source.unsplash.com/random/2"
                                        alt="avatar"
                                        className="rounded-circle me-2"
                                        style={{ width: 38, height: 38, objectFit: "cover" }}
                                    />
                                    <img
                                        src="https://source.unsplash.com/random/3"
                                        alt="avatar"
                                        className="rounded-circle me-2"
                                        style={{ width: 38, height: 38, objectFit: "cover" }}
                                    />
                                    <img
                                        src="https://source.unsplash.com/random/4"
                                        alt="avatar"
                                        className="rounded-circle me-2"
                                        style={{ width: 38, height: 38, objectFit: "cover" }}
                                    />
                                    <img
                                        src="https://source.unsplash.com/random/5"
                                        alt="avatar"
                                        className="rounded-circle me-2"
                                        style={{ width: 38, height: 38, objectFit: "cover" }}
                                    />
                                    <img
                                        src="https://source.unsplash.com/random/6"
                                        alt="avatar"
                                        className="rounded-circle me-2"
                                        style={{ width: 38, height: 38, objectFit: "cover" }}
                                    />
                                    <img
                                        src="https://source.unsplash.com/random/7"
                                        alt="avatar"
                                        className="rounded-circle me-2"
                                        style={{ width: 38, height: 38, objectFit: "cover" }}
                                    />
                                    <img
                                        src="https://source.unsplash.com/random/8"
                                        alt="avatar"
                                        className="rounded-circle me-2"
                                        style={{ width: 38, height: 38, objectFit: "cover" }}
                                    />
                                    <img
                                        src="https://source.unsplash.com/random/9"
                                        alt="avatar"
                                        className="rounded-circle me-2"
                                        style={{ width: 38, height: 38, objectFit: "cover" }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* slider btn */}
                    <div
                        className="
position-absolute
start-0
top-50
translate-middle
d-none d-xxl-block
"
                        type="button"
                        data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev"
                    >
                        <div
                            className="
p-2
bg-white
border
rounded-circle
d-flex
justify-content-center
align-items-center
pointer
story
"
                            style={{ width: 30, height: 30 }}
                        >
                            <i className="fas fa-chevron-left text-muted" />
                        </div>
                    </div>
                    <div
                        className="
position-absolute
start-100
top-50
translate-middle
d-none d-xxl-block
"
                        type="button"
                        data-bs-target="#carouselExampleControls"
                        data-bs-slide="next"
                    >
                        <div
                            className="
p-2
bg-white
border
rounded-circle
d-flex
justify-content-center
align-items-center
pointer
story
"
                            style={{ width: 30, height: 30 }}
                        >
                            <i className="fas fa-chevron-right text-muted" />
                        </div>
                    </div>
                </div>
                {/* posts */}
                {/* p 1 */}
                {/* <Post></Post> */}
                {/* p 2 */}
                {/* <Post></Post> */}
                {postOfUser?.map((post, index) => (
                    <Post post={post} content={post.content} key={index}></Post>
                    )
                )}
            </div>
        </div>
    );
}

export default Timeline;