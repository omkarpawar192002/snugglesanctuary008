import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import { ThemeProvider } from "@/components/ThemeProvider";
import Index from "./pages/Index";
import About from "./pages/About";
import Adoption from "./pages/Adoption";
import Rescue from "./pages/Rescue";
import Clinic from "./pages/Clinic";
import LostFound from "./pages/LostFound";
import ETraining from "./pages/ETraining";
import Blogs from "./pages/Blogs";
import Auth from "./pages/Auth";
import Favorites from "./pages/Favorites";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="snuggle-ui-theme">
      <TooltipProvider>
        <BrowserRouter>
          <AuthProvider>
            <Toaster />
            <Sonner />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/adoption" element={<Adoption />} />
              <Route path="/rescue" element={<Rescue />} />
              <Route path="/clinic" element={<Clinic />} />
              <Route path="/lost-found" element={<LostFound />} />
              <Route path="/e-training" element={<ETraining />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
