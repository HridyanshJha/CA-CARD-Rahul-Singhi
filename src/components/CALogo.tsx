
import React from 'react';

// CA India logo component
const CALogo = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-2">
        <img 
          src="https://images.indianexpress.com/2023/12/New-CA-logo.jpg"
          alt="CA India Logo"
          className="h-20 w-auto rounded-md"
        />
      </div>
      
      <h3 className="text-lg font-bold text-caBlue">SBC & ASSOCIATES</h3>
      <div className="text-sm text-gray-600 mt-1">Chartered Accountants</div>
      
      {/* Tricolor bar */}
      <div className="tricolor-bar h-1.5 w-48 mt-1"></div>
    </div>
  );
};

export default CALogo;
