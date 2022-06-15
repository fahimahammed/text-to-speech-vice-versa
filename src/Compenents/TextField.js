import React, { useState } from 'react';
import { useSpeechRecognition, useSpeechSynthesis } from 'react-speech-kit';

const TextField = () => {
    const [textInput, setTextInput] = useState('Please enter your text');

    const { speak } = useSpeechSynthesis();
    const { listen, listening, stop } = useSpeechRecognition({
        onResult: (result) => {
            setTextInput(result);
        }
    })

    const handleSpeak = async () => {
        await speak({ text: textInput })
    }

    return (
        <div className='my-16 flex lg:flex-row md:flex-row flex-col gap-10 justify-center'>
            <div className='lg:w-[500px] w-[320px] shadow-xl p-8'>
                <h4 className='text-blue-700 text-2xl font-medium py-3'>Enter your text</h4>
                <textarea type="text" onChange={event => setTextInput(event.target.value)} className="shadow appearance-none border rounded lg:w-[450px] w-[300px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                <br />
                <button className="" onClick={handleSpeak}>
                    <img className='w-16' src='https://icon-library.com/images/transparent-speaker-icon/transparent-speaker-icon-11.jpg' alt="Speak"></img>
                </button>
            </div>

            <div className='lg:w-[500px] w-[320px] shadow-xl p-8'>
                <h4 className='text-blue-700 text-2xl font-medium py-3'>Voice Input</h4>
                <button onMouseDown={listen} onMouseUp={stop}>
                    <img className="w-16"  src="https://icones.pro/wp-content/uploads/2021/12/icone-de-microphone-bleue.png" alt=""/>
                </button>
                {
                    listening && <p className="font-bold py-2">I am listening.</p>
                }
                <textarea type="text" value={textInput} className="shadow appearance-none border rounded lg:w-[450px] w-[300px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>

        </div>
    );
};

export default TextField;