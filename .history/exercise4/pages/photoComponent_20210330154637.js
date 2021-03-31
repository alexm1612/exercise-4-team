export default function Photo({ url = "http://placekitten.com/250/225" }) {
    return (
        <div>
            <img src="http://placekitten.com/250/225"></img>
            <span>
                <h3>View Description</h3>
                <input type="button" value="Click Here" onclick="HandleClick"></input>
            </span>
        </div>)
}

