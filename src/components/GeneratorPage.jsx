import React, { useState, useRef } from 'react';

import ExampleBackendQuery from './ExampleBackendQuery'; 


const GeneratorPage = () => {
    const [generatedContent, setGeneratedContent] = useState('Generated Output');
    const [selectedOption, setSelectedOption] = useState('Abstract');
    const [inputValue, setInputValue] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Track dropdown state
    const editorRef = useRef(null);
  
    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };
  
    const fetchGeneratedContent = async (prompt, type) => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/${type}/${prompt}`);
        const data = await response.json();
        return data.data;
      } catch (error) {
        console.error('Error fetching generated content:', error);
        return '';
      }
    };
  
    const updateGeneratedContent = async () => {
      if (inputValue) {
        const generatedContent = await fetchGeneratedContent(inputValue, selectedOption.toLowerCase());
        setGeneratedContent(generatedContent);
      } else {
        setGeneratedContent('Generated Output');
      }
    };
  
    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown state
    };
  
    const handleOptionChange = (option) => {
      setSelectedOption(option);
      setIsDropdownOpen(false); // Close the dropdown when an option is selected
    };
    
  
    const handleCopyToClipboard = () => {
      editorRef.current.select();
      document.execCommand('copy');
      alert('Copied to clipboard!');
    };


    return (
        <>
       
        <div className="wrapper">
            <div className="title">Scientific Article Generator</div>
            <div className="description">
            Generate specific sections of your research paper. Start by selecting which part of the paper you want to generate using the dropdown below. For example, you can request an abstract by providing the title of your research paper, such as <i>"Can you give me an abstract for my research paper with the Title: GLA-GCN: Global-local Adaptive Graph Convolutional Network for 3D Human?"</i>
            </div>
            <div className="search_box">
            <div className="dropdown">
            <select
              className="dropdown-select" 
              value={selectedOption}
              onChange={handleOptionChange}
            >
              <option value="Abstract"  onClick={() => handleOptionChange('Abstract')} id="abstract-option">Abstract</option>
              <option value="Introduction"  onClick={() => handleOptionChange('Introduction')} id="introduction-option">Introduction</option>
              <option value="Conclusion"  onClick={() => handleOptionChange('Conclusion')} id="conclusion-option">Conclusion</option>
              <option value="Sections"  onClick={() => handleOptionChange('Sections')} id="abstract-option">Sections</option>
            </select>
        </div>
        <div className="search_field">
            <input
              type="text"
              className="input"
              placeholder="Enter the title of your research paper..."
              value={inputValue}
              onChange={handleInputChange}
            />
          </div>
            
            
            
            
                     </div>
                     <button className="generate_button" onClick={updateGeneratedContent}>
          Generate
        </button>
            <div className="container">
                <div className="generated_abstract" id="generated-abstract">
                    {generatedAbstract}
                </div>
                <div id="editparent">
                <div id="editControls">
                <div className="btn-group">
                    <a className="btn btn-xs btn-default" data-role="undo" href="#" title="Undo"><i className="fa fa-undo"></i></a>
                    <a className="btn btn-xs btn-default" data-role="redo" href="#" title="Redo"><i className="fa fa-repeat"></i></a>
                </div>
                <div className="btn-group">
                    <a className="btn btn-xs btn-default" data-role="bold" href="#" title="Bold"><i className="fa fa-bold"></i></a>
                    <a className="btn btn-xs btn-default" data-role="italic" href="#" title="Italic"><i className="fa fa-italic"></i></a>
                    <a className="btn btn-xs btn-default" data-role="underline" href="#" title="Underline"><i className="fa fa-underline"></i></a>
                    <a className="btn btn-xs btn-default" data-role="strikeThrough" href="#" title="Strikethrough"><i className="fa fa-strikethrough"></i></a>
                </div>
                <div className="btn-group">
                    <a className="btn btn-xs btn-default" data-role="indent" href="#" title="Blockquote"><i className="fa fa-indent"></i></a>
                    <a className="btn btn-xs btn-default" data-role="insertUnorderedList" href="#" title="Unordered List"><i className="fa fa-list-ul"></i></a>
                    <a className="btn btn-xs btn-default" data-role="insertOrderedList" href="#" title="Ordered List"><i className="fa fa-list-ol"></i></a>
                </div>
                <div className="btn-group">
                    <a className="btn btn-xs btn-default" data-role="h1" href="#" title="Heading 1"><i className="fa fa-header"></i><sup>1</sup></a>
                    <a className="btn btn-xs btn-default" data-role="h2" href="#" title="Heading 2"><i className="fa fa-header"></i><sup>2</sup></a>
                    <a className="btn btn-xs btn-default" data-role="h3" href="#" title="Heading 3"><i className="fa fa-header"></i><sup>3</sup></a>
                    <a className="btn btn-xs btn-default" data-role="p" href="#" title="Paragraph"><i className="fa fa-paragraph"></i></a>
                </div>
                <div className="btn-group">
                    <a className="btn btn-xs btn-default" data-role="copy" href="#" title="Copy to Clipboard" id="copy-btn"><i className="fa fa-copy"></i></a>
                </div>
            </div>                    <div
                        id="editor"
                        contentEditable
                        ref={editorRef}
                    ></div>
                    <textarea
                        name="ticketDesc"
                        id="editorCopy"
                        required="required"
                        style={{ display: 'none' }}
                    ></textarea>
                </div>
            </div>
            

            <footer id="footer">
            <p className="text-center">This app was built by <a href="https://3dsmartfactory.csit.ma/" target="_blank">3D Smart Factory</a> interns</p>
            </footer>  
     <ExampleBackendQuery />           

        </div>
</>
    );
}

export default GeneratorPage;
