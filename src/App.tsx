import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import ChatPage from "@/pages/ChatPage";

function App() {
  return (
    <BrowserRouter>
      <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Routes>
          <Route path="/" element={<ChatPage />} />
        </Routes>
      </main>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;