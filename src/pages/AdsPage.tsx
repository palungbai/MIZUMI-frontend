const AdsPage = () => {
  return (
    <div className="relative flex flex-col w-1080 h-1920 overflow-hidden bg-[url('/06-advertising-page/advertising-page-bg.png')] bg-contain">
      <img
        src="../06-advertising-page/qr-code.png"
        alt="qr"
        className="w-[535px] h-[525px] mt-[335px] mx-auto"
      />
      {/* <div className="w-[531px] h-[523px] mt-[335px] mx-auto bg-black"> </div> */}
      <a
        href="/"
        className="font-primaryBold text-white text-7xl py-3 px-14 rounded-full border-4 border-white bg-gradient-to-r from-button-primary to-button-secondary shadow-2xl z-50 flex flex-row items-center gap-4 max-w-2xl mx-auto mt-[715px]"
      >
        รับครีมกันแดด
        <img src="/next-icon.svg" />
      </a>
    </div>
  );
};

export default AdsPage;
