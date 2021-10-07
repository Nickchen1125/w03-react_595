function Modal_95(props) {

    return (
        <div class="modal">
            <p>{props.text}</p>
            <button class="btn btn--alt" onclick={props.onclick}>Cancel</button>
            <button class="btn" onclick={props.onclick}>Confirm</button>
        </div>
    )
}
export default Modal_95;