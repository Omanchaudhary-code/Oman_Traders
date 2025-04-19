
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import Team from "./pages/Team";
import About from "./pages/About";
import Products from "./pages/Products";
import Gallery from "./pages/Gallery";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <div className="relative min-h-screen">
          <Routes>
            <Route path="/" element={<div className="animate-fade-in"><Index /></div>} />
            <Route path="/team" element={<div className="animate-fade-in"><Team /></div>} />
            <Route path="/about" element={<div className="animate-fade-in"><About /></div>} />
            <Route path="/products" element={<div className="animate-fade-in"><Products /></div>} />
            <Route path="/gallery" element={<div className="animate-fade-in"><Gallery /></div>} />
            <Route path="*" element={<div className="animate-fade-in"><NotFound /></div>} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
