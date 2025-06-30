import React, { useState } from "react";
import "./XTable.css";

const initialData = [
  { date: "2022-09-01", views: 100, article: "Article 1" },
  { date: "2023-09-01", views: 100, article: "Article 1" },
  { date: "2023-09-02", views: 150, article: "Article 2" },
  { date: "2023-09-02", views: 120, article: "Article 3" },
  { date: "2020-09-03", views: 200, article: "Article 4" },
];

const XTable = () => {
  const [data, setData] = useState(initialData);

  const sortByDate = () => {
    const sorted = [...data].sort((a, b) => {
      const dateDiff = new Date(b.date) - new Date(a.date);
      if (dateDiff !== 0) return dateDiff;
      return b.views - a.views;
    });
    setData(sorted);
  };

  const sortByViews = () => {
    const sorted = [...data].sort((a, b) => {
      const viewsDiff = b.views - a.views;
      if (viewsDiff !== 0) return viewsDiff;
      return new Date(b.date) - new Date(a.date);
    });
    setData(sorted);
  };

  return (
    <div className="container">
      <h1>Date and Views Table</h1>
      <div className="button-group">
        <button onClick={sortByDate}>Sort by Date</button>
        <button onClick={sortByViews}>Sort by Views</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx}>
              <td>{row.date}</td>
              <td>{row.views}</td>
              <td>{row.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default XTable;
