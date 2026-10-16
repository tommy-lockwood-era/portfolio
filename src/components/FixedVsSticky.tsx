function FixedVsSticky() {
  return (
    <section className=' bg-slate-300'>
      <div className='fixed left-0 border-2 border-indigo-900 bg-indigo-500 px-12 py-8 text-3xl font-bold text-white'>
        Fixed
      </div>
      <div className='sticky top-0 inline-block border-2 border-rose-900 bg-rose-500 px-12 py-8 text-3xl font-bold text-white'>
        Sticky
      </div>
    </section>
  );
}

export default FixedVsSticky;
