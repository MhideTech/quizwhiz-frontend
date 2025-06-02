
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white py-4 shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold bg-gradient-to-r from-quiz-primary to-quiz-blue text-transparent bg-clip-text">
            QuizWhizz
          </span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="nav-link font-medium">
            Home
          </Link>
          <Link to="/feed" className="nav-link font-medium">
            Explore
          </Link>
          <Link to="/profile" className="nav-link font-medium">
            Profile
          </Link>
          <div className="flex space-x-3">
            <Link to="/signup">
              <Button variant="outline" className="rounded-full">
                Sign Up
              </Button>
            </Link>
            <Button className="rounded-full bg-quiz-primary hover:bg-quiz-secondary">
              Login
            </Button>
          </div>
        </div>
        
        <button 
          className="md:hidden" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMobileMenuOpen ? (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            ) : (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            )}
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t mt-2 animate-fade-in">
          <div className="container mx-auto px-4 py-3 space-y-3">
            <Link 
              to="/" 
              className="block py-2 px-4 text-sm hover:bg-gray-50 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/feed" 
              className="block py-2 px-4 text-sm hover:bg-gray-50 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Explore
            </Link>
            <Link 
              to="/profile" 
              className="block py-2 px-4 text-sm hover:bg-gray-50 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Profile
            </Link>
            <div className="flex flex-col space-y-2 p-4">
              <Link 
                to="/signup" 
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Button variant="outline" className="w-full rounded-full">
                  Sign Up
                </Button>
              </Link>
              <Button className="w-full rounded-full bg-quiz-primary hover:bg-quiz-secondary">
                Login
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
