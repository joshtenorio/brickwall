'use client'
import React from 'react'
import { WebSocketProvider } from 'next-ws/client'
import { env } from "~/env"

function ChatLayout({ children }: React.PropsWithChildren) {
  return (
    <div>
        <WebSocketProvider url={env.NEXT_PUBLIC_WS_ENDPOINT}>
            {children}
        </WebSocketProvider>
    </div>
  )
}

export default ChatLayout