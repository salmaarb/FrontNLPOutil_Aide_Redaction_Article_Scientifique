import React, { useState, useRef } from 'react';

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

  const handleOptionChange = (event) => {
    const selectedOption = event.target.value;
    setSelectedOption(selectedOption);
    console.log(selectedOption);
    setIsDropdownOpen(false); // Close the dropdown when an option is selected
  };
  
  const handleFormatClick = (format) => {
    document.execCommand(format, false, null);
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
        <div className="dropdowns">
        <select
  className="dropdown-select" 
  value={selectedOption}
  onChange={handleOptionChange}
>
  <option value="Abstract">Abstract</option>
  <option value="Introduction">Introduction</option>
  <option value="Conclusion">Conclusion</option>
  <option value="Sections">Sections</option>
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
      
          <div id="editparent">
           

<div id="editControls">
  <div className="btn-group">
    <button
      className="btn btn-xs btn-default"
      onClick={() => handleFormatClick('undo')}
      title="Undo"
    >
      <i className="fa fa-undo"></i>
    </button>
    <button
      className="btn btn-xs btn-default"
      onClick={() => handleFormatClick('redo')}
      title="Redo"
    >
      <i className="fa fa-repeat"></i>
    </button>
  </div>
  <div className="btn-group">
    <button
      className="btn btn-xs btn-default"
      onClick={() => handleFormatClick('bold')}
      title="Bold"
    >
      <i className="fa fa-bold"></i>
    </button>
    <button
      className="btn btn-xs btn-default"
      onClick={() => handleFormatClick('italic')}
      title="Italic"
    >
      <i className="fa fa-italic"></i>
    </button>
    <button
      className="btn btn-xs btn-default"
      onClick={() => handleFormatClick('underline')}
      title="Underline"
    >
      <i className="fa fa-underline"></i>
    </button>
    <button
      className="btn btn-xs btn-default"
      onClick={() => handleFormatClick('strikeThrough')}
      title="Strikethrough"
    >
      <i className="fa fa-strikethrough"></i>
    </button>
    <button
      className="btn btn-xs btn-default"
      onClick={() => handleFormatClick('subscript')}
      title="Subscript"
    >
      <i className="fa fa-subscript"></i>
    </button>
    <button
      className="btn btn-xs btn-default"
      onClick={() => handleFormatClick('superscript')}
      title="Superscript"
    >
      <i className="fa fa-superscript"></i>
    </button>
  </div>
  <div className="btn-group">
    <button
      className="btn btn-xs btn-default"
      onClick={() => handleFormatClick('indent')}
      title="Blockquote"
    >
      <i className="fa fa-indent"></i>
    </button>
    <button
      className="btn btn-xs btn-default"
      onClick={() => handleFormatClick('insertUnorderedList')}
      title="Unordered List"
    >
      <i className="fa fa-list-ul"></i>
    </button>
    <button
      className="btn btn-xs btn-default"
      onClick={() => handleFormatClick('insertOrderedList')}
      title="Ordered List"
    >
      <i className="fa fa-list-ol"></i>
    </button>
    <button
      className="btn btn-xs btn-default"
      onClick={() => handleFormatClick('justifyLeft')}
      title="Align Left"
    >
      <i className="fa fa-align-left"></i>
    </button>
    <button
      className="btn btn-xs btn-default"
      onClick={() => handleFormatClick('justifyCenter')}
      title="Align Center"
    >
      <i className="fa fa-align-center"></i>
    </button>
    <button
      className="btn btn-xs btn-default"
      onClick={() => handleFormatClick('justifyRight')}
      title="Align Right"
    >
      <i className="fa fa-align-right"></i>
    </button>
  </div>
</div>


            <div
              id="editor"
              contentEditable
              ref={editorRef}
            >   {generatedContent}</div>
            <textarea
              name="ticketDesc"
              id="generated-content"              required="required"
              style={{ display: 'none' }}
            ></textarea>
          </div>
        </div>

        <footer id="footer">
          <p className="text-center">This app was built by <a href="https://3dsmartfactory.csit.ma/" target="_blank" rel="noopener noreferrer">3D Smart Factory</a> interns</p>
        </footer>
      </div>
    </>
  );
};

export default GeneratorPage;