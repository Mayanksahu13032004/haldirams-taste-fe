import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const products = [
  { name: "Kaju Roll", price: 909.00, bgColor: "bg-haldiram-yellow/15" },
  { name: "Coconut Dry Fruit Ladoo", price: 524.00, bgColor: "bg-haldiram-coral/10" },
  { name: "Patisa", price: 267.00, bgColor: "bg-haldiram-pink/10" },
  { name: "Minute Khana Dal Makhani", price: 95.00, bgColor: "bg-haldiram-orange/10" },
];

const IndiasFavourites = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-10">
          <div className="flex items-start gap-6 mb-6 lg:mb-0">
            {/* Decorative Image */}
            <div className="hidden md:block w-32 h-32 bg-haldiram-coral/20 rounded-2xl overflow-hidden flex-shrink-0">
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-6xl">🇮🇳</span>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                India's Favourites
              </h2>
              <p className="text-muted-foreground text-lg">
                Serving India It's Favourites In Every Way Possible.
              </p>
            </div>
          </div>
          <Button 
            variant="outline" 
            className="border-haldiram-red text-haldiram-red hover:bg-haldiram-red hover:text-primary-foreground font-semibold"
          >
            View All <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div 
              key={product.name}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard
                name={product.name}
                price={product.price}
                image=""
                bgColor={product.bgColor}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndiasFavourites;
