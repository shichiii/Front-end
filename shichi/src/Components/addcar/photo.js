import React, { useState } from 'react';
import axios from 'axios';

const Photo = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    const files = event.target.files;
    setSelectedFiles((prevFiles) => [...prevFiles, ...files]);
  };

  const handleDelete = (index) => {
    setSelectedFiles((prevFiles) => {
      const newFiles = [...prevFiles];
      newFiles.splice(index, 1);
      return newFiles;
    });
  };

  const handleDeleteAll = () => {
    setSelectedFiles([]);
  };

  const handleUpload = async () => {
    const formData = new FormData();

    selectedFiles.forEach((file) => {
      formData.append('files', file);
    });

    try {
      // Make a POST request to your server with the FormData
      const response = await axios.post('YOUR_UPLOAD_API_ENDPOINT', formData);

      // Handle the response as needed (e.g., show success message)
      console.log('Upload successful:', response.data);
    } catch (error) {
      // Handle errors (e.g., show error message)
      console.error('Error uploading files:', error);
    }
  };

  return (
    <div className="w-full rounded-3xl bg-pallate-Dark_Sky_Blue bg-opacity-20">
      <div className="container mx-auto h-full flex flex-col justify-center items-center p-10">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {selectedFiles.map((file, index) => (
            <div key={index} className="relative h-64 mb-3 w-full p-3 rounded-lg bg-cover bg-center">
              <img src={URL.createObjectURL(file)} alt={`Selected File ${index + 1}`} className="w-full h-full object-cover rounded-lg" />
              <button
                onClick={() => handleDelete(index)}
                className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-700" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          ))}
        </div>
        <div className="flex w-full justify-center">
         
          {/* <div className="w-4/12 lg:w-3/12 border border-gray-300 rounded-r-md flex items-center justify-between">
            <span className="p-2">{selectedFiles.length === 1 ? '1 file selected' : `${selectedFiles.length} files selected`}</span>
            <button
              onClick={handleDeleteAll}
              className={`p-2 ${selectedFiles.length === 0 ? 'hidden' : ''}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="fill-current text-red-700 w-3 h-3" viewBox="0 0 320 512">
                <path
                  d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
                />
              </svg>
            </button>
          </div> */}
        </div>
        <div>
          <label className="block text-sm font-medium text-white">Image</label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md ">
            <div className="space-y-1 text-center">
              <svg
                className="mx-auto h-12 w-12 text-white"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div className="flex text-sm text-gray-600">
                <label
                  htmlFor="multi-upload-input"
                  className="relative cursor-pointer  rounded-md font-medium text-pallate-Dark_Sky_Blue hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                >
                  <span className="">Upload a file</span>
                  <input
                     htmlFor="multi-upload-input"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                    onChange={handleFileChange}
                  />
                </label>
                <p className="pl-1 text-white">or drag and drop</p>
              </div>
              <p className="text-xs text-white">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        </div>
        {/* <button
          id="submit"
          onClick={handleUpload}
          className="rounded-sm px-3 py-1 bg-blue-700 hover:bg-blue-500 text-white focus:shadow-outline focus:outline-none"
        >
          Upload now
        </button> */}
        <input type="file" id="multi-upload-input" className="hidden" multiple onChange={handleFileChange} />
      </div>
    </div>
  );
};

export default Photo;
