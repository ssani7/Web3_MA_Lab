export default function HeaderSection() {
  return (
    <main id="home" className="min-h-screen mt-16 mx-16">
      <h1 className={`font-raleway  text-8xl leading-snug `}>
        Grow at your best potential with{' '}
        <span className={'font-bold  web3'}>Web3MALab</span>
      </h1>
      <p className="text-xl mt-9">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed
        arcu risus. Etiam eget aliquam lorem. Sed <br />
        sed commodo ex. Proin facilisis ex leo, vel rutrum turpis interdum at.
        Suspendisse interdum justo eget libero <br /> pretium laoreet.
      </p>
      <button className="bg-[#0381FA] text-[18px] mt-10 px-10 py-3">
        Start a project with us
      </button>
      <div className="flex mt-20 gap-12 justify-end">
        <div className="drive ">
          <p className="text-box">Drive</p>
        </div>
        <div className="convert">
          <p className="text-box">Convert</p>
        </div>
        <div className=" thrive">
          <p className="text-box">Thrive</p>
        </div>
      </div>
    </main>
  );
}
