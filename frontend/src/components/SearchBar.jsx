import React, { useState } from 'react';

function QuestionForm() {
    const [selectedImages, setSelectedImages] = useState([]);

    const handleImageChange = (event) => {
        const files = Array.from(event.target.files);
        const newImages = files
            .filter(file => file.type.startsWith('image/'))
            .map(file => URL.createObjectURL(file));

        setSelectedImages(prevImages => [...prevImages, ...newImages]);
    };

    const removeImage = (index) => {
        setSelectedImages(prevImages => prevImages.filter((_, i) => i !== index));
    };


    return (
        <form className="w-[400px] mx-auto bg-white p-8 rounded-lg shadow-2xl space-y-6">
           
            <div>
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="title">Title</label>
                <input
                    type="text"
                    id="title"
                    placeholder="Enter the title"
                    className="w-full h-12 px-4 bg-white outline-none rounded-md text-gray-800 border border-gray-300"
                />
            </div>
            
            <div>
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="question">Question</label>
                <textarea
                    id="question"
                    placeholder="Enter the question"
                    className="w-full h-24 px-4 py-2 bg-white outline-none rounded-md text-gray-800 border border-gray-300 resize-none"
                />
            </div>
            
            <div className="flex items-center justify-center space-x-4">
                <div className="relative flex items-center justify-center">
                    <input
                        type="file"
                        id="file-upload"
                        className="hidden"
                        accept="image/*"
                        multiple
                        onChange={handleImageChange}
                    />
                    <label
                        htmlFor="file-upload"
                        className="cursor-pointer bg-blue-500 text-primary font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition-colors flex justify-center items-center"
                    >
                        Upload Image
                    </label>
                </div>
            </div>

            {selectedImages.length > 0 && (
                <div className="mt-4 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        {selectedImages.map((image, index) => (
                            <div key={index} className="relative">
                                <img
                                    src={image}
                                    alt={`Imagine ${index + 1}`}
                                    className="w-full h-auto rounded-lg border border-gray-300"
                                />
                                <button
                                    type="button"
                                    onClick={() => removeImage(index)}
                                    className="absolute top-2 right-2 bg-red-500 text-primary text-xs p-1 rounded-full hover:bg-red-600"
                                >
                                    X
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}

         

            <button
                type="submit"
                className="w-full h-12 bg-blue-500 text-primary font-semibold rounded-md hover:bg-blue-600 transition-colors"
            >
                Submit
            </button>
        </form>
    );
}

export default QuestionForm;
