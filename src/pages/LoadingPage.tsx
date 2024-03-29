const LoadingPage: React.FC = () => {
  return (
    <div className="w-full h-[100vh] bg-[url('/03-waiting-page/waiting-bg.png')] bg-contain relative">
      <div className="absolute repeat-infinite animate-spin-slow top-[185px] right-[280px]">
        <img
          src="/03-waiting-page/sun.svg"
          alt="sun"
          width="500px"
          height="200px"
        />
      </div>
        <div className="absolute bottom-[750px] right-[60px]">
        <img
            src="/03-waiting-page/loading-placeholder.svg"
            alt="loading"
            width="1000px"
            height="200px"
            />
        </div>
    </div>
  );
};

export { LoadingPage };
