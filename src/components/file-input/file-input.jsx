import Button from "../../components/button/button";
import axios from 'axios';
import "./file-input.css";
import React, { useState } from 'react';

export default function FileInput() {
    
    const [selectedFile, setSelectedFile] = useState(null);
    
    const handleFileSelect = (event) => {
      setSelectedFile(event.target.files[0]);
    };
    
    const UploadImage = async () => {
      
      if (!selectedFile) {
        alert('Please select a file first!');
        return;
      }
    
      const formData = new FormData();
      formData.append('file', selectedFile);
    
      try {
        const response = await axios.post('http://localhost:8000/api/upload_image', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        alert('File uploaded successfully', response.data);
        setSelectedFile(null);

      } catch (error) {
        console.error('Error uploading file', error);
      }
    };

    return (
        <div className="file-upload-wrapper">
            <input type="file" id="file-input" onChange={handleFileSelect} accept="image/*" />
            <label for="file-input" class="file-input-label">Choose a file</label>
            {selectedFile && <p>{selectedFile.name}</p>}
            <Button onClick={UploadImage} text={"Upload Image"}/>
        </div>
    );
}