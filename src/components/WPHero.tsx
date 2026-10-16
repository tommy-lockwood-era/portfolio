function Hero() {
  return (
    // CSS flexbox - center using justify-content: center; AND/OR align-items:center;
    <section className='bg-hero-gray text-[oklch(0.2586 0.0767 251.7)] mx-auto min-h-svh w-full min-w-75 px-3 pt-20 text-center overflow-x-hidden'>
      {/* <div className='flex flex-col relative'>
        <img src='https://picsum.photos/400' className='w-1/2 max-w-106.25 fixed -right-30 opacity-70' width={425} height={425} />
        <img src='https://picsum.photos/400' className='w-1/2 max-w-106.25 absolute -left-30 opacity-70' width={425} height={425} />
      </div> */}
      <div className='mx-auto max-w-3xl'>
        <h1 className='flex flex-col text-5xl xl:text-[4rem]'>
          <span className='tracking-none font-(family-name:--sans) text-xs uppercase lg:text-base'>
            Managed Hosting & Beyond
          </span>
          Intelligent platforms built for your digital&nbsp;future
        </h1>
        <p>
          Powering 5 million websites, WP Engine brings together
          enterprise-grade software, managed hosting, developer tools, and
          cutting-edge AI across its ecosystem to help sites get found, gain
          attention, and convert.
        </p>
        <div>
          <a>Plans & Pricing</a>
          <a>Get in touch</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
