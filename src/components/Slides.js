import React, { useState } from 'react';

function Slides({slides}) {

    const slideLength = slides.length;

    // Delaring state-slide positioning inorder to keep track of changes
    const [slidePostion , setSlidePosition] = useState(0);

    // Declaring inital slide position once the restart button is clicked
    const restartButton = () => {
        setSlidePosition(0)
    };

    // Declaring next slide navigation an a click on the next button
    const nextButton = () => {
        setSlidePosition(slidePostion + 1)
    };

    // Declaring previous slide navigation an a click on the previous button
    const previousButton = () => {
        setSlidePosition(slidePostion - 1)
    }
 
    return (
        <div>
            <div id="navigation" className="text-center">
                <button data-testid="button-restart" className="small outlined" onClick={restartButton} disabled={slidePostion === 0}>Restart</button>
                <button data-testid="button-prev" className="small" onClick={previousButton} disabled={slidePostion === 0}>Prev</button>
                <button data-testid="button-next" className="small"onClick={nextButton} disabled={slidePostion === slideLength - 1} >Next</button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{slides[slidePostion]?.title}</h1>
                <p data-testid="text">{slides[slidePostion]?.text}</p>
            </div>
        </div>
    );

}

export default Slides;
