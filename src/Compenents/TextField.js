import React from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';

const TextField = () => {
    const { speak } = useSpeechSynthesis();
    return (
        <div className='my-16'>
            <textarea type="text" className="shadow appearance-none border rounded w-[450px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
            <br/>
            <button className="" onClick={() => speak({text: "Fahim Ahammed Firoz"})}>
                <img className='w-16' src="https://icon-library.com/images/transparent-speaker-icon/transparent-speaker-icon-11.jpg" alt="Speak"></img>
            </button>
        </div>
    );
};

export default TextField;