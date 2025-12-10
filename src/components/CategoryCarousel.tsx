import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  { name: "Savouries", emoji: "🥨", bgColor: "bg-haldiram-yellow/20" },
  { name: "Mithai", emoji: "🍬", bgColor: "bg-haldiram-pink/20" },
  { name: "Bakery & Chocolates", emoji: "🍪", bgColor: "bg-haldiram-coral/20" },
  { name: "Ready To Eat", emoji: "🍛", bgColor: "bg-haldiram-orange/20" },
  { name: "Trail Mixes & Dry Fruits", emoji: "🥜", bgColor: "bg-haldiram-yellow/30" },
];

const CategoryCarousel = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="relative">
          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 rounded-full border-haldiram-red text-haldiram-red hover:bg-haldiram-red hover:text-primary-foreground hidden lg:flex"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 rounded-full border-haldiram-red text-haldiram-red hover:bg-haldiram-red hover:text-primary-foreground hidden lg:flex"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Categories Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((category, index) => (
              <div
                key={category.name}
                className="category-hover cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`${category.bgColor} rounded-2xl overflow-hidden aspect-square flex flex-col items-center justify-center p-4 group`}>
                  <span className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                    {category.emoji}
                  </span>
                  <h3 className="text-center font-semibold text-foreground text-sm md:text-base">
                    {category.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryCarousel;
