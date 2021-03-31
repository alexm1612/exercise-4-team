import style from '../styles/photo.module.css';

export default function Photo({ url = "http://placekitten.com/250/250", text = "Sit in box what a cat-ass-trophy! try to hold own back foot to clean it but foot reflexively kicks you in face, go into a rage and bite own foot, hard for jump off balcony, onto stranger's head i will ruin the couch with my claws for car rides are evil. In the middle of the night i crawl onto your chest and purr gently to help you sleep purr for no reason, yet hunt by meowing loudly at 5am next to human slave food dispenser and find empty spot in cupboard and sleep all day i like fish.", catName = "Cat Name" }) {
    return (
        <div className={style.container}>
            <img src={url} className={style.photo}></img>
            <p className={style.text}>{text}</p>
            <span className={style.span}>
                <h3 className={style.title}>{catName}</h3>
                <input className={style.button} type="button" value="About Me" onClick={HandleClick()}></input>
            </span>
        </div>
    )
    var img = document.className(photo);
    function HandleClick() {
        if (className = { style.photo }.style.opacity == "100%") {
            img.style.opacity = "20%"
        } else {
            img.style.opacity = "100%"
        }
    }
}

