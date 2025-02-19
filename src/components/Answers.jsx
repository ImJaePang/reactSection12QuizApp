export default function Answers() {
    return (
        <ul id="answers">
            {shuffledAnswers.current.map((answer) => {
                const isSelected =
                    userAnswers[userAnswers.length - 1] === answer;
                let cssClass = "";
                if (answerState === "answered" && isSelected) {
                    cssClass = "selected";
                }

                if (
                    (answerState === "correct" || answerState === "wrong") &&
                    isSelected
                ) {
                    cssClass = answerState;
                }

                return (
                    <li key={answer} className="answer">
                        <button
                            onClick={() => handleSelectAnswer(answer)}
                            className={cssClass}
                        >
                            {answer}
                        </button>
                    </li>
                );
            })}
        </ul>
    );
}
