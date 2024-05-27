import "./styles.css";

export default function index({ title, description }) {
    return (
        <>
            <div className="item-list">
                <strong>{title}</strong>
                <p>{description}</p>
                <hr />
            </div>
        </>
    );
}
