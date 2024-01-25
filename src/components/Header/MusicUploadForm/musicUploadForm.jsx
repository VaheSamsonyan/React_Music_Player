import React, { useState, useRef, useEffect } from 'react';
import './pb.css';

// MusicUploadForm component for uploading and playing music
function MusicUploadForm({ getlist, list }) {
  // State variables
  const [file, setFile] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const audioRef = useRef();

  // Handle file input change
  function handleFile(e) {
    setFile(e.target.files[0]);
  }

  // Handle music upload
  function handleUpload(e) {
    e.preventDefault();
    setIsLoading(true);

    // Simulate upload delay
    setTimeout(() => {
      // Create a new track with uploaded file details
      const newTrack = {
        id: list.length + 1,
        title: file.name,
        artists: 'Unknown Artist',
      };

      // Update the list with the new track
      getlist([...list, newTrack]);

      // Reset file and loading state
      setFile(null);
      setIsLoading(false);
    }, 2500);
  }

  // Handle play/pause button click
  function handlePlayPause() {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }

  // Use effect to clear loading state after a delay
  useEffect(() => {
    let timeoutId;

    if (isLoading) {
      timeoutId = setTimeout(() => {
        setIsLoading(false);
      }, 2500);
    }

    return () => clearTimeout(timeoutId);
  }, [isLoading]);

  // Component rendering
  return (
    <div>
      {/* Form for music upload */}
      <form onSubmit={handleUpload}>
        <input type="file" name="file" accept=".mp3, .wav" onChange={handleFile} />
        <button type="submit">Upload</button>
      </form>

      {/* Display spinner while uploading */}
      {isLoading && <div className="spinner"></div>}

      {/* Display audio controls and play/pause button for the uploaded file */}
      {file && (
        <div>
          <audio ref={audioRef} controls>
            <source src={URL.createObjectURL(file)} type={`audio/${file.name.split('.').pop()}`} />
            Your browser does not support the audio element.
          </audio>
          <button onClick={handlePlayPause}>Play/Pause</button>
        </div>
      )}
    </div>
  );
}

export default MusicUploadForm;
