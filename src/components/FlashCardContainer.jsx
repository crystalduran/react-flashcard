import { useState } from 'react';
import flashcardsData from '../data/data-flashcards.json';
import { ProgressBar } from './ProgressBar';
import { FlashCard } from './FlashCard';

export const FlashCardContainer = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);

    const handleNext = () => {
        // here, prevIndex is the current value of currentIndex. this function within this set function is called the updater function. It takes the pending state (prevIndex) and calculates the next state from it.
        setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcardsData.length);
        setIsFlipped(false);  // resets the flipped state
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + flashcardsData.length) % flashcardsData.length);
        setIsFlipped(false);  // resets the flipped state
    };

    // by using prev, it is ensured that the status is updated correctly, even when you make consecutive quick clicks.
    const handleFlip = () => {
        setIsFlipped((prev) => !prev);
    };

    return (
        <>
            {/* Componente ProgressBar */}
            <ProgressBar currentIndex={currentIndex} totalCards={flashcardsData.length} />
            <div className='flashcard-section'>
                <FlashCard
                    question={flashcardsData[currentIndex].question}
                    answer={flashcardsData[currentIndex].answer}
                    isFlipped={isFlipped}
                    onFlip={handleFlip}
                />

                <div className="controls">
                    <div className='previous-next' onClick={handlePrevious}>
                        <p>&lt; Previous</p>
                    </div>
                    <button className="show-hide-answer" onClick={handleFlip}>
                        {
                            isFlipped ? ("Hide Answer") : ("Show Answer")
                        }
                    </button>
                    <div className='previous-next' onClick={handleNext}>
                        <p>Next &gt;</p>
                    </div>

                </div>
            </div>
        </>
    );
};

