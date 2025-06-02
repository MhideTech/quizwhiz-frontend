
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { Github } from "lucide-react";
import { Brain } from "@/components/icons/Brain";

const Login = () => {
  return (
    <div className="min-h-screen bg-quiz-soft-purple py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left side - Form */}
              <div className="p-8 md:p-12 lg:p-16">
                <div className="mb-8">
                  <h1 className="text-3xl font-bold mb-3">Welcome back</h1>
                  <p className="text-gray-600">
                    Log in to continue your quiz journey and access your saved quizzes!
                  </p>
                </div>
                
                {/* Github Sign-in Button */}
                <div className="mb-8">
                  <Button variant="outline" className="w-full flex items-center justify-center gap-2 h-12 border-gray-300 hover:bg-gray-50">
                    <Github className="h-5 w-5 text-gray-700" />
                    <span>Continue with Github</span>
                  </Button>
                </div>
                
                {/* Divider */}
                <div className="relative mb-8">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">or continue with email</span>
                  </div>
                </div>
                
                {/* Form */}
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter your email" className="h-12" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Password</Label>
                      <Link to="/forgot-password" className="text-sm text-quiz-primary hover:underline">
                        Forgot password?
                      </Link>
                    </div>
                    <Input id="password" type="password" placeholder="Enter your password" className="h-12" />
                  </div>
                  
                  <Button className="w-full h-12 bg-quiz-primary hover:bg-quiz-primary/90 text-white">
                    Log In
                  </Button>
                </form>
                
                {/* Sign Up Link */}
                <div className="mt-8 text-center">
                  <p className="text-gray-600">
                    Don't have an account?{" "}
                    <Link to="/signup" className="text-quiz-primary hover:underline font-medium">
                      Sign up
                    </Link>
                  </p>
                </div>
              </div>
              
              {/* Right side - Illustration */}
              <div className="hidden md:block bg-quiz-soft-purple relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="mb-6">
                      <div className="w-32 h-32 bg-white rounded-full shadow-lg mx-auto flex items-center justify-center">
                        <Brain className="h-16 w-16 text-quiz-primary" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-quiz-dark mb-3">
                      Challenge Your Mind
                    </h3>
                    <p className="text-quiz-primary max-w-md">
                      Log back in to continue testing your knowledge and competing with friends.
                    </p>
                    
                    {/* Floating elements for decoration */}
                    <div className="absolute top-10 left-10 w-16 h-16 bg-quiz-secondary/30 rounded-full"></div>
                    <div className="absolute bottom-10 right-10 w-24 h-24 bg-quiz-secondary/30 rounded-full"></div>
                    <div className="absolute top-1/2 right-10 w-12 h-12 bg-quiz-secondary/40 rounded-full"></div>
                    <div className="absolute bottom-1/4 left-10 w-20 h-20 bg-quiz-secondary/30 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
