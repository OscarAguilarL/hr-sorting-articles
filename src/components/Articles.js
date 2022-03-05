import React from 'react';

function Articles({ articles }) {
    return (
        <div className="card w-50 mx-auto">
            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Upvotes</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>
                {articles.map(el => (
                    <tr data-testid="article" key={el.date}>
                        <td data-testid="article-title">{el.title}</td>
                        <td data-testid="article-upvotes">{el.upvotes}</td>
                        <td data-testid="article-date">{el.date}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );

}

export default Articles;
