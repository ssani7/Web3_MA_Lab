import Image from 'next/image';

export default function AboutUs() {
  return (
    <div id="aboutus" className="mx-16 flex gap-16 mb-16">
      <div>
        <h3 className="text-[40px] mb-12 font-bold">About us</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed
          arcu risus. Etiam eget aliquam lorem. Sed sed commodo ex. Proin
          facilisis ex leo, vel rutrum turpis interdum at. Suspendisse interdum
          justo eget libero pretium laoreet. Integer feugiat massa vitae lacinia
          commodo. Mauris a tellus nibh. Ut dictum sem eget ante laoreet
          efficitur. Donec pharetra ac dui et sodales Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Integer sed arcu risus. Etiam eget
          aliquam lorem. Sed sed commodo ex. Proin facilisis ex leo, vel rutrum
          turpis interdum at. Suspendisse interdum justo eget libero pretium
          laoreet. Integer feugiat massa vitae lacinia commodo. Mauris a tellus
          nibh. Ut dictum sem eget ante laoreet efficitur. Donec pharetra ac dui
          et sodales. Praesent fermentum venenatis quam ut consectetur.
        </p>
      </div>
      <div>
        <div className="w-96 h-80 flex-shrink-0">
          <Image
            className="object-cover !relative"
            src={'/assets/about-us.png'}
            fill
            sizes="(max-width: 768px) 500px, (max-width: 1280px) 45vw, 900px"
            alt="about-us"
          />
        </div>
        <p className="mt-16 text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed
          arcu risus. Etiam eget aliquam lorem. Sed sed commodo ex. Proin
          facilisis ex leo, vel rutrum turpis interdum at. Suspendisse interdum
          justo eget libero pretium laoreet. Integer feugiat massa vitae lacinia
          commodo. Mauris a tellus nibh.
        </p>
      </div>
    </div>
  );
}
