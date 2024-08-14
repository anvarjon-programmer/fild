import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://raximov.pythonanywhere.com/users/api/register/', {
        username, phone,email,password,password2
      });
      alert('Registration successful!');
      navigate('/login');
    } catch (error) {
      console.error('Registration failed:', error);
      alert('Registration failed');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[#0C182D]">
  <div className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg">
    <h2 className="text-2xl font-bold text-center text-white mb-6">Register</h2>
    <form onSubmit={handleRegister} className="flex flex-col gap-4">
      <input 
        type="text" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
        placeholder="Username" 
        required 
        className="px-4 py-2 border border-gray-600 bg-gray-900 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input 
        type="text" 
        value={phone} 
        onChange={(e) => setPhone(e.target.value)} 
        placeholder="Phone" 
        required 
        className="px-4 py-2 border border-gray-600 bg-gray-900 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input 
        type="text" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="Email" 
        required 
        className="px-4 py-2 border border-gray-600 bg-gray-900 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input 
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        placeholder="Password" 
        required 
        className="px-4 py-2 border border-gray-600 bg-gray-900 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input 
        type="password" 
        value={password2} 
        onChange={(e) => setPassword2(e.target.value)} 
        placeholder="Confirm Password" 
        required 
        className="px-4 py-2 border border-gray-600 bg-gray-900 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button 
        type="submit" 
        className="w-full py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition duration-300"
      >
        Register
      </button>
    </form>
  </div>
</div>


  );
}
