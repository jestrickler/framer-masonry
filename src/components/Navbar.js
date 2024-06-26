const Navbar = () => (
  <div className='navbar sticky top-0 z-10 bg-base-100 shadow-md'>
    <svg
      stroke='currentColor'
      fill='currentColor'
      stroke-width='0'
      viewBox='0 0 16 16'
      height='2em'
      width='2em'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z'></path>
      <path d='M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z'></path>
    </svg>
    <span className='ml-2 text-3xl font-bold'>PIX</span>
  </div>
)
export { Navbar }
