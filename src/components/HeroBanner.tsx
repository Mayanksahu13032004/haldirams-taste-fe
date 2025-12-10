import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroBanner = () => {
  return (
    <section className="relative bg-hero-gradient min-h-[500px] lg:min-h-[600px] overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-0 w-16 h-32 bg-haldiram-yellow/30 rounded-r-full" />
      <div className="absolute top-20 right-10 w-8 h-8 bg-haldiram-yellow/40 rounded-full" />
      <div className="absolute bottom-40 left-10 w-6 h-6 bg-haldiram-yellow/30 rounded-full" />
      <div className="absolute bottom-20 right-0 w-32 h-64 bg-haldiram-coral/40 rounded-l-full" />
      <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-haldiram-yellow/50 rounded-full" />
      
      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="text-primary-foreground">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-4">
              <span className="text-haldiram-yellow">BIG CHEER</span>
              <br />
              FOR SNACK LOVERS!
            </h1>
            <p className="text-xl md:text-2xl font-semibold mb-2">
              Haldiram's Welcomes the GST Rate Cut.
            </p>
            <p className="text-lg md:text-xl font-medium mb-4">
              Now Enjoy Most Of Your Haldiram's Favourites
            </p>
            <p className="text-4xl md:text-5xl font-black text-haldiram-yellow italic mb-4">
              At Just 5% GST
            </p>
            <p className="text-lg font-semibold mb-2">
              Lighter On Your Pocket, Richer In Taste!
            </p>
            <p className="text-haldiram-yellow font-bold text-lg">
              From 22nd Sept' 2025 onwards
            </p>
          </div>

          {/* Product Images */}
          <div className="relative hidden lg:block">
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-4">
                <div className="bg-background/10 backdrop-blur-sm rounded-xl p-4 transform rotate-3">
                  <div className="h-32 bg-haldiram-yellow/20 rounded-lg flex items-center justify-center text-primary-foreground font-bold">
                    Cookie Heaven
                  </div>
                </div>
                <div className="bg-background/10 backdrop-blur-sm rounded-xl p-4 transform -rotate-2">
                  <div className="h-28 bg-haldiram-coral/30 rounded-lg flex items-center justify-center text-primary-foreground font-bold">
                    Badam
                  </div>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-background/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="h-36 bg-haldiram-yellow/30 rounded-lg flex items-center justify-center text-primary-foreground font-bold">
                    Bhujia Sev
                  </div>
                </div>
                <div className="bg-background/10 backdrop-blur-sm rounded-xl p-4 transform rotate-2">
                  <div className="h-24 bg-haldiram-pink/30 rounded-lg flex items-center justify-center text-primary-foreground font-bold">
                    Cookie
                  </div>
                </div>
              </div>
              <div className="space-y-4 mt-4">
                <div className="bg-background/10 backdrop-blur-sm rounded-xl p-4 transform -rotate-3">
                  <div className="h-28 bg-haldiram-orange/30 rounded-lg flex items-center justify-center text-primary-foreground font-bold text-sm">
                    Ready Meal
                  </div>
                </div>
                <div className="bg-background/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="h-32 bg-haldiram-yellow/20 rounded-lg flex items-center justify-center text-primary-foreground font-bold text-sm">
                    Rajma Chawal
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
        {[1, 2, 3, 4, 5].map((dot, index) => (
          <button
            key={dot}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === 0 ? "bg-primary-foreground" : "bg-primary-foreground/40"
            }`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary-foreground hover:bg-primary-foreground/10"
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-primary-foreground hover:bg-primary-foreground/10"
      >
        <ChevronRight className="h-8 w-8" />
      </Button>
    </section>
  );
};

export default HeroBanner;
