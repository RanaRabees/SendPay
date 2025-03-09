import Image from 'next/image';

export default function Header() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[#000000] leading-relaxed md:leading-snug">
          How it Works
        </h1>
        <div className="w-16 h-1 bg-gray-300 mx-auto mb-6"></div>
        <p className="text-gray-600 mb-12 w-full md:w-[500px] mx-auto text-lg md:text-xl font-semibold px-2 sm:px-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        <div className="text-center transform transition-transform hover:scale-105">
          <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
            <Image
              src="/ellipse1.png"
              alt="Image 1"
              fill
              className="absolute inset-0 object-cover rounded-full"
            />
            <div className="absolute inset-0 bg-[#C4C4C4] opacity-[0] rounded-full transition-opacity hover:opacity-30 hover:shadow-lg hover:border-4 hover:border-white"></div>
          </div>
          <h3 className="text-xl md:text-2xl text-[#000000] font-semibold mb-2">In-app transfer</h3>
          <p className="text-[#000000] text-sm md:text-base max-w-xs mx-auto transition-colors hover:font-medium px-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec p
          </p>
        </div>

        <div className="text-center transform transition-transform hover:scale-105">
          <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
            <Image
              src="/ellipse2.png"
              alt="Image 2"
              fill
              className="absolute inset-0 object-cover rounded-full"
            />
            <div className="absolute inset-0 bg-[#C4C4C4] opacity-[0] rounded-full transition-opacity hover:opacity-30 hover:shadow-lg hover:border-4 hover:border-white"></div>
          </div>
          <h3 className="text-xl md:text-2xl text-[#000000] font-semibold mb-2">In-app transfer</h3>
          <p className="text-[#000000] text-sm md:text-base max-w-xs mx-auto transition-colors hover:font-medium px-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec p
          </p>
        </div>

        <div className="text-center transform transition-transform hover:scale-105">
          <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
            <Image
              src="/ellipse3.png"
              alt="Image 3"
              fill
              className="absolute inset-0 object-cover rounded-full"
            />
            <div className="absolute inset-0 bg-[#C4C4C4] opacity-[0] rounded-full transition-opacity hover:opacity-30 hover:shadow-lg hover:border-4 hover:border-white"></div>
          </div>
          <h3 className="text-xl md:text-2xl text-[#000000] font-semibold mb-2">In-app transfer</h3>
          <p className="text-[#000000] text-sm md:text-base max-w-xs mx-auto transition-colors hover:font-medium px-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec p
          </p>
        </div>
      </div>
    </div>
  );
}