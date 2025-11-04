import React from 'react'

export default function InvitationHeader() {
  return (
    <header className="text-center space-y-6">
      <p className="tracking-widest text-sm uppercase text-pink-500">You're invited</p>
      <h1 className="font-serif text-5xl sm:text-6xl font-semibold text-pink-600">
        Jane Doe
        <span className="mx-3 text-pink-400">&</span>
        Jhon Doe
      </h1>
      <p className="text-gray-500">Together with their families</p>
      <div className="inline-block h-px w-24 bg-pink-200" />
      <p className="text-gray-700">Saturday, June 21, 2025</p>
      <p className="text-gray-500">San Francisco, California</p>
    </header>
  )
}
