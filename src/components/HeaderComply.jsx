import React, { useContext } from 'react';



export default function HeaderComply (){
    return (
        <div>
        <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
              <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800">Denuncias</h1>
            </div>
            <div className="text-xs sm:text-sm text-gray-500">Seguro & Confidencial</div>
          </div>
        </div>
      </header>
        </div>
    )
}
