import { Button } from "@/components/ui/button";

const FestiveBanner = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="relative bg-gradient-to-r from-haldiram-coral via-haldiram-pink to-haldiram-orange rounded-3xl overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-4 left-8 w-16 h-16 border-2 border-primary-foreground/20 rounded-full" />
            <div className="absolute bottom-8 right-16 w-24 h-24 border-2 border-primary-foreground/20 rounded-full" />
            <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-primary-foreground/10 rounded-full" />
          </div>
          
          <div className="relative z-10 py-12 px-8 lg:px-16 text-center lg:text-left">
            <div className="lg:flex items-center justify-between">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary-foreground mb-4">
                  FESTIVE GIFTING
                </h2>
                <p className="text-primary-foreground/90 text-lg mb-6 max-w-md">
                  Celebrate every occasion with Haldiram's premium gift boxes and hampers
                </p>
                <Button 
                  className="bg-haldiram-yellow hover:bg-haldiram-yellow/90 text-secondary-foreground font-bold px-8 py-6 text-lg"
                >
                  Shop Now
                </Button>
              </div>
              <div className="hidden lg:flex items-center gap-4 mt-8 lg:mt-0">
                <div className="w-32 h-32 bg-primary-foreground/10 rounded-2xl flex items-center justify-center">
                  <span className="text-6xl">🎁</span>
                </div>
                <div className="w-28 h-28 bg-primary-foreground/10 rounded-2xl flex items-center justify-center">
                  <span className="text-5xl">🎊</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FestiveBanner;
