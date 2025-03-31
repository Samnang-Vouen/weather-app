
export default function Sky({skyCondition}) {
    return (
        <div className="weather">
            <img src={skyCondition.icon}></img>
            <p><strong>{skyCondition.description || "current weather"}</strong></p>
        </div>
    );
}