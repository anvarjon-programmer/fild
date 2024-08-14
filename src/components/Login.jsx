import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://raximov.pythonanywhere.com/users/api/login/', {
        username, password
      });
      localStorage.setItem('token', response.data.token);
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[#0C182D]">
      <div className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg">
    <form onSubmit={handleLogin} className="flex flex-col gap-4">
    <h2 className="text-2xl font-bold text-center text-white mb-6">Register</h2>
      <input  className="px-4 py-2 border border-gray-600 bg-gray-900 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
       type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
      <input  className="px-4 py-2 border border-gray-600 bg-gray-900 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
       type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
      <button 
        type="submit" 
        className="w-full py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition duration-300"
      >
        Login``
      </button>
    </form>
    </div>
    </div>
  );
}
