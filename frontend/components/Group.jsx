const Group = () => {
  return (
    <div className='flex justify-around items-center shadow dark:bg-light text-altdark font-medium rounded-sm overflow-hidden relative p-8 my-4 transition transform hover:scale-105'>
      <div className='mr-8 rounded-full overflow-hidden border-r-4 border-yellow-300 shadow-lg'>
        <img loading='lazy' src='https://picsum.photos/100/100' alt='' />
      </div>
      <div>
        <h3 className='w-48'>Lorem ipsum dolor sit amet</h3>
        <span className='text-altdark opacity-70'>participants count</span>
        <span className='text-altdark opacity-70'>date created</span>
      </div>
    </div>
  );
};

export default Group;
