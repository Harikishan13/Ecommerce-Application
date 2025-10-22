import React from 'react'
import user1 from '../assets/user1.jpg'
import user2 from '../assets/user2.jpg'
import user3 from '../assets/user3.jpg'
import { FaStar } from 'react-icons/fa'

const UserExperiences = () => {
  const userExperiences = [
    {
      name: "Anand Babu",
      date: "22 Jul 2025",
      message: "Super quick delivery. Very happy with Shop Easy! The products arrived in perfect condition and exactly as described."
,      image: user1
    },
    {
      name: "Maruthi Praveen",
      date: "25 Jan 2025",
      message: "This service completely exceeded my expectations. The process was smooth and the result outstanding!",
      image: user2
    },
    {
      name: "Anjali Patel",
      date: "14 Feb 2025",
      message: "Excellent service! Highly recommended for fast delivery and great products.",
      image: user3
    }
  ]

  return (
    <section className="px-3 py-30 bg-gradient-to-r from-gray-200 to-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-2">
          People <span className="text-gray-500 underline">Says</span>
        </h1>
        <p className="text-black/50 mb-10">
          Real stories from our happy customers sharing their experience, <br />
          style inspiration, and trusted feedback on what they love.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {userExperiences.map((userexp, index) => (
            <div
              key={index}
              className="bg-white p-5 shadow hover:shadow-lg transition-all duration-300"
            >
              <div className="flex justify-between items-center mb-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} size={16} className="text-red-500" />
                  ))}
                </div>
                <p className="text-gray-400 text-sm">{userexp.date}</p>
              </div>
              <p className="text-gray-700 text-sm mb-6">
                “{userexp.message}”
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={userexp.image}
                  alt={userexp.name}
                  className="w-10 h-10 rounded-full object-cover border border-gray-300"
                />
                <p className="font-semibold text-gray-800 text-sm">{userexp.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default UserExperiences
