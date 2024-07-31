import { useState } from 'react';
import { Send, Menu, X, MessageSquare } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { type: 'user', content: inputValue }]);
      // Simulated AI response
      setTimeout(() => {
        setMessages(prev => [...prev, { type: 'ai', content: `AI response to: "${inputValue}"` }]);
      }, 1000);
      setInputValue('');
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'block' : 'hidden'} md:block bg-gray-900 text-white w-64 p-4`}>
        <Button className="w-full mb-4" variant="outline" onClick={() => setMessages([])}>New Chat</Button>
        <ScrollArea className="h-[calc(100vh-120px)]">
          <div className="space-y-2">
            {[1, 2, 3].map((chat) => (
              <Button key={chat} variant="ghost" className="w-full justify-start text-gray-300 hover:text-white">
                <MessageSquare className="mr-2 h-4 w-4" />
                Chat {chat}
              </Button>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm p-4 flex justify-between items-center">
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
            {sidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
          <h1 className="text-xl font-semibold">ChatGPT</h1>
          <div>{/* Placeholder for potential header actions */}</div>
        </header>

        {/* Chat area */}
        <ScrollArea className="flex-1 p-4">
          <div className="max-w-3xl mx-auto space-y-4">
            {messages.map((message, index) => (
              <div key={index} className={`p-4 rounded-lg ${message.type === 'user' ? 'bg-blue-500 text-white ml-auto' : 'bg-gray-200'} max-w-[80%]`}>
                {message.content}
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Input area */}
        <div className="p-4 bg-white border-t">
          <div className="max-w-3xl mx-auto flex">
            <Input
              className="flex-1 mr-2"
              placeholder="Send a message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <Button onClick={handleSendMessage}>
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
