import style from '../styles/photo.module.css';

export default function Photo({ url = "http://placekitten.com/250/225", text = "does this work lol" }) {
    return (
        <div className={style.container}>
            <img src={url} className={style.photo}></img>
            <p className={style.text}>{text}</p>
            <span className={style.span}>
                <h3 className={style.title}>View Description</h3>
                <input className={style.button} type="button" value="Click Here" onclick="HandleClick"></input>
            </span>
        </div>)
}

