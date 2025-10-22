import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'
import { API_BASE } from '../utils/api';


const Login = () => {
  const { setShowUserLogin, navigate, setUser } = useContext(ShopContext)

  const [mode, setMode] = useState('login') 
  const[showPassword,setShowPassword] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    if (mode === 'login') {
      axios.post(`${API_BASE}/login`, {
        email: formData.email,
        password: formData.password
      })  
        .then(res => {
          if (res.data.message === 'success') {
            const { user, token } = res.data;
            setUser(user); // ✅ store full user
            localStorage.setItem("user", JSON.stringify(user));
            localStorage.setItem("token", token);
            alert("Login successful");
            navigate("/");
          } else {
            alert("Invalid email or password");
          }
        })

        .catch(err => {
          alert('Login error: ' + err.message)
        })
    } else if (mode === 'register') {
      axios.post(`${API_BASE}/register`, {
        name: formData.name,
        email: formData.email,
        password: formData.password
      })
        .then(res => {
          if (res.data.message === 'Registered successfully') {
            alert('Registered successfully.')
            setMode('login')
            navigate('/')
            setShowUserLogin(false)
            setUser(true)
        }})
        .catch(err => {
          alert('Registration error: ' + err.message)
        })
    }
  }

  return (
    <div className="fixed inset-0 bg backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-[400px] relative">
        <button
          onClick={() => setShowUserLogin(false)}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
        >
          &times;
        </button>

        <h1 className="text-center text-2xl font-semibold mb-6">
          {mode === 'login' ? 'User Login' : 'User Register'}
        </h1>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {mode === 'register' && (
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-1">Name</label>
              <input
                type="text"
                placeholder="Enter name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>
          )}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>
          <div className="flex flex-col relative">
            <label className="text-gray-700 font-medium mb-1">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-[38px] right-3  cursor-pointer text-gray-500">
                  {showPassword ? '🙈' : '👁️'}      
            </span>
          </div>

          <h4 className="text-sm text-gray-600">
            {mode === 'login' ? 'Create an account?' : 'Already have an account?'}{' '}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => setMode(mode === 'login' ? 'register' : 'login')}
            >
              click here
            </span>
          </h4>

          <button
            type="submit"
            className="w-full bg-gray-700 hover:bg-gray-800 text-white py-2 rounded-md font-semibold cursor-pointer"
          >
            {mode === 'login' ? 'Login' : 'Register'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
