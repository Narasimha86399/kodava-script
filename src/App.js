// File: src/App.js
import React, { useState } from 'react';
import './App.css';
import { FaDownload, FaGithub, FaInfoCircle } from 'react-icons/fa';

function App() {
  const [downloadingFile, setDownloadingFile] = useState(null);

  const handleDownload = (fileType) => {
    setDownloadingFile(fileType);

    // Set the appropriate file URL based on the file type
    let fileUrl, fileName;

    if (fileType === 'thirke') {
      fileUrl = process.env.PUBLIC_URL + '/thirke_script.zip';
      fileName = 'thirke_script.zip';
    } else if (fileType === 'muttanna') {
      fileUrl = process.env.PUBLIC_URL + '/muttanna_script.zip';
      fileName = 'muttanna_script.zip';
    }

    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Reset button state after download starts
    setTimeout(() => setDownloadingFile(null), 1000);
  };

  return (
    <div className="app">
      <header>
        <h1>Kodava Script</h1>
        <p className="subtitle">Preserve and share the cultural heritage of Kodava language</p>
      </header>

      <main>
        <div className="download-card">
          <div className="file-info">
            <FaInfoCircle className="info-icon" />
            <div>
              <h2>Thirke Script Package</h2>
              <p>Complete set of Kodava language script files and documentation</p>
              <div className="file-meta">
                <span>Version 1.0</span>
                <span>32 KB</span>
              </div>
            </div>
          </div>

          <button
            className={`download-button ${downloadingFile === 'thirke' ? 'downloading' : ''}`}
            onClick={() => handleDownload('thirke')}
            disabled={downloadingFile === 'thirke'}
          >
            {downloadingFile === 'thirke' ? 'Downloading...' : (
              <>
                <FaDownload /> Download Thirke Script
              </>
            )}
          </button>
        </div>

        <div className="download-card">
          <div className="file-info">
            <FaInfoCircle className="info-icon" />
            <div>
              <h2>Muttanna Script Package</h2>
              <p>Complete set of Kodava language script files and documentation</p>
              <div className="file-meta">
                <span>Version 1.0</span>
                <span>17 KB</span>
              </div>
            </div>
          </div>

          <button
            className={`download-button ${downloadingFile === 'muttanna' ? 'downloading' : ''}`}
            onClick={() => handleDownload('muttanna')}
            disabled={downloadingFile === 'muttanna'}
          >
            {downloadingFile === 'muttanna' ? 'Downloading...' : (
              <>
                <FaDownload /> Download Muttanna Script
              </>
            )}
          </button>
        </div>

        <section className="about-section">
          <h2>About Kodava Script</h2>
          <p>The Kodava script is a writing system designed for the Kodava language, spoken primarily in Kodagu (Coorg) region of Karnataka, India. This package contains the complete script set, usage guidelines, and integration tools.</p>

          <h3>Package Contents</h3>
          <ul>
            <li>Full character set in multiple formats</li>
            <li>Detailed documentation and usage guide</li>
            <li>Keyboard layout configuration</li>
            <li>Font files for digital implementation</li>
          </ul>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Kodava Script Project</p>
        <a href="https://github.com/your-username/kodava-script" target="_blank" rel="noopener noreferrer">
          <FaGithub /> View on GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;