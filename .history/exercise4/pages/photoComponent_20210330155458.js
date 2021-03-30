import style from '../styles/photo.module.css';

export default function Photo({ url = "http://placekitten.com/250/225" }) {
    return (
        <div id="photo-container">
            <img id="photo" src={url} style={{
                width: 250,
                height: 225
            }}></img>
            <span>
                <h3>View Description</h3>
                <input type="button" value="Click Here" onclick="HandleClick"></input>
            </span>
        </div>)
}

