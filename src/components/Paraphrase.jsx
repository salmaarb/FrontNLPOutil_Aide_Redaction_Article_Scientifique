
import React, { useState } from 'react';
import ExampleBackendQuery from './ExampleBackendQuery'; 
const Paraphrase = () => {
    const [inputText, setInputText] = useState('');
    const [paraphrasedText, setParaphrasedText] = useState('');
    const [characterCount, setCharacterCount] = useState(0);
    const limit = 1500;

    const handleInputChange = (event) => {
        const newText = event.target.value;
        setInputText(newText);
        setCharacterCount(newText.length);

        if (newText.length > limit) {
            event.target.style.borderColor = "#ff2851";
        } else {
            event.target.style.borderColor = "#C63DFF";
        }
    };

    const handleParaphrase = () => {
        // Paraphrasing logic goes here
        const paraphrasedResult = "Paraphrased text goes here.";
        setParaphrasedText(paraphrasedResult);
    };

    const handleCopyToClipboard = () => {
        const outputElement = document.getElementById("rewritten-output");
        const range = document.createRange();
        range.selectNode(outputElement);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);

        try {
            const success = document.execCommand("copy");
            const message = success ? "Copied to clipboard!" : "Failed to copy.";
            alert(message);
        } catch (error) {
            console.error("Copy failed:", error);
        }

        window.getSelection().removeAllRanges();
    };

    return (
        <>
        
        <div>
         

            <section className="paraphrase-section">
                <section className="content">
                    <textarea
                        id="my-text"
                        placeholder="Type your text here..."
                        value={inputText}
                        onChange={handleInputChange}
                    ></textarea>
                    <p id="result">{characterCount}/{limit}</p>
                    <button id="paraphrase-btn" onClick={handleParaphrase}>Paraphrase</button>
                </section>

                <section className="output">
                    Rewritten Text
                    <div className="boxSizing-borderBox" id="rewritten-output" placeholder="Waiting...">
                        {paraphrasedText}
                    </div>
                    <button id="copy-btn" title="Copy to Clipboard" onClick={handleCopyToClipboard}>
                        <i className="fas fa-copy"></i> Copy
                    </button>
                </section>
            </section>

            <footer id="footer">
         <p className="text-center">This app was built by <a href="https://3dsmartfactory.csit.ma/" target="_blank">3D Smart Factory</a> interns</p>
   </footer> 
<ExampleBackendQuery/>
        </div></>
    );
};

export default Paraphrase;
