import React from 'react';

interface StatsCardProps {
    icon: React.ReactNode;
    title: string;
    value: string;
  }
  
  const StatsCard: React.FC<StatsCardProps> = ({ icon, title, value }) => {
    return (
      <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 group">
        <div className="flex items-center justify-center mb-4 text-cyan-400 group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <h4 className="text-sm text-gray-300 text-center uppercase tracking-wide">{title}</h4>
        <p className="text-2xl text-white font-bold text-center">{value}</p>
      </div>
    );
  };
  
  export default StatsCard;
  