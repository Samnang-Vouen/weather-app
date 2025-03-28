
export default function Sky({skyCondition}) {
    return (
        <div className="weather">
            <img src={skyCondition.icon} alt="sunset"></img>
            <p><strong>{skyCondition.description}</strong></p>
        </div>
    );
}