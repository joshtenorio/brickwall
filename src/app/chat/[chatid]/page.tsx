'use client'
import { usePathname } from 'next/navigation'
import React from 'react'
import ChatWindow from '~/components/chat-window'

function Page() {
  const chatId: string = usePathname().split('/')[usePathname().split('/').length - 1] ?? "";
  return (
    <div className='flex h-full flex-col items-center justify-center gap-y-4 px-4'>
      <div className='flex flex-row space-x-2'>
        <div>chat name !!! {chatId} todo fetch the chat name</div>
        <div>icon to edit the chat name</div>
      </div>
      <ChatWindow chatId={parseInt(chatId)} />
    </div>
  )
}

export default Page