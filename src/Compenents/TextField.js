import React, { useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';

const TextField = () => {
    const [textInput, setTextInput] = useState('Please enter your text');
    const { speak } = useSpeechSynthesis();
    return (
        <div className='my-16'>
            <h4 className='text-blue-700 text-2xl font-medium'>Enter your text</h4>
            <textarea type="text" onChange={event=> setTextInput(event.target.value)} className="shadow appearance-none border rounded w-[450px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
            <br/>
            <button className="" onClick={() => speak({text: textInput})}>
                <img className='w-16' src="https://icon-library.com/images/transparent-speaker-icon/transparent-speaker-icon-11.jpg" alt="Speak"></img>
            </button>
        </div>
    );
};

export default TextField;