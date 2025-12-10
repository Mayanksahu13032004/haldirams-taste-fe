import { Button } from "@/components/ui/button";
import { Smartphone, Check } from "lucide-react";

const features = [
  "Easy delivery, dine-in & takeaway",
  "Access to the complete range of Haldiram's",
  "Exclusive offers & rewards",
];

const MobileAppSection = () => {
  return (
    <section className="py-16 bg-haldiram-red">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Haldiram's Mobile App Coming Soon!
            </h2>
            <ul className="space-y-4 mb-8">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-haldiram-yellow rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="h-4 w-4 text-secondary-foreground" />
                  </div>
                  <span className="text-lg">{feature}</span>
                </li>
              ))}
            </ul>
            <Button 
              className="bg-haldiram-yellow hover:bg-haldiram-yellow/90 text-secondary-foreground font-bold px-8 py-6 text-lg"
            >
              Coming Soon
            </Button>
          </div>

          {/* Phone Mockup */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-[500px] bg-foreground rounded-[3rem] p-3 shadow-2xl">
                <div className="w-full h-full bg-background rounded-[2.5rem] overflow-hidden">
                  <div className="h-full bg-gradient-to-b from-haldiram-coral/20 to-haldiram-yellow/20 flex flex-col items-center justify-center p-6">
                    <Smartphone className="h-16 w-16 text-haldiram-red mb-4" />
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto bg-haldiram-red rounded-2xl flex items-center justify-center mb-4">
                        <span className="text-primary-foreground font-bold text-xl">HR</span>
                      </div>
                      <p className="text-foreground font-semibold">Haldiram's</p>
                      <p className="text-muted-foreground text-sm">Mobile App</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-haldiram-yellow/30 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-haldiram-coral/30 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileAppSection;
