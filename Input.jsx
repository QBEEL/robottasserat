import React from 'react'

export function Input(props) {
  return <input {...props} className={`w-full px-3 py-2 border border-slate-300 rounded-xl outline-none focus:ring-2 focus:ring-indigo-300 ${props.className || ''}`} />
}

export function Textarea(props) {
  return <textarea {...props} className={`w-full px-3 py-2 border border-slate-300 rounded-xl outline-none focus:ring-2 focus:ring-indigo-300 ${props.className || ''}`} />
}
