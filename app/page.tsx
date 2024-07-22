'use client'
import { useState, FC } from 'react';
import { FaEnvelope, FaInstagram, FaLinkedin, FaArrowLeft, FaTimes } from 'react-icons/fa';

interface PDFViewerProps {
  pdfUrl: string;
  onClose: () => void;
}

const PDFViewer: FC<PDFViewerProps> = ({ pdfUrl, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white p-4 rounded-lg w-full max-w-4xl h-5/6 flex flex-col">
      <div className="flex justify-end mb-2">
        <button onClick={onClose} className="text-black hover:text-gray-700">
          <FaTimes size={24} />
        </button>
      </div>
      <iframe src={pdfUrl} className="w-full h-full" title="Resume PDF"></iframe>
    </div>
  </div>
);

export default function Home() {
  const [showContact, setShowContact] = useState(false);
  const [showResume, setShowResume] = useState(false);


  const resumePdfUrl = "/Resume.pdf";

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <main className="flex-grow flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 text-center px-4">Harish P S</h1>
        <p className="text-xl sm:text-2xl md:text-2xl mb-8 text-center px-4 text-gray-400">Entry Level Software Developer</p>
        
        {!showContact ? (
          <div className="flex flex-wrap justify-center gap-4 px-4">
            <button className="px-6 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full transition-all duration-200">
              Blogs
            </button>
            <button 
              className="px-6 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full transition-all duration-200"
              onClick={() => setShowResume(true)}
            >
              Resume
            </button>
            <button 
              className="px-6 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full transition-all duration-200"
              onClick={() => setShowContact(true)}
            >
              Contact Me
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-center gap-8">
            <a href="mailto:your.email@example.com" className="text-3xl hover:text-gray-300 transition-colors duration-200">
              <FaEnvelope />
            </a>
            <a href="https://www.instagram.com/literally_harish" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-gray-300 transition-colors duration-200">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/your_profile" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-gray-300 transition-colors duration-200">
              <FaLinkedin />
            </a>
            <button 
              onClick={() => setShowContact(false)}
              className="text-3xl hover:text-gray-300 transition-colors duration-200 mr-4"
            >
              <FaArrowLeft />
            </button>
          </div>
        )}
      </main>
      {showResume && (
        <PDFViewer pdfUrl={resumePdfUrl} onClose={() => setShowResume(false)} />
      )}
    </div>
  );
}