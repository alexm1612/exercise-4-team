import style from '../styles/poll.module.css';

export default function Poll({title ="POLL", text="Do you prefer this or that?"}) {
    return (
        <div className={style.container}>
            <span className={style.span}>
            <h3 className={style.title}></h3>
            <p className={style.text}>{text}</p>
            <input className={style.button} type="button" value="This" ></input>
            <input className={style.button} type="button" value="That" ></input>
            </span>
        </div>
    )
}