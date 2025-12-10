import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  bgColor?: string;
}

const ProductCard = ({ name, price, image, bgColor = "bg-haldiram-yellow/10" }: ProductCardProps) => {
  return (
    <div className="product-card-hover bg-card rounded-2xl overflow-hidden shadow-card group">
      <div className={`${bgColor} p-6 flex items-center justify-center h-48`}>
        <div className="text-center">
          <div className="w-24 h-24 mx-auto bg-background/50 rounded-full flex items-center justify-center mb-2">
            <span className="text-4xl">🍬</span>
          </div>
          <span className="text-sm font-medium text-foreground/70">{name}</span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-foreground mb-2 group-hover:text-haldiram-red transition-colors">
          {name}
        </h3>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-lg font-bold text-foreground">₹{price.toFixed(2)}</p>
            <p className="text-xs text-muted-foreground">Inc. GST</p>
          </div>
          <Button 
            size="icon" 
            className="bg-haldiram-red hover:bg-haldiram-red-dark text-primary-foreground rounded-full h-10 w-10"
          >
            <Plus className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
