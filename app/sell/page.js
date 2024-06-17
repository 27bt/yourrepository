// app/sell/page.js
'use client';

import { useState } from 'react';

export default function SellPage() {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        price: '',
        url: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/addProduct', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (result.success) {
                alert('Product added successfully');
                // Reset form or any other actions
                setFormData({
                    title: '',
                    description: '',
                    price: '',
                    url: ''
                });
            } else {
                alert('Error adding product: ' + result.error);
            }
        } catch (error) {
            alert('Error adding product: ' + error.message);
        }
    };

    return (
        <div className="container mx-auto py-8">
            <h2 className="text-2xl font-bold mb-4">Sell an Item</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700">Title</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-lg"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Description</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-lg"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Price</label>
                    <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-lg"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Image URL</label>
                    <input
                        type="text"
                        name="url"
                        value={formData.url}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-lg"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-lg"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
