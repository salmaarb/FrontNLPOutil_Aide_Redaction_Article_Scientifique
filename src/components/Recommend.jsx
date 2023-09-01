import React, { useState } from 'react';
import ExampleBackendQuery from './ExampleBackendQuery'; 

const Recommend = () => {
    const [inputText, setInputText] = useState('');
    const [numRec, setNumRec] = useState('5');
    const [recommendations, setRecommendations] = useState([]);

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const handleNumRecChange = (event) => {
        setNumRec(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch('/get_recommendations/', {
            method: 'POST',
            body: new URLSearchParams({ input_text: inputText, num_rec: numRec }),
        });

        const recommendationsData = await response.json();
        setRecommendations(recommendationsData);
    };

    const replaceLatexWithImages = (text) => {
        return text.replace(/\$(.*?)\$/g, (match, latex) => {
            const encodedLatex = encodeURIComponent(latex);
            const imageUrl = `https://latex.codecogs.com/svg.latex?${encodedLatex}`;
            const latexLength = latex.length;
            return <img src={imageUrl} alt={latex} className="latex-equation" style={{'--latex-length': `${latexLength}`}} />;
        });
    };

    return (
        <div>
            

            <div className="container">
                <section className="webdesigntuts-workshop">
                    <form onSubmit={handleSubmit}>
                        <div className="section-title">Search for Research Papers</div>
                        <div className="description">
                        Stay informed and explore a range of valuable resources to enrich your knowledge and contribute to your academic endeavors by discovering relevant scientific articles and research papers in your field.
            Enter a topic, and our system will then furnish you with a meticulously curated selection of articles related to your chosen topic.                        </div>
                        <input type="search" placeholder="Enter a topic..." name="input_text" onChange={handleInputChange} />
                        <select name="num_rec" id="num_rec" value={numRec} onChange={handleNumRecChange}>
                            <option value="5">5 Results</option>
                            <option value="10">10 Results</option>
                            <option value="15">15 Results</option>
                            <option value="20">20 Results</option>
                        </select>
                        <button>Get Recommendations</button>
                    </form>
                </section>
                <section className="results">
                    <ul className="article-list">
                        {recommendations.map(article => (
                            <li key={article.id} className="article">
                                <div className="article-id">{article.id}</div>
                                <div className="article-title">{article.title}</div>
                                <div className="article-link">
                                    <a href={article.link} target="_blank">{article.link}</a>
                                    <i className="fas fa-external-link-alt fa-xs"></i>
                                </div>
                                <div className="article-authors">{article.authors}</div>
                                <div className="article-categories">Categories: {article.Category}</div>
                                <div className="article-abstract">{replaceLatexWithImages(article.abstract)}</div>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>

            <footer id="footer">
            <p className="text-center">This app was built by <a href="https://3dsmartfactory.csit.ma/" target="_blank">3D Smart Factory</a> interns</p>
            </footer>
            <ExampleBackendQuery />           
      
        </div>
    );
};

export default Recommend;
