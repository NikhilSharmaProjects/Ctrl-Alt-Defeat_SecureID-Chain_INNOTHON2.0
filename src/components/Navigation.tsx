import { NavLink } from "react-router-dom";
import { Home, User, Award, CircleDollarSign, Wallet, Moon, Sun, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "./ThemeProvider";
import { motion } from "framer-motion";

const Navigation = () => {
  const { theme, setTheme } = useTheme();
  
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  
  return (
    <header className={`${theme === "dark" ? "bg-[#0D1117]/80 backdrop-blur-md border-purple-900/20" : "bg-white/80 backdrop-blur-md border-gray-200"} border-b sticky top-0 z-10`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className={`text-2xl font-bold bg-gradient-to-r ${theme === "dark" ? "from-purple-400 to-pink-500" : "from-blue-600 to-purple-600"} bg-clip-text text-transparent`}
            >
              SecureID-Chain
            </motion.div>
          </div>

          <nav className="hidden md:flex items-center space-x-1">
            <NavLink to="/" className={({ isActive }) => `flex items-center px-3 py-2 rounded-md transition-colors ${isActive 
              ? (theme === "dark" ? "bg-primary/20 text-primary" : "bg-blue-100 text-blue-800") 
              : (theme === "dark" ? "text-gray-300 hover:bg-gray-800/50" : "text-gray-700 hover:bg-gray-100")}`}>
              <Home className="w-5 h-5 mr-2" />
              Home
            </NavLink>
            
            <NavLink to="/identity" className={({ isActive }) => `flex items-center px-3 py-2 rounded-md transition-colors ${isActive 
              ? (theme === "dark" ? "bg-primary/20 text-primary" : "bg-blue-100 text-blue-800") 
              : (theme === "dark" ? "text-gray-300 hover:bg-gray-800/50" : "text-gray-700 hover:bg-gray-100")}`}>
              <User className="w-5 h-5 mr-2" />
              Identity
            </NavLink>
            
            <NavLink to="/nft" className={({ isActive }) => `flex items-center px-3 py-2 rounded-md transition-colors ${isActive 
              ? (theme === "dark" ? "bg-primary/20 text-primary" : "bg-blue-100 text-blue-800") 
              : (theme === "dark" ? "text-gray-300 hover:bg-gray-800/50" : "text-gray-700 hover:bg-gray-100")}`}>
              <Award className="w-5 h-5 mr-2" />
              NFT
            </NavLink>
            
            <NavLink to="/transactions" className={({ isActive }) => `flex items-center px-3 py-2 rounded-md transition-colors ${isActive 
              ? (theme === "dark" ? "bg-primary/20 text-primary" : "bg-blue-100 text-blue-800") 
              : (theme === "dark" ? "text-gray-300 hover:bg-gray-800/50" : "text-gray-700 hover:bg-gray-100")}`}>
              <CircleDollarSign className="w-5 h-5 mr-2" />
              Transactions
            </NavLink>
            
            <NavLink to="/wallet" className={({ isActive }) => `flex items-center px-3 py-2 rounded-md transition-colors ${isActive 
              ? (theme === "dark" ? "bg-primary/20 text-primary" : "bg-blue-100 text-blue-800") 
              : (theme === "dark" ? "text-gray-300 hover:bg-gray-800/50" : "text-gray-700 hover:bg-gray-100")}`}>
              <Wallet className="w-5 h-5 mr-2" />
              Wallet
            </NavLink>

            <NavLink to="/wallet/recover" className={({ isActive }) => `flex items-center px-3 py-2 rounded-md transition-colors ${isActive 
              ? (theme === "dark" ? "bg-primary/20 text-primary" : "bg-blue-100 text-blue-800") 
              : (theme === "dark" ? "text-gray-300 hover:bg-gray-800/50" : "text-gray-700 hover:bg-gray-100")}`}>
              <Shield className="w-5 h-5 mr-2" />
              Recover Password
            </NavLink>
          </nav>

          <div className="flex items-center">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleTheme}
              className={theme === "dark" ? "text-yellow-300 hover:bg-gray-800/50" : "text-gray-700 hover:bg-gray-100"}
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
