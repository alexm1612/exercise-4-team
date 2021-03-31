import style from '../styles/photo.module.css';

export default function Photo({ url = "http://placekitten.com/250/225" }) {
    return (
        <div className={style.container}>
            <img src={url} className={style.photo}></img>
            <span>
                <h3>View Description</h3>
                <input type="button" value="Click Here" onclick="HandleClick"></input>
            </span>
        </div>)
}

