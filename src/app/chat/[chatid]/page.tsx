'use client'
import React from 'react'
import ChatWindow from '~/components/chat-window'

function Page() {
  return (
    <div className='flex h-full flex-col items-center justify-center gap-y-4 px-4'>
      <div className='flex flex-row space-x-2'>
        <div>chat name !!!</div>
        <div>icon to edit the chat name</div>
      </div>
      <ChatWindow />
    </div>
  )
}

export default Page