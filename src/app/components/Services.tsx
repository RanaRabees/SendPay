import Image from 'next/image';

export default function Home() {
  return (
    <div
      className="min-h-screen bg-center bg-no-repeat bg-contain py-16 px-4"
      style={{ backgroundImage: "url('/servicesbackground.png')" }}
    >
      <div className="container mx-auto max-w-7xl">
        <div className="text-center">
          <div className="flex items-center justify-center flex-wrap">
            <h1 className="text-[28px] md:text-[44px] mr-2 font-semibold mb-10 text-[#000000] leading-relaxed md:leading-snug w-full md:w-auto">
              We are giving Services
            </h1>
            <div className="flex items-center">
              <Image
                src="/logo.png"
                alt="Sendpay Logo"
                width={40}
                height={40}
                className="mr-2"
              />
              <span className="text-[22px] md:text-[25px] text-[#6C63FF] font-semibold">Sendpay</span>
            </div>
          </div>
          <div className="w-16 h-1 bg-gray-300 mx-auto mb-10"></div>
          <p className="text-[#B7B3B3] mb-8 md:mb-12 w-full md:w-[80%] lg:w-[500px] mx-auto text-[16px] md:text-[18px] font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
          <div className="bg-white rounded-lg p-4 md:p-6 shadow-md flex items-start">
            <div className="p-2 md:p-3 mr-4">
              <img src="/sr1.png" alt="service1" className="max-w-[50px] md:max-w-[90px]" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">Bank Transfer</h3>
              <p className="text-[#B7B3B3] p-2 text-sm md:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a nunc eu.</p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 md:p-6 shadow-md flex items-start">
            <div className="p-2 md:p-3 mr-4">
              <img src="/sr2.png" alt="service2" className="max-w-[50px] md:max-w-[90px]" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">Fast Transfer</h3>
              <p className="text-[#B7B3B3] p-2 text-sm md:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a nunc eu.</p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 md:p-6 shadow-md flex items-start">
            <div className="p-2 md:p-3 mr-4">
              <img src="/sr3.png" alt="service3" className="max-w-[50px] md:max-w-[90px]" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">Mobile Recharge</h3>
              <p className="text-[#B7B3B3] p-2 text-sm md:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a nunc eu.</p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 md:p-6 shadow-md flex items-start">
            <div className="p-2 md:p-3 mr-4">
              <img src="/sr4.png" alt="service4" className="max-w-[50px] md:max-w-[90px]" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">Easy and Fast</h3>
              <p className="text-[#B7B3B3] p-2 text-sm md:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a nunc eu.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}