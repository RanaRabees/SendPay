export default function Feedback() {
  return (
    <section className="bg-[#6C63FF] p-6 md:p-16 relative overflow-hidden">
      <div className="absolute top-10 left-10 sm:left-36 w-[120px] sm:w-[195px] h-[120px] sm:h-[195px] bg-[#E5E5E5] opacity-25 rounded-full"></div>
      <div className="absolute top-[40%] left-[10%] sm:left-1/4 w-[200px] sm:w-[345px] h-[200px] sm:h-[371px] bg-[#E6E8EC] opacity-25 rounded-full"></div>
      <div className="absolute top-10 right-10 w-[120px] sm:w-[195px] h-[120px] sm:h-[195px] bg-gray-300 opacity-30 rounded-full"></div>

      <div className="container mx-auto flex flex-col md:flex-row md:items-center">
        <div className="md:w-1/4 p-4 md:p-13 md:mr-10 text-white font-light italic">
          <h2 className="text-3xl md:text-4xl mb-4">People Are Saying About Us</h2>
          <div className="w-16 h-1 bg-gray-300 mb-7"></div>
          <div className="mt-4 flex items-center gap-2 cursor-pointer">
            <span className="text-xl md:text-[22px]">See all</span>
            <button className="w-[36px] h-[36px] bg-[#FFFFFF] font-bold text-[#000000] rounded-full flex items-center justify-center">
              &gt;
            </button>
          </div>
        </div>

        <div className="md:w-2/3 flex flex-col md:flex-row gap-4 mt-6 md:mt-0 overflow-x-hidden md:overflow-x-visible">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full md:w-64 min-w-[250px] flex-shrink-0">
            <p className="text-gray-700 italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in aliquet justo. Nulla varius vitae.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <img src="/dev1.png" alt="dev1" className="w-10 h-10 rounded-full" />
              <div>
                <h4 className="text-gray-900 font-semibold">Dev opter</h4>
                <p className="text-gray-500 text-sm">Designer</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 w-full md:w-64 min-w-[250px] flex-shrink-0">
            <p className="text-gray-700 italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in aliquet justo. Nulla varius vitae.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <img src="/dev2.png" alt="dev2" className="w-10 h-10 rounded-full" />
              <div>
                <h4 className="text-gray-900 font-semibold">Dev opter</h4>
                <p className="text-gray-500 text-sm">Designer</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 w-full md:w-64 min-w-[250px] flex-shrink-0">
            <p className="text-gray-700 italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in aliquet justo. Nulla varius vitae.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <img src="/dev3.png" alt="dev3" className="w-10 h-10 rounded-full" />
              <div>
                <h4 className="text-gray-900 font-semibold">Dev opter</h4>
                <p className="text-gray-500 text-sm">Designer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}