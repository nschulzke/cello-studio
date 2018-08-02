import * as React from 'react';
import './Files.css';

interface Category {
  display: string;
  files: Array<{ path?: string, url?: string, display: string }>;
}

const categories: Category[] = [
  {
    display: 'New Students',
    files: [
      { path: 'Studio Policy.pdf', display: 'Studio Policy' },
      { path: 'Studio FAQ.pdf', display: 'Studio FAQ' },
      { path: 'Scheduling Survey Fall 2018.pdf', display: 'Scheduling Survey' },
      { path: 'Grandfathered Scheduling Survey Fall 2018.pdf', display: 'Grandfathered Scheduling Survey' },
      { path: "Practice Chart Example.pdf", display: "Practice Chart Example" },
      { path: "Observation Form.pdf", display: "Observation Form" },
    ],
  },
  {
    display: 'Charts and Challenges',
    files: [
      { path: '100 Chart.pdf', display: '100 Chart' },
      { path: '100 Days in a Row.pdf', display: '100 Days in a Row' },
      { path: '100 Gold Coins.pdf', display: '100 Gold Coins' },
      { path: "Squinky Bowhold Challenge.pdf", display: "Squinky Bowhold Challenge" },
      { path: "Scale Trail Challenge.pdf", display: "Scale Trail Challenge" },
      { path: "Super Student Award.pdf", display: "Super Student Award" },
    ]
  },
  {
    display: 'Book 2',
    files: [
      { path: "Hoyt's Rules of Shifting.pdf", display: "Hoyt's Rules of Shifting" },
    ]
  },
  {
    display: 'Sheet Music',
    files: [
      { path: 'Viola Pre-twinkle stuff.pdf', display: 'Viola Pre-twinkle Stuff' },
      { path: "Strutting over the Strings by Gout.pdf", display: "Strutting over the Strings by Gout" },
      { path: "Chanson de Matin by Elgar.pdf", display: "Chanson de Martin by Elgar" },
      { path: "Tango by Seiber.pdf", display: "Tango by Seiber" },
      { path: "C Major.pdf", display: "C Major Three Octaves" },
      { path: "D Major.pdf", display: "D Major Three Octaves" },
      { path: "G Major.pdf", display: "G Major Three Octaves" },
    ]
  },
  {
    display: 'Additional Readings',
    files: [
      { path: "Time Managment Problem.pdf", display: "Time Managment Problem" },
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
