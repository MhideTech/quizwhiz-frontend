
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Edit, Settings, Trophy } from "lucide-react";
import { Progress } from "@/components/ui/progress";

// Mock data for user profile and quizzes
const userData = {
  name: "Alex Johnson",
  email: "alex.johnson@example.com",
  avatar: "",
  stats: {
    quizzesPlayed: 42,
    quizzesCreated: 7,
    averageScore: 78,
    totalPoints: 3245,
    rank: "Quiz Master",
  },
  achievements: [
    { id: 1, title: "First Quiz", description: "Created your first quiz", unlocked: true },
    { id: 2, title: "Perfect Score", description: "Score 100% on any quiz", unlocked: true },
    { id: 3, title: "Quiz Creator", description: "Create 5 quizzes", unlocked: true },
    { id: 4, title: "Popular Host", description: "Host a quiz with 20+ participants", unlocked: false, progress: 80 },
    { id: 5, title: "Quiz Expert", description: "Complete 50 quizzes", unlocked: false, progress: 65 },
    { id: 6, title: "Category Master", description: "Create quizzes in 5 different categories", unlocked: false, progress: 40 }
  ],
  myQuizzes: [
    { id: 1, title: "Science Trivia", category: "Science", plays: 324, created: "2023-11-15" },
    { id: 2, title: "World Geography", category: "Geography", plays: 156, created: "2023-12-03" },
    { id: 3, title: "Movie Quotes", category: "Entertainment", plays: 278, created: "2024-01-10" },
    { id: 4, title: "Math Challenge", category: "Education", plays: 97, created: "2024-02-18" }
  ]
};

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Profile Header */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <Avatar className="h-24 w-24 border-4 border-white shadow">
                <AvatarImage src="" />
                <AvatarFallback className="bg-quiz-primary text-white text-2xl">
                  {userData.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h1 className="text-2xl font-bold">{userData.name}</h1>
                    <p className="text-gray-600">{userData.email}</p>
                    <Badge className="mt-2 bg-quiz-soft-purple text-quiz-primary">
                      {userData.stats.rank}
                    </Badge>
                  </div>
                  
                  <div className="mt-4 md:mt-0">
                    <Button variant="outline" className="flex items-center gap-2">
                      <Edit className="h-4 w-4" /> Edit Profile
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <p className="text-sm text-gray-600">Quizzes Played</p>
                <p className="text-2xl font-bold text-quiz-primary">{userData.stats.quizzesPlayed}</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <p className="text-sm text-gray-600">Quizzes Created</p>
                <p className="text-2xl font-bold text-quiz-primary">{userData.stats.quizzesCreated}</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <p className="text-sm text-gray-600">Average Score</p>
                <p className="text-2xl font-bold text-quiz-primary">{userData.stats.averageScore}%</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <p className="text-sm text-gray-600">Total Points</p>
                <p className="text-2xl font-bold text-quiz-primary">{userData.stats.totalPoints.toLocaleString()}</p>
              </div>
            </div>
          </div>
          
          {/* Tabs Section */}
          <Tabs defaultValue="quizzes">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-6">
                <TabsTrigger value="quizzes">My Quizzes</TabsTrigger>
                <TabsTrigger value="achievements">Achievements</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>
              
              {/* My Quizzes Tab */}
              <TabsContent value="quizzes" className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold">Your Created Quizzes</h2>
                  <Button className="bg-quiz-primary hover:bg-quiz-secondary">
                    Create New Quiz
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {userData.myQuizzes.map(quiz => (
                    <Card key={quiz.id} className="overflow-hidden quiz-card">
                      <CardContent className="p-0">
                        <div className="p-5">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-semibold text-lg">{quiz.title}</h3>
                              <Badge variant="outline" className="mt-1">
                                {quiz.category}
                              </Badge>
                            </div>
                            <div className="text-right">
                              <div className="text-sm text-gray-600">
                                {new Date(quiz.created).toLocaleDateString()}
                              </div>
                              <div className="text-sm font-semibold text-quiz-primary mt-1">
                                {quiz.plays} plays
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-gray-50 p-4 border-t flex justify-between items-center">
                          <Button variant="ghost" size="sm">View Details</Button>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">Edit</Button>
                            <Button variant="default" size="sm" className="bg-quiz-primary hover:bg-quiz-secondary">
                              Start
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              {/* Achievements Tab */}
              <TabsContent value="achievements" className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <Trophy className="h-6 w-6 text-quiz-primary" />
                  <h2 className="text-lg font-semibold">Your Achievements</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {userData.achievements.map(achievement => (
                    <div 
                      key={achievement.id} 
                      className={`border rounded-lg p-5 ${achievement.unlocked ? 'bg-quiz-soft-purple border-quiz-light' : 'bg-gray-50 border-gray-100'}`}
                    >
                      <div className="flex items-center mb-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${achievement.unlocked ? 'bg-quiz-primary text-white' : 'bg-gray-200 text-gray-400'}`}>
                          <Trophy className="h-5 w-5" />
                        </div>
                        <h3 className="font-semibold">{achievement.title}</h3>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{achievement.description}</p>
                      
                      {!achievement.unlocked && achievement.progress && (
                        <div className="space-y-1">
                          <div className="text-xs text-gray-500 flex justify-between">
                            <span>Progress</span>
                            <span>{achievement.progress}%</span>
                          </div>
                          <Progress value={achievement.progress} className="h-2" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              {/* Settings Tab */}
              <TabsContent value="settings">
                <div className="flex items-center gap-3 mb-6">
                  <Settings className="h-6 w-6 text-quiz-primary" />
                  <h2 className="text-lg font-semibold">Account Settings</h2>
                </div>
                
                <div className="space-y-6 max-w-2xl">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-4">Profile Information</h3>
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="text-sm text-gray-600">Full Name</div>
                          <div className="md:col-span-2">
                            <input 
                              type="text" 
                              defaultValue={userData.name}
                              className="w-full p-2 border rounded-md"
                            />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="text-sm text-gray-600">Email Address</div>
                          <div className="md:col-span-2">
                            <input 
                              type="email" 
                              defaultValue={userData.email}
                              className="w-full p-2 border rounded-md"
                            />
                          </div>
                        </div>
                        
                        <div className="pt-4">
                          <Button className="bg-quiz-primary hover:bg-quiz-secondary">
                            Save Changes
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-4">Password</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="text-sm text-gray-600 block mb-1">Current Password</label>
                          <input 
                            type="password"
                            className="w-full p-2 border rounded-md"
                          />
                        </div>
                        
                        <div>
                          <label className="text-sm text-gray-600 block mb-1">New Password</label>
                          <input 
                            type="password"
                            className="w-full p-2 border rounded-md"
                          />
                        </div>
                        
                        <div>
                          <label className="text-sm text-gray-600 block mb-1">Confirm New Password</label>
                          <input 
                            type="password"
                            className="w-full p-2 border rounded-md"
                          />
                        </div>
                        
                        <div className="pt-4">
                          <Button className="bg-quiz-primary hover:bg-quiz-secondary">
                            Update Password
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Profile;
