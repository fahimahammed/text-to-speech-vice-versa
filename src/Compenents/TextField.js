import React from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';

const TextField = () => {
    const { speak } = useSpeechSynthesis();
    return (
        <div>
            <button className="btn btn-primary" onClick={() => speak({text: "Fahim Ahammed Firoz"})}>Click</button>
        </div>
    );
};

export default TextField;