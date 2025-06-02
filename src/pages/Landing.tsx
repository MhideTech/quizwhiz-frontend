
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, Calendar, CheckCircle, Trophy, Users } from "lucide-react";

const Landing = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-40 bg-gradient-to-br from-quiz-primary to-quiz-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjwvZz48L2c+PC9zdmc+')] bg-repeat" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in">
              Make Learning Fun with Interactive Quizzes
            </h1>
            <p className="text-xl text-white/90 mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Create, join, and play interactive quizzes in real-time with friends, students, or colleagues. Perfect for classrooms, training, or just for fun!
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Link to="/signup">
                <Button size="lg" className="bg-white text-quiz-primary hover:bg-gray-100 rounded-full px-8">
                  Get Started
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 rounded-full px-8">
                Create Quiz
              </Button>
            </div>
          </div>
        </div>
        <div className="hidden md:block absolute bottom-10 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-full max-w-4xl">
          <div className="bg-white rounded-xl shadow-xl p-6 animate-scale-in">
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-3xl font-bold text-quiz-primary">100K+</p>
                <p className="text-gray-600">Active Users</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-quiz-primary">500K+</p>
                <p className="text-gray-600">Quizzes Created</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-quiz-primary">10M+</p>
                <p className="text-gray-600">Questions Answered</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need for Interactive Learning</h2>
            <p className="text-xl text-gray-600">
              QuizWhizz provides all the tools needed to create engaging quizzes and facilitate interactive learning experiences.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="feature-icon mx-auto">
                <Brain className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Create Quizzes</h3>
              <p className="text-gray-600">
                Build custom quizzes with multiple question types, images, and videos. Set time limits and scoring rules.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="feature-icon mx-auto">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Join Live Games</h3>
              <p className="text-gray-600">
                Jump into live quiz sessions with a simple code. Compete with friends and see real-time leaderboards.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="feature-icon mx-auto">
                <Trophy className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Track Scores</h3>
              <p className="text-gray-600">
                Review detailed analytics and performance metrics. Monitor progress over time with beautiful charts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How QuizWhizz Works</h2>
            <p className="text-xl text-gray-600">
              Get started in minutes with these simple steps
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-quiz-soft-purple w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-quiz-primary mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold mb-2">Create an Account</h3>
              <p className="text-gray-600">Sign up for free and set up your profile</p>
            </div>
            <div className="text-center">
              <div className="bg-quiz-soft-purple w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-quiz-primary mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold mb-2">Build Your Quiz</h3>
              <p className="text-gray-600">Add questions, media, and customize settings</p>
            </div>
            <div className="text-center">
              <div className="bg-quiz-soft-purple w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-quiz-primary mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold mb-2">Play & Share</h3>
              <p className="text-gray-600">Start a live session and invite participants</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-xl text-gray-600">
              Thousands of educators and trainers trust QuizWhizz
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-sm relative">
              <div className="text-quiz-primary mb-4">
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8v6a6 6 0 01-6 6H8a6 6 0 006-6v-6h4v6a6 6 0 01-6 6h4a6 6 0 006-6v-6h4v6a6 6 0 01-6 6h4a6 6 0 006-6v-6h4v6a6 6 0 01-6 6h4a6 6 0 006-6v-6h-4v-4H3c-1.1 0-2 .9-2 2v4h8z"></path>
                </svg>
              </div>
              <p className="text-gray-600 mb-6">
                "QuizWhizz has transformed how I engage with my students. The real-time feedback and competitive elements keep everyone motivated and excited to learn."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                <div>
                  <p className="font-semibold">Sarah Johnson</p>
                  <p className="text-sm text-gray-500">High School Teacher</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm relative">
              <div className="text-quiz-primary mb-4">
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8v6a6 6 0 01-6 6H8a6 6 0 006-6v-6h4v6a6 6 0 01-6 6h4a6 6 0 006-6v-6h4v6a6 6 0 01-6 6h4a6 6 0 006-6v-6h4v6a6 6 0 01-6 6h4a6 6 0 006-6v-6h-4v-4H3c-1.1 0-2 .9-2 2v4h8z"></path>
                </svg>
              </div>
              <p className="text-gray-600 mb-6">
                "As a corporate trainer, I've tried many quiz platforms, but QuizWhizz stands out with its intuitive design and powerful analytics. My team loves the interactive sessions."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                <div>
                  <p className="font-semibold">Michael Rodriguez</p>
                  <p className="text-sm text-gray-500">Corporate Trainer</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm relative">
              <div className="text-quiz-primary mb-4">
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8v6a6 6 0 01-6 6H8a6 6 0 006-6v-6h4v6a6 6 0 01-6 6h4a6 6 0 006-6v-6h4v6a6 6 0 01-6 6h4a6 6 0 006-6v-6h4v6a6 6 0 01-6 6h4a6 6 0 006-6v-6h-4v-4H3c-1.1 0-2 .9-2 2v4h8z"></path>
                </svg>
              </div>
              <p className="text-gray-600 mb-6">
                "I use QuizWhizz for our weekly team building activities. It's so simple to create custom quizzes and the multiplayer aspect makes it incredibly fun for everyone."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                <div>
                  <p className="font-semibold">Emily Chang</p>
                  <p className="text-sm text-gray-500">Team Lead, Tech Startup</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-quiz-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make Learning Fun?</h2>
            <p className="text-xl mb-8 text-white/90">
              Join thousands of educators and trainers who use QuizWhizz to engage and motivate their audience.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/signup">
                <Button size="lg" className="bg-white text-quiz-primary hover:bg-gray-100 rounded-full px-8 btn-hover-effect">
                  Get Started Free
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 rounded-full px-8 btn-hover-effect">
                See Demo <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
