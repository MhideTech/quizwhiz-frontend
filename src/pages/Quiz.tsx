
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  
  // Static quiz data for UI display
  const quizData = {
    title: "Science Quiz: Earth and Space",
    questions: [
      {
        id: 1,
        text: "What is the closest planet to the sun?",
        options: ["Venus", "Mercury", "Mars", "Earth"],
        correctAnswer: "Mercury"
      },
      {
        id: 2,
        text: "Which gas makes up most of Earth's atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        correctAnswer: "Nitrogen"
      },
      {
        id: 3,
        text: "What causes the ocean tides on Earth?",
        options: ["Wind", "Temperature changes", "Moon's gravity", "Earth's rotation"],
        correctAnswer: "Moon's gravity"
      }
    ]
  };

  const totalQuestions = quizData.questions.length;
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;
  
  const handleNextQuestion = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };
  
  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <div className="min-h-screen bg-quiz-soft-purple py-12">
      <div className="container max-w-4xl mx-auto px-4">
        {/* Quiz Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-quiz-primary mb-2">{quizData.title}</h1>
          <div className="flex items-center justify-center gap-4 mb-4">
            <Badge variant="outline" className="bg-quiz-secondary/20 text-quiz-primary border-quiz-secondary">
              Science
            </Badge>
            <span className="text-sm text-gray-600">Question {currentQuestion + 1} of {totalQuestions}</span>
          </div>
          <Progress value={progress} className="h-2 bg-gray-200" />
        </div>
        
        {/* Question Card */}
        <Card className="mb-8 border-none shadow-lg">
          <CardHeader className="bg-quiz-primary text-white py-6 rounded-t-lg">
            <h2 className="text-xl font-medium">
              Question {currentQuestion + 1}: {quizData.questions[currentQuestion].text}
            </h2>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid gap-4">
              {quizData.questions[currentQuestion].options.map((option, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="justify-start h-auto py-4 px-6 text-left border-2 hover:bg-quiz-secondary/20 hover:border-quiz-secondary transition-all"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex items-center justify-center bg-quiz-soft-purple text-quiz-primary w-8 h-8 rounded-full font-medium">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span>{option}</span>
                  </div>
                </Button>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between py-6 px-6 border-t">
            <Button 
              variant="outline" 
              onClick={handlePrevQuestion}
              disabled={currentQuestion === 0}
              className="border-quiz-primary text-quiz-primary hover:bg-quiz-primary/10"
            >
              Previous
            </Button>
            <Button 
              onClick={handleNextQuestion}
              disabled={currentQuestion === totalQuestions - 1}
              className="bg-quiz-primary hover:bg-quiz-primary/90 text-white"
            >
              Next
            </Button>
          </CardFooter>
        </Card>
        
        {/* Quiz Controls */}
        <div className="flex justify-center mt-6">
          <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-50">
            Exit Quiz
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
