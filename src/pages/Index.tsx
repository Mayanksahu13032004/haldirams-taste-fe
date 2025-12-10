import Header from "@/components/Header";
import AnnouncementBar from "@/components/AnnouncementBar";
import HeroBanner from "@/components/HeroBanner";
import TaglineSection from "@/components/TaglineSection";
import IndiasFavourites from "@/components/IndiasFavourites";
import FestiveBanner from "@/components/FestiveBanner";
import MobileAppSection from "@/components/MobileAppSection";
import CategoryCarousel from "@/components/CategoryCarousel";
import RecipesSection from "@/components/RecipesSection";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Top Red Bar */}
      <div className="h-1 bg-haldiram-red" />
      
      {/* Header */}
      <Header />
      
      {/* Announcement Bar */}
      <AnnouncementBar />
      
      {/* Hero Banner */}
      <HeroBanner />
      
      {/* Tagline */}
      <TaglineSection />
      
      {/* India's Favourites Products */}
      <IndiasFavourites />
      
      {/* Festive Banner */}
      <FestiveBanner />
      
      {/* Mobile App Section */}
      <MobileAppSection />
      
      {/* Category Carousel */}
      <CategoryCarousel />
      
      {/* Recipes Section */}
      <RecipesSection />
      
      {/* Footer */}
      <Footer />
      
      {/* Cookie Banner */}
      <CookieBanner />
    </div>
  );
};

export default Index;
