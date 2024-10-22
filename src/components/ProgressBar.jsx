import PropTypes from 'prop-types';

export const ProgressBar = ({ currentIndex, totalCards }) => {

    const progressPercentage = ((currentIndex + 1) / totalCards) * 100;
    const formattedPercentage = progressPercentage.toFixed(0);

    return (
        <div className="progress-container">
            <div className='progress-bar-container'>
                <div className="progress-bar" style={{ width: `${formattedPercentage}%` }}>
                    <p className='percentage'>
                        {formattedPercentage}%</p>
                </div>
            </div>

            <div style={{ margin: '0 8px', flexShrink: '0' }}>{currentIndex + 1} of {totalCards}</div>
        </div>
    );
};

ProgressBar.propTypes = {
    currentIndex: PropTypes.number.isRequired,
    totalCards: PropTypes.number,
};