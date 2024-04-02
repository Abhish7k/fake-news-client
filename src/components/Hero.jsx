const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-4">
        <a href="/" className="flex items-center">
          <img src="/logo.svg" alt="" className="h-7" />
          <h1 className="pl-2 font-bold text-2xl">FakeNewsFindr</h1>
        </a>

        <button
          type="button"
          onClick={() => window.open("/", "_blank")}
          className="
          inline-block py-2 text-sm text-white bg-gray-800 px-7 hover:bg-gray-700 rounded-xl
          "
        >
          GitHub
        </button>
      </nav>

      <div className="head_text">
        <h1 className="pb-4">
          Swiftly Unmask Fake News with <br className="max-md:hidden" />
        </h1>
        <span className="gradient-text font-bold text-transparent animate-gradient">
          Artificial Intelligence
        </span>
      </div>
      <h2 className="desc">
        Harness the power of swift AI detection, unveiling truth by unmasking
        fake news on our dedicated platform
      </h2>
    </header>
  );
};

export default Hero;
