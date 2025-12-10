const AnnouncementBar = () => {
  const message = "Big News! From 22nd Sept 2025, many of your Haldirams favourites just got more pocket-friendly with revised GST rate. We are passing the savings straight to you. Enjoy more, spend less!";
  
  return (
    <div className="bg-haldiram-red py-2 overflow-hidden">
      <div className="animate-scroll-left whitespace-nowrap flex">
        <span className="text-primary-foreground text-sm font-medium mx-8">{message}</span>
        <span className="text-primary-foreground text-sm font-medium mx-8">{message}</span>
        <span className="text-primary-foreground text-sm font-medium mx-8">{message}</span>
        <span className="text-primary-foreground text-sm font-medium mx-8">{message}</span>
      </div>
    </div>
  );
};

export default AnnouncementBar;
