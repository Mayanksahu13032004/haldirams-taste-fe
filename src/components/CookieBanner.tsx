import { useState } from "react";
import { Button } from "@/components/ui/button";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border shadow-lg z-50 py-4 px-4">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-foreground text-center sm:text-left">
          By continuing to use our website you are agreeing to our{" "}
          <a href="#" className="text-haldiram-red hover:underline font-medium">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="#" className="text-haldiram-red hover:underline font-medium">
            Terms and Conditions
          </a>
          .
        </p>
        <Button 
          onClick={() => setIsVisible(false)}
          className="bg-haldiram-red hover:bg-haldiram-red-dark text-primary-foreground font-semibold px-8"
        >
          ACCEPT
        </Button>
      </div>
    </div>
  );
};

export default CookieBanner;
