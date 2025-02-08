import React, { useState } from 'react'

export const InfoCard = () => {
    const [gender, setGender] = useState('male');               // gender
    const [age, setAge] = useState(20);                         // age
    const [height, setHeight] = useState(170);                  // height
    const [weight, setWeight] = useState(70);                   // weight
    const [activityLevel, setActivityLevel] = useState(1.2);    // activity level
    const [goal, setGoal] = useState('lose weight');            // goal
    

    const handleNext = () => {
        console.log(gender, age, height, weight, activityLevel, goal);
    }

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-2/3 mx-auto">
        <div className='flex flex-col gap-4'>
            <div className='flex flex-col gap-2'>
                {/* Gender Selection */}
                <label htmlFor='gender' className='text-sm font-montserrat font-semibold text-white'>Gender</label>
                <select onChange={(e) => setGender(e.target.value)} name='gender' id='gender' className='w-full p-2 rounded-md border border-gray-300 bg-gray-700 text-white'>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                </select>

                {/* Age Input */}
                <label htmlFor='age' className='text-sm font-montserrat font-semibold text-white'>Age</label>
                <input 
                    type="number" 
                    name='age' 
                    id='age' 
                    placeholder="Enter your age"
                    className='w-full p-2 rounded-md border border-gray-300 bg-gray-700 text-white'
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />

                {/* Height Input */}
                <label htmlFor='height' className='text-sm font-montserrat font-semibold text-white'>Height (cm)</label>
                <input 
                    type="number" 
                    name='height' 
                    id='height' 
                    placeholder="Enter your height"
                    className='w-full p-2 rounded-md border border-gray-300 bg-gray-700 text-white'
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                />

                {/* Weight Input */}
                <label htmlFor='weight' className='text-sm font-montserrat font-semibold text-white'>Weight (kg)</label>
                <input 
                    type="number" 
                    name='weight' 
                    id='weight' 
                    placeholder="Enter your weight"
                    className='w-full p-2 rounded-md border border-gray-300 bg-gray-700 text-white'
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                />

                {/* Activity Level Selection */}
                <label htmlFor='activityLevel' className='text-sm font-montserrat font-semibold text-white'>Activity Level</label>
                <select onChange={(e) => setActivityLevel(e.target.value)} name='activityLevel' id='activityLevel' className='w-full p-2 rounded-md border border-gray-300 bg-gray-700 text-white'>
                    <option value='sedentary'>Sedentary</option>
                    <option value='light'>Lightly Active</option>
                    <option value='moderate'>Moderately Active</option>
                    <option value='very'>Very Active</option>
                    <option value='extra'>Extra Active</option>
                </select>

                {/* Goal Selection */}
                <label htmlFor='goal' className='text-sm font-montserrat font-semibold text-white'>Goal</label>
                <select onChange={(e) => setGoal(e.target.value)} name='goal' id='goal' className='w-full p-2 rounded-md border border-gray-300 bg-gray-700 text-white'>
                    <option value='lose'>Lose Weight</option>
                    <option value='maintain'>Maintain Weight</option>
                    <option value='gain'>Gain Weight</option>
                </select>
            </div>
        </div>
        <button onClick={handleNext} className='bg-blue-500 text-white p-2 rounded-md'>Next</button>
    </div>
  )
}
