import React from 'react'

export function Button({ className = '', variant = 'solid', ...props }) {
  const base = 'inline-flex items-center justify-center font-medium rounded-xl transition px-4 py-2';
  const solid = 'bg-indigo-600 text-white hover:opacity-90 active:opacity-80';
  const outline = 'border border-slate-300 text-slate-800 hover:bg-slate-50';
  const ghost = 'text-slate-800 hover:bg-slate-100';
  const variants = { solid, outline, ghost };
  return <button className={`${base} ${variants[variant] || solid} ${className}`} {...props} />;
}
