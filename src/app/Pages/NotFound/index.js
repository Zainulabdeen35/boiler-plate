import React from 'react'

export const NotFound = () => {
  return (
    <div className="App bg-gray-200">
      <header className="App-header">
        <div className="flex h-screen">
          <div className="m-auto border-2 border-solid border-black p-20 rounded-md text-3xl text-center">
            <div className="transform hover:scale-110 duration-700 ease-in-out  space-y-4">
              <p>Page not found</p>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}
