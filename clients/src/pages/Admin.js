import { useState } from 'react';
import axios from 'axios';

const Admin = () => {
  const [service, setService] = useState({ title: '', description: '' });

  const handleChange = (e) => {
    setService({ ...service, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/admin/content', service);
      alert('Service added successfully!');
      setService({ title: '', description: '' });
    } catch (error) {
      alert('Error adding service');
      console.error(error);
    }
  };

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Add New Service</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Service Title"
          value={service.title}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <textarea
          name="description"
          placeholder="Service Description"
          value={service.description}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Service
        </button>
      </form>
    </div>
  );
};

export default Admin;
