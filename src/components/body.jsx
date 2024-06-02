import React, { useState } from 'react';
import memeData from '../data.js';

export default function Body() {
    const [text, setText] = useState({
        topText: '',
        bottomText: ''
    });

    const [url, setUrl] = useState('');

    function handleChange(event) {
        
        const { name, value } = event.target; 
        setText(prevText => ({
            ...prevText,
            [name]: value
        }));
    }

    function getImage() {
        text.bottomText='';
        text.topText='';
        const imageArr = memeData.data.memes;
        const randomNum = Math.floor(Math.random() * imageArr.length);
        const newUrl = imageArr[randomNum].url;
        setUrl(newUrl);
    }
   
    return (
        <div>
            <form>
                <input 
                    type="text" 
                    placeholder='Top text' 
                    name='topText' 
                    value={text.topText} 
                    onChange={handleChange} 
                />
                <input 
                    type="text" 
                    placeholder='Bottom text' 
                    name='bottomText'
                    value={text.bottomText} 
                    onChange={handleChange} 
                />
            </form>
            <div>
                <button type="button" onClick={getImage}>Get a random image</button>
            </div>
            {url && (
                <div className="meme">
                    <img src={url} alt="Random Meme" />
                    <h1 className='meme--text top'>{text.topText}</h1>
                    <h1 className='meme--text bottom'>{text.bottomText}</h1>
                </div>
            )}
        </div>
    );
}
