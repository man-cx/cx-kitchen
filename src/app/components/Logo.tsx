import React from 'react'

export const Logo = () => (
  <div className="flex items-center space-x-3">
    {/* Logo Mark */}
    <div className="relative w-14 h-14">
      {/* Base Shape */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#D35400] to-[#F1C40F] rounded-xl transform rotate-12 transition-transform duration-300 group-hover:rotate-45"></div>
      
      {/* Inner Circle */}
      <div className="absolute inset-[3px] bg-[#FFF4E6] rounded-lg">
        {/* Tech Pattern */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-[2px] bg-[#D35400] transform -rotate-45"></div>
          <div className="w-[2px] h-full bg-[#D35400] transform -rotate-45"></div>
        </div>
      </div>
      
      {/* Center Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-[#D35400] font-bold text-xl tracking-tighter transform -rotate-12 transition-transform duration-300 group-hover:rotate-0">CX</span>
      </div>
      
      {/* Decorative Dots */}
      <div className="absolute top-1 right-1 w-2 h-2 bg-[#F1C40F] rounded-full"></div>
      <div className="absolute bottom-1 left-1 w-2 h-2 bg-[#F1C40F] rounded-full"></div>
    </div>

    {/* Logo Text */}
    <div className="flex flex-col">
      <div className="text-2xl font-bold tracking-tight leading-none">
        <span className="text-[#D35400]">CX-</span>
        <span className="text-[#D35400]">Kitchen</span>
      </div>
      <span className="text-[#666666] text-xs tracking-wider mt-0.5">AI-Powered Solutions</span>
    </div>
  </div>
) 