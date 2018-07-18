import * as React from 'react';
import './Files.css';

const categories = [
  {
    display: 'New Students',
    files: [
      { path: 'Studio FAQ.pdf', display: 'Studio FAQ' },
      { path: 'Studio Policy.pdf', display: 'Studio Policy' },
      { url: 'https://docs.google.com/document/d/', display: 'Test' },
    ],
  },
  {
    display: 'Pre-Twinkle',
    files: [
      { path: "Squinky Bowhold Challenge.pdf", display: "Squinky Bowhold Challenge" },
    ]
  },
  {
    display: 'Book 2',
    files: [
      { path: "Hoyt's Rules of Shifting.pdf", display: "Hoyt's Rules of Shifting" },
      { path: "Strutting over the Strings by Gout.pdf", display: "Strutting over the Strings by Gout" },
    ]
  },
  {
    display: 'Charts and Challenges',
    files: [
      { path: '100 Chart.pdf', display: '100 Chart' },
      { path: '100 Days in a Row.pdf', display: '100 Days in a Row' },
      { path: '100 Gold Coins.pdf', display: '100 Gold Coins' },
    ]
  },
  {
    display: 'Miscellaneous',
    files: [
      { path: 'Scheduling Survey.pdf', display: 'Scheduling Survey' },
    ]
  },
]

const Files = () => (
  <div className="Files">
    {categories.map(category => (
      <div>
        <h2>{category.display}</h2>
        <ul>
          {category.files.map(file => (
            <li><a href={file.path ? `/files/${file.path}` : file.url} target="_blank">{file.display}</a></li>
          ))}
        </ul>
      </div>
    ))}
  </div>
)

export default Files
