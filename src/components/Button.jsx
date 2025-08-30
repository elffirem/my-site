import React from "react";

export default function Button({ text, onClick, variant = "primary" }) {
  const baseClasses = "px-16 py-10 rounded-full font-black text-3xl shadow-2xl transition-all duration-300 transform hover:scale-105";
  
  const variantClasses = {
    primary: "bg-white text-black hover:bg-gray-100 hover:shadow-xl",
    secondary: "bg-gray-800 text-white hover:bg-gray-700 border-2 border-gray-600 hover:border-gray-500 hover:shadow-xl"
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]}`}
      style={{
        padding: '12px 24px',
        borderRadius: '9999px',
        fontWeight: '900',
        fontSize: '16px',
        boxShadow: '0 8px 20px -5px rgba(0, 0, 0, 0.25)',
        border: variant === 'secondary' ? '2px solid #6B7280' : 'none',
        backgroundColor: variant === 'primary' ? '#ffffff' : 'rgba(75, 85, 99, 0.8)',
        color: variant === 'primary' ? '#000000' : '#ffffff',
        transition: 'all 0.3s ease',
        transform: 'scale(1)',
        cursor: 'pointer',
        margin: '0 8px'
      }}
      onMouseEnter={(e) => {
        e.target.style.transform = 'scale(1.02)';
        e.target.style.boxShadow = '0 12px 25px -5px rgba(0, 0, 0, 0.35)';
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = 'scale(1)';
        e.target.style.boxShadow = '0 8px 20px -5px rgba(0, 0, 0, 0.25)';
      }}
    >
      {text}
    </button>
  );
}
