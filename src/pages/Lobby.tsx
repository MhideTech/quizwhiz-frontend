
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Copy, Share2, PlayCircle, UserMinus } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

// Mock player data
const mockPlayers = [
  { id: 1, name: "Alex Smith", avatar: "", isHost: true },
  { id: 2, name: "Jamie Johnson", avatar: "", isHost: false },
  { id: 3, name: "Taylor Brown", avatar: "", isHost: false },
  { id: 4, name: "Jordan Lee", avatar: "", isHost: false },
  { id: 5, name: "Casey Wilson", avatar: "", isHost: false },
];

const Lobby = () => {
  const [players] = useState(mockPlayers);
  const [copySuccess, setCopySuccess] = useState(false);
  const lobbyCode = "QUIZ123";
  const isHost = true; // In a real app, this would come from auth/state
  
  const handleCopyCode = () => {
    navigator.clipboard.writeText(lobbyCode);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };
  
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-quiz-primary to-quiz-secondary p-6 text-white">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h1 className="text-2xl font-bold">Science Trivia Challenge</h1>
                  <p className="text-white/90">Hosted by Alex Smith</p>
                </div>
                <div className="flex items-center gap-3">
                  <Badge className="bg-white/20 hover:bg-white/30 text-white">
                    20 Questions
                  </Badge>
                  <Badge className="bg-white/20 hover:bg-white/30 text-white">
                    60 Seconds/Q
                  </Badge>
                </div>
              </div>
            </div>
            
            {/* Lobby Content */}
            <div className="p-6">
              {/* Players Grid */}
              <div className="mb-8">
                <h2 className="text-lg font-semibold mb-4">Players ({players.length}/10)</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                  {players.map((player) => (
                    <div 
                      key={player.id} 
                      className={cn(
                        "bg-gray-50 rounded-lg p-3 text-center relative",
                        player.isHost ? "border-2 border-quiz-primary" : ""
                      )}
                    >
                      {player.isHost && (
                        <Badge className="absolute -top-2 -right-2 bg-quiz-primary">Host</Badge>
                      )}
                      <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-2 flex items-center justify-center text-gray-400">
                        {player.avatar || player.name.charAt(0)}
                      </div>
                      <p className="font-medium text-sm truncate">{player.name}</p>
                      
                      {isHost && !player.isHost && (
                        <button className="mt-2 text-xs text-red-500 flex items-center justify-center mx-auto hover:text-red-600">
                          <UserMinus className="h-3 w-3 mr-1" /> Kick
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Status and Actions */}
              <div className="text-center mb-8">
                <div className="animate-pulse mb-4">
                  <Badge variant="outline" className="bg-yellow-50 text-yellow-600 border-yellow-200">
                    Waiting for host to start...
                  </Badge>
                </div>
                
                {isHost ? (
                  <Button 
                    className="bg-quiz-primary hover:bg-quiz-secondary"
                    size="lg"
                  >
                    <PlayCircle className="mr-2 h-5 w-5" /> Start Quiz
                  </Button>
                ) : (
                  <p className="text-gray-600 text-sm">The host will start the quiz shortly.</p>
                )}
              </div>
              
              {/* Invite Section */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold mb-3">Invite Players</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-2">Share this code with others:</p>
                    <div className="flex items-center gap-2">
                      <div className="bg-white border rounded-md px-4 py-2 font-mono text-lg font-bold flex-grow text-center">
                        {lobbyCode}
                      </div>
                      <Button 
                        variant={copySuccess ? "default" : "outline"}
                        className={cn(
                          "px-3", 
                          copySuccess ? "bg-green-500 hover:bg-green-600" : ""
                        )}
                        onClick={handleCopyCode}
                      >
                        {copySuccess ? (
                          <span className="flex items-center">Copied!</span>
                        ) : (
                          <Copy className="h-5 w-5" />
                        )}
                      </Button>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-2">Or share a direct link:</p>
                    <Button 
                      variant="outline" 
                      className="w-full flex justify-center items-center"
                    >
                      <Share2 className="mr-2 h-5 w-5" />
                      Share Invite Link
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <Button variant="ghost" className="text-gray-600 hover:text-quiz-primary">
              Exit Lobby <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lobby;
