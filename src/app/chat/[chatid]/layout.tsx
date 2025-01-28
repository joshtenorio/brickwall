'use client'
import React from 'react'
import { WebSocketProvider } from 'next-ws/client'

function ChatLayout({ children }: React.PropsWithChildren) {
  return (
    <div>
        <WebSocketProvider url='ws://localhost:3000/api/socket'>
            {children}
        </WebSocketProvider>
    </div>
  )
}

export default ChatLayout