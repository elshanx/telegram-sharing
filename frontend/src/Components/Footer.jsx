const Footer = () => {
  return (
    <footer className='text-white relative pt-1'>
      <div className='container mx-auto px-6'>
        <div className='sm:flex sm:mt-8'>
          <div className='mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between'>
            <div className='flex flex-col'>
              <span className='font-bold text-gray-700 uppercase mb-2'>
                Footer header 1
              </span>
              <span className='my-2'>
                <a href='#' className='text-md'>
                  link 1
                </a>
              </span>
              <span className='my-2'>
                <a href='#' className='text-md'>
                  link 1
                </a>
              </span>
              <span className='my-2'>
                <a href='#' className='text-md'>
                  link 1
                </a>
              </span>
            </div>
            <div className='flex flex-col'>
              <span className='font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2'>
                Footer header 2
              </span>
              <span className='my-2'>
                <a href='#' className='text-md'>
                  link 1
                </a>
              </span>
              <span className='my-2'>
                <a href='#' className=' text-md'>
                  link 1
                </a>
              </span>
              <span className='my-2'>
                <a href='#' className='text-md'>
                  link 1
                </a>
              </span>
            </div>
            <div className='flex flex-col'>
              <span className='font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2'>
                Footer header 3
              </span>
              <span className='my-2'>
                <a href='#' className=' text-md'>
                  link 1
                </a>
              </span>
              <span className='my-2'>
                <a href='#' className=' text-md'>
                  link 1
                </a>
              </span>
              <span className='my-2'>
                <a href='#' className=' text-md'>
                  link 1
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full mx-auto px-6'>
        <div className='mt-16 border-t-2 flex flex-col items-center'>
          <div className='sm:w-2/3 text-center py-6'>
            <p className='text-sm font-bold mb-2'>
              © {new Date().getFullYear()} by{' '}
              <a
                target='_blank'
                rel='noreferrer noopener'
                href='https://www.linkedin.com/in/elshanx/'
              >
                <span className='transition-all hover:text-altprimary'>
                  Elshan Akbarov
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
