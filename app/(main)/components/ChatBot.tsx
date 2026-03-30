import { Bot } from "lucide-react";

export const ChatBot = () => {
  return (
    <div className="w-15 h-15 rounded-full bg-green-600 flex items-center justify-center text-center drop-shadow-green-300 drop-shadow-xs fixed bottom-5 right-10 cursor-pointer">
      <Bot size={40} color="white" />
    </div>
  );
};
