
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";
import { useState } from "react";

// Mock quiz data
const mockQuizzes = [
  {
    id: 1,
    title: "Science Trivia Challenge",
    category: "Science",
    questions: 20,
    playersJoined: 1245,
    createdAt: "2024-04-28T15:30:00Z",
    creator: "Alex Smith",
    difficulty: "Medium",
    thumbnail: "",
  },
  {
    id: 2,
    title: "World Geography Quiz",
    category: "Geography",
    questions: 15,
    playersJoined: 879,
    createdAt: "2024-04-25T09:15:00Z",
    creator: "Jamie Johnson",
    difficulty: "Hard",
    thumbnail: "",
  },
  {
    id: 3,
    title: "90s Pop Culture",
    category: "Entertainment",
    questions: 25,
    playersJoined: 2103,
    createdAt: "2024-04-20T14:00:00Z",
    creator: "Taylor Brown",
    difficulty: "Easy",
    thumbnail: "",
  },
  {
    id: 4,
    title: "Math Puzzles and Problems",
    category: "Education",
    questions: 10,
    playersJoined: 564,
    createdAt: "2024-04-18T11:45:00Z",
    creator: "Jordan Lee",
    difficulty: "Hard",
    thumbnail: "",
  },
  {
    id: 5,
    title: "History: Ancient Civilizations",
    category: "History",
    questions: 30,
    playersJoined: 1389,
    createdAt: "2024-04-15T16:20:00Z",
    creator: "Casey Wilson",
    difficulty: "Medium",
    thumbnail: "",
  },
  {
    id: 6,
    title: "Literature Classics",
    category: "Literature",
    questions: 15,
    playersJoined: 782,
    createdAt: "2024-04-10T08:30:00Z",
    creator: "Riley Garcia",
    difficulty: "Medium",
    thumbnail: "",
  },
];

// Category options
const categories = [
  { value: "all", label: "All Categories" },
  { value: "science", label: "Science" },
  { value: "geography", label: "Geography" },
  { value: "entertainment", label: "Entertainment" },
  { value: "education", label: "Education" },
  { value: "history", label: "History" },
  { value: "literature", label: "Literature" },
];

// Sort options
const sortOptions = [
  { value: "recent", label: "Most Recent" },
  { value: "popular", label: "Most Popular" },
  { value: "questions", label: "Most Questions" },
];

// Difficulty options
const difficultyOptions = [
  { value: "all", label: "All Difficulties" },
  { value: "easy", label: "Easy" },
  { value: "medium", label: "Medium" },
  { value: "hard", label: "Hard" },
];

const QuizFeed = () => {
  const [quizzes] = useState(mockQuizzes);
  const [searchQuery, setSearchQuery] = useState("");
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }).format(date);
  };
  
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy':
        return 'bg-green-100 text-green-700';
      case 'medium':
        return 'bg-yellow-100 text-yellow-700';
      case 'hard':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold">Discover Quizzes</h1>
              <p className="text-gray-600">Find and join public quizzes on various topics</p>
            </div>
            <Button className="bg-quiz-primary hover:bg-quiz-secondary">
              Create New Quiz
            </Button>
          </div>
          
          {/* Search and Filters */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-5 relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input 
                  placeholder="Search quizzes..." 
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="md:col-span-3">
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="md:col-span-2">
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue placeholder="Difficulty" />
                  </SelectTrigger>
                  <SelectContent>
                    {difficultyOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="md:col-span-2">
                <Select defaultValue="recent">
                  <SelectTrigger>
                    <SelectValue placeholder="Sort By" />
                  </SelectTrigger>
                  <SelectContent>
                    {sortOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-4">
              <Badge variant="outline" className="bg-gray-100">
                Popular Now
              </Badge>
              <Badge variant="outline" className="bg-gray-100">
                Recently Added
              </Badge>
              <Badge variant="outline" className="bg-gray-100">
                Short Quizzes
              </Badge>
              <Badge variant="outline" className="bg-gray-100">
                Staff Picks
              </Badge>
            </div>
          </div>
          
          {/* Quiz Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {quizzes.map((quiz) => (
              <div key={quiz.id} className="quiz-card overflow-hidden">
                <div className="h-40 bg-gray-200 relative">
                  {quiz.thumbnail ? (
                    <img
                      src={quiz.thumbnail}
                      alt={quiz.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-gray-400 font-semibold">{quiz.category}</div>
                    </div>
                  )}
                  <Badge 
                    className={`absolute top-4 right-4 ${getDifficultyColor(quiz.difficulty)}`}
                  >
                    {quiz.difficulty}
                  </Badge>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="font-semibold text-lg mb-1">{quiz.title}</h2>
                      <Badge variant="outline">{quiz.category}</Badge>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-quiz-primary">
                        {quiz.questions} Questions
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <div className="text-sm text-gray-600">
                      By {quiz.creator} • {formatDate(quiz.createdAt)}
                    </div>
                    <div className="text-sm font-medium">
                      {quiz.playersJoined.toLocaleString()} players
                    </div>
                  </div>
                  <div className="mt-4">
                    <Button className="w-full bg-quiz-primary hover:bg-quiz-secondary">
                      Join Quiz
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Load More */}
          <div className="mt-10 text-center">
            <Button variant="outline" className="px-8">
              Load More Quizzes
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizFeed;
