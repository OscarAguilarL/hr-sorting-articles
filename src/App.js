import React, { useState, useEffect } from 'react';
import './App.css';
import 'h8k-components';

import Articles from './components/Articles';

const title = 'Sorting Articles';

function App({ articles }) {
    const [sortedArticles, setSortedArticles] = useState(articles);

    useEffect(() => {
        const newArticles = [];
        Object.assign(newArticles, sortedArticles);
        setSortedArticles(newArticles.sort((a, b) => a.upvotes - b.upvotes).reverse());
    }, [articles]);

    const handleUpvoted = () => {
        const newArticles = [];
        Object.assign(newArticles, sortedArticles);
        setSortedArticles(
            newArticles.sort((a, b) => a.upvotes - b.upvotes).reverse()
        );
    };

    const handleRecent = () => {
        const newArticles = [];
        Object.assign(newArticles, sortedArticles);
        setSortedArticles(
            newArticles
                .sort((a, b) => new Date(a.date) - new Date(b.date))
                .reverse()
        );
    };

    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light">
                    Sort By
                </label>
                <button
                    data-testid="most-upvoted-link"
                    className="small"
                    onClick={handleUpvoted}
                >
                    Most Upvoted
                </button>
                <button
                    data-testid="most-recent-link"
                    className="small"
                    onClick={handleRecent}
                >
                    Most Recent
                </button>
            </div>
            <Articles articles={sortedArticles} />
        </div>
    );
}

export default App;
