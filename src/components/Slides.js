import React, { useState } from 'react';

function Slides({slides}) {

    const slideLength = slides.length;

    // Delaring state-slide positioning inorder to keep track of changes
    const [slidePostion , setSlidePosition] = useState(0);

    // Declaring inital slide position once the restart button is clicked
    const restartButton = () => {
        setSlidePosition(0)
    }

    // Declaring next slide navigation an a click on the next button
    const nextButton = () => {
        if (slidePostion === length - 1 ) {
            return setSlidePosition(slidePostion + 1)
        }
    }

    // Declaring previous slide navigation an a click on the previous button
    const previousButton = () => {
        if (slidePostion === length - 1 ) {
            return setSlidePosition(slidePostion - 1)
        }
    }
 
    return (
        <div>
            <div id="navigation" className="text-center">
                <button data-testid="button-restart" className="small outlined">Restart</button>
                <button data-testid="button-prev" className="small">Prev</button>
                <button data-testid="button-next" className="small">Next</button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">Slide Title Here</h1>
                <p data-testid="text">Slide Text Here</p>
            </div>
        </div>
    );

}

export default Slides;
