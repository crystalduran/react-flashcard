import PropTypes from 'prop-types';

export const FlashCard = ({ question, answer, isFlipped, onFlip }) => {
  return (
    <div className="flashcard" onClick={onFlip}>
      {isFlipped ? (
        <div className="answer">{answer}</div>
      ) : (
        <div className="question">{question}</div>
      )}
    </div>
  );
};

FlashCard.propTypes = {
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
    isFlipped: PropTypes.bool.isRequired,
    onFlip: PropTypes.func.isRequired,

};
