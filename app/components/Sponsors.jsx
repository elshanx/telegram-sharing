import Link from 'next/link';

const Sponsors = () => {
  return (
    <div className='blog-post'>
      <div className='blog-posts__img'>
        <img src='https://picsum.photos/200/300' alt='' />
      </div>
      <div className='blog-post__info'>
        <div className='blog-post__date'>
          <span>Sunday</span>
          <span>october 27 2021</span>
        </div>
        <h1 className='blog-post__title'>lorem ipsum</h1>
        <p className='blog-post__tex'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Laudantium enim ut quisquam quasi eligendi suscipit porro
          corporis perspiciatis dolorum nobis sed in nulla maxime nemo quo,
          impedit ab deserunt similique.
        </p>
        <Link href='/#' className='blog-post__cta'>
          read more
        </Link>
      </div>
    </div>
  );
};

export default Sponsors;
