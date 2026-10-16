function ArrayMapping() {
  const nums = [11,22,33,44,55,66,77];
  const winners = [
    {
      firstName: 'John',
      lastName: 'Smith'
    },
    {
      firstName: 'Harry',
      lastName: 'Luo'
    },
    {
      firstName: 'Sai',
      lastName: 'Michael'
    }
  ];

  return(
    // JSX Domain - creating markup that goes on our webpage
    <>
      <h2>Winning Lottery Numbers</h2>
      <div className='flex gap-x-4 font-bold text-green-900 text-center'>
        {
          nums.map((num) => <span className='hover:text-green-600 underline size-8 pt-1 hover:bg-slate-200 rounded-full'>{num}</span>)
        }
      </div>

      <h2>Past Lottery Winners</h2>
      <div>
        {winners.map(
          (winner) => <p>{winner.firstName} {winner.lastName}</p>
        )}
      </div>
    </>
  );
}

export default ArrayMapping;