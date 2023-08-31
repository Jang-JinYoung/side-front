import React, { useState } from 'react';

interface ITextarea {
    style?: string;
    value: string;
    name: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    maxLength?: number;
    textareaSize?: {
        width: string;
        height: string;
    }
}

const Textarea = ({ style, value, name, onChange, maxLength, textareaSize }: ITextarea) => {

    const [text, setText] = useState<string>("");



    return (
        <div className='mt-10' style={{ border: "1px solid #adafaa" }}>
            <textarea
                className={`mg-10 ${style ?? ''}`}
                name={name}
                value={text}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value)}
                maxLength={maxLength}
                style={textareaSize} />
        </div>
    )
};

export default Textarea;