const ResultPage = () => {
  return (
    <div className="relative flex flex-col w-1080 h-1920 overflow-hidden ">
      <img
        src="../04ResultPage/ResultPageBg.png"
        alt="ResultPageBackground"
        width={1080}
        height={1920}
      />
      <div className="absolute bg-black w-[460px] h-[666px] bottom-[444px] left-[70px] rounded-2xl z-10"></div>
      <div className="absolute bg-black w-[460px] h-[666px] bottom-[444px] right-[70px] rounded-2xl z-10"></div>
    </div>
  );
};

export default ResultPage;
