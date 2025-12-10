const TaglineSection = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="w-12 h-12 bg-haldiram-yellow/20 rounded-full flex items-center justify-center">
            <span className="text-haldiram-yellow text-2xl">✦</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Great Taste since 1937
          </h2>
          <div className="w-12 h-12 bg-haldiram-yellow/20 rounded-full flex items-center justify-center">
            <span className="text-haldiram-yellow text-2xl">✦</span>
          </div>
        </div>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Evolving with India's tastes to deliver the finest Flavours
        </p>
      </div>
    </section>
  );
};

export default TaglineSection;
