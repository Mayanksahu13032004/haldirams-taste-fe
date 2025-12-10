import { Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const recipes = [
  {
    name: "Punjabi Tadka Wrap",
    difficulty: "Easy",
    time: "15 mins",
    bgColor: "bg-haldiram-yellow/20",
    emoji: "🌯",
  },
  {
    name: "Bhujia Sandwich",
    difficulty: "Moderate",
    time: "05 mins",
    bgColor: "bg-haldiram-coral/20",
    emoji: "🥪",
  },
  {
    name: "Mini Aloo Masala Toast",
    difficulty: "Easy",
    time: "05 mins",
    bgColor: "bg-haldiram-pink/20",
    emoji: "🍞",
  },
];

const RecipesSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Recipes With a Twist
          </h2>
          <Button 
            variant="outline" 
            className="border-haldiram-red text-haldiram-red hover:bg-haldiram-red hover:text-primary-foreground font-semibold"
          >
            View All <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Recipes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recipes.map((recipe, index) => (
            <div
              key={recipe.name}
              className="product-card-hover bg-card rounded-2xl overflow-hidden shadow-card animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`${recipe.bgColor} h-48 flex items-center justify-center relative`}>
                <span className="text-8xl">{recipe.emoji}</span>
                <Badge 
                  className={`absolute top-4 left-4 ${
                    recipe.difficulty === "Easy" 
                      ? "bg-green-500" 
                      : "bg-haldiram-orange"
                  } text-primary-foreground`}
                >
                  {recipe.difficulty}
                </Badge>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground text-lg mb-2 hover:text-haldiram-red transition-colors cursor-pointer">
                  {recipe.name}
                </h3>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">{recipe.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecipesSection;
