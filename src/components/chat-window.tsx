"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { ScrollArea } from "~/components/ui/scroll-area";
import { Paperclip, Send } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { useWebSocket } from 'next-ws/client';
import { ChatMessage, Message } from "~/app/api/socket/route";



export default function ChatWindow() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const ws = useWebSocket();

  useEffect(() => {
    async function onMessage(event: MessageEvent) {
      //const payload = typeof event.data === 'string' ? event.data : await event.data.text();
      const payload = event.data
      const message: ChatMessage = JSON.parse(payload);
      setMessages((p) => [... p, message])
      console.log("received message")
    }

    ws?.addEventListener('message', onMessage);
    return () => ws?.removeEventListener('message', onMessage);
  }, [ws]);

  const handleSendMessage = () => {
    if (inputMessage.trim() || file && ws) {
      const newMessage: ChatMessage = {
        id: Date.now(),
        timestamp: Date.now(),
        text: inputMessage,
        file: file ?? undefined,
        chatId: 0,
      };
      const wsMessage: Message = {
        type: "send",
        data: newMessage
      }

      ws?.send(JSON.stringify(wsMessage))
      setMessages([...messages, newMessage]);
      setInputMessage("");
      if (file == null) {
        console.log("no file selected");
      } else {
        console.log("there was a file");
      }
      setFile(null);
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0];
    if (uploadedFile) {
      setFile(uploadedFile);
    }
  };

  return (
    <div className="mx-auto flex h-[600px] w-full flex-col overflow-hidden rounded-lg border bg-background">
      <TooltipProvider>
        <ScrollArea className="flex-grow p-4">
          {messages.map((message) => (
            <div key={message.id} className={`mb-4 text-right `}>
              <Tooltip>
                <TooltipTrigger>
                  <div
                    className={`inline-block rounded-lg bg-primary p-2 text-primary-foreground cursor-default`}
                  >
                    {message.text}
                    {message.file && (
                      <div className="mt-2 text-sm">
                        Attached: {message.file.name}
                      </div>
                    )}
                  </div>
                </TooltipTrigger>
                <TooltipContent>{new Date(message.timestamp).toLocaleString()}</TooltipContent>
              </Tooltip>
            </div>
          ))}
        </ScrollArea>
      </TooltipProvider>
      <div className="border-t p-4">
        <div className="flex items-center space-x-2">
          <Input
            type="text"
            placeholder="Type a message..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyUp={(e) => e.key === "Enter" && handleSendMessage()}
          />
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileUpload}
            className="hidden"
          />
          <Button
            size="icon"
            variant="outline"
            onClick={() => fileInputRef.current?.click()}
          >
            <Paperclip className="h-4 w-4" />
          </Button>
          <Button size="icon" onClick={handleSendMessage}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
        {file && (
          <div className="mt-2 text-sm text-muted-foreground">
            File selected: {file.name}
          </div>
        )}
      </div>
    </div>
  );
}
