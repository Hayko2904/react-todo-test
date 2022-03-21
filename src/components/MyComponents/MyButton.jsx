import React, {useEffect} from 'react';

const MyButton = ({name, hundleClick}) => {

    return (
        <div className={'inline'}>
            <button className="button"
            onClick={hundleClick}>
                {name}
            </button>
        </div>
    );
};

export default MyButton;