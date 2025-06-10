import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/components/ui/use-toast";

interface Message {
  id: string;
  content: string;
  sender: "user" | "other";
  timestamp: Date;
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hi there! How can I help you today?",
      sender: "other",
      timestamp: new Date(),
    },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const { toast } = useToast();

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: newMessage,
      sender: "user",
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setNewMessage("");
    
    // Simulate response after a short delay
    setTimeout(() => {
      const responseMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: getRandomResponse(),
        sender: "other",
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, responseMessage]);
      
      toast({
        title: "New message",
        description: "You received a new message",
        duration: 3000,
      });
    }, 1000);
  };

  const getRandomResponse = () => {
    const responses = [
      "I understand what you're saying.",
      "That's interesting. Tell me more.",
      "I see. How can I help with that?",
      "Thanks for sharing that with me.",
      "I appreciate your message.",
      "Let me know if you need anything else!",
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="max-w-md mx-auto h-screen flex flex-col">
      <header className="bg-white dark:bg-gray-800 shadow p-4">
        <h1 className="text-xl font-bold text-center">Simple Chat</h1>
      </header>
      
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div className="flex items-end gap-2">
                {message.sender === "other" && (
                  <Avatar className="h-8 w-8 bg-primary">
                    <div className="text-xs font-medium">AI</div>
                  </Avatar>
                )}
                <div
                  className={`max-w-xs rounded-lg p-3 ${
                    message.sender === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  }`}
                >
                  <p>{message.content}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {formatTime(message.timestamp)}
                  </p>
                </div>
                {message.sender === "user" && (
                  <Avatar className="h-8 w-8 bg-gray-500">
                    <div className="text-xs font-medium">Me</div>
                  </Avatar>
                )}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
      
      <div className="p-4 border-t bg-white dark:bg-gray-800">
        <form
          className="flex items-center gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
        >
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1"
          />
          <Button type="submit" size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  );
}