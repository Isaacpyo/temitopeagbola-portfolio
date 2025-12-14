const BackgroundGrid = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none h-full w-full overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Radial Fade (So it blends nicely) */}
      <div className="absolute inset-0 bg-white/50 dark:bg-slate-950/50 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,transparent_70%,#000_100%)]"></div>
    </div>
  );
};

export default BackgroundGrid;