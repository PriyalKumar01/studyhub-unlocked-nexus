import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Trophy, Award, Medal, Coins } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

interface Contributor {
  rank: number;
  name: string;
  branch: string;
  batch: string;
  notesCount: number;
  coins: number;
  medal?: "gold" | "silver" | "bronze";
}

const NotesContributors = () => {
  const navigate = useNavigate();

  const contributors: Contributor[] = [
    {
      rank: 1,
      name: "Rahul Singh",
      branch: "CHE",
      batch: "27",
      notesCount: 78,
      coins: 78000,
      medal: "gold",
    },
    {
      rank: 2,
      name: "Tanishka Gupta",
      branch: "ET",
      batch: "28",
      notesCount: 74,
      coins: 72000,
      medal: "silver", 
    },
    {
      rank: 3,
      name: "Smriti Dwivedi",
      branch: "CE",
      batch: "28",
      notesCount: 72,
      coins: 72000,
      medal: "bronze",
    },
    {
      rank: 4,
      name: "Vrishti Chauhan",
      branch: "ME",
      batch: "28",
      notesCount: 67,
      coins: 67000,
    },
    {
      rank: 5,
      name: "Soni Rawat",
      branch: "ME",
      batch: "28",
      notesCount: 2,
      coins: 2000,
      
    },
    {
      rank: 6,
      name: "Kanishtha Mishra",
      branch: "LFT",
      batch: "28",
      notesCount: 2,
      coins: 2000,
    },
  ];

  const getMedalIcon = (medal?: string) => {
    switch (medal) {
      case "gold":
        return <Trophy className="h-6 w-6 text-yellow-500" />;
      case "silver":
        return <Award className="h-6 w-6 text-gray-400" />;
      case "bronze":
        return <Medal className="h-6 w-6 text-orange-600" />;
      default:
        return null;
    }
  };

  const getMedalColor = (medal?: string) => {
    switch (medal) {
      case "gold":
        return "from-yellow-500/20 to-yellow-600/20 border-yellow-500/50";
      case "silver":
        return "from-gray-400/20 to-gray-500/20 border-gray-400/50";
      case "bronze":
        return "from-orange-500/20 to-orange-600/20 border-orange-500/50";
      default:
        return "";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-6 hover:bg-primary/10"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Button>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Top Contributors
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
            Recognizing students who have contributed valuable notes to help the community
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Coins className="h-4 w-4 text-yellow-500" />
            <span>1 Note = 1000 Coins 🪙</span>
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {contributors.map((contributor, index) => (
            <motion.div
              key={contributor.rank}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card
                className={`feature-card ${
                  contributor.medal
                    ? `bg-gradient-to-r ${getMedalColor(contributor.medal)}`
                    : ""
                }`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary font-bold text-xl">
                        {contributor.rank}
                      </div>
                      <div>
                        <CardTitle className="text-xl mb-1 flex items-center gap-2">
                          {contributor.name}
                          {contributor.medal && getMedalIcon(contributor.medal)}
                        </CardTitle>
                        <CardDescription className="flex items-center gap-2 flex-wrap">
                          <Badge variant="outline">
                            {contributor.branch}'{contributor.batch}
                          </Badge>
                          <Badge variant="outline">HBTU</Badge>
                        </CardDescription>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 text-yellow-500 font-bold text-lg mb-1">
                        <Coins className="h-5 w-5" />
                        {contributor.coins.toLocaleString()}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {contributor.notesCount} notes contributed
                      </p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/10 to-purple-500/10">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-2">Want to Contribute?</h3>
              <p className="text-muted-foreground mb-4">
                Share your notes and help fellow students. Earn coins and get recognized!
              </p>
              <Button className="btn-hero" onClick={() => navigate("/dashboard")}>
                Start Contributing
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default NotesContributors;
