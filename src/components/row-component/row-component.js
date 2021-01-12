import React from 'react';

const Row = ({ leftElem, rightElem }) => {
    return (
        <div className="row">
            <div className="col-6">
                {leftElem}
            </div>
            <div className="col-6">
                {rightElem}
            </div>
        </div>
    );
}

export default Row;