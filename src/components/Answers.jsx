export default function Answers({ answers, selectedAnswer, answerState }) {
    // const shuffledAnswers = useRef();

    // if (!shuffledAnswers.current) {
    //     shuffledAnswers.current = [...QUESTIONS[activeQuestionIndex].answers];
    //     shuffledAnswers.current.sort(() => Math.random() - 0.5);
    // }

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
