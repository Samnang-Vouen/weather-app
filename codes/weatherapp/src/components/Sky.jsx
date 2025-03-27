import clear from "../assets/clear.png";

export default function Sky({skyCondition}) {
    return (
        <div className="weather">
            <img src={clear} alt="sunset"></img>
            <p><strong>{skyCondition.description}</strong></p>
        </div>
    );
}