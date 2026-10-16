type PostCardProps = {
  textContent: string;
  imgSrc: string;
  avatarSrc: string;
  author: string;
  date: string;
  numLikes: number;
  numComments: number;
  numReposts: number;
};

function PostCard({
  textContent,
  imgSrc,
  avatarSrc,
  author,
  date,
  numLikes,
  numComments,
  numReposts,
}: PostCardProps) {
  return (
    <div className='m-3 rounded-lg bg-[#252728] text-[#e2e5e9]'>
      {/* Post Header */}
      <div className='p-2.5'>
        <div className='flex items-center justify-between'>
          {/* Username, Avatar, DatePosted */}
          <div className='flex items-center gap-2'>
            <img
              src={avatarSrc}
              height={40}
              width={40}
              className='size-10 rounded-full'
            />
            <div className='flex flex-col justify-center gap-1 leading-none font-semibold'>
              <b className=''>{author}</b>
              <time className='text-sm text-[#b0b3b8]'>{date}</time>
            </div>
          </div>
          {/* See more, Close icons */}
          <div className='flex gap-2'>
            {/* Ellipsis icon */}
            <button 
              className='cursor-pointer'
              onClick={() => console.log('Clicked on ellipsis')}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='size-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z'
                />
              </svg>
            </button>
            {/* X (close button) icon */}
            <button 
              className='cursor-pointer'
              onClick={() => console.log('Clicked on x')}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='size-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6 18 18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>
        </div>
        <div>{textContent}</div>
      </div>

      {/* Optional Image */}
      {imgSrc && (
        <div>
          <img className='mx-auto' src={imgSrc} />
        </div>
      )}

      {/* Likes, Comments, Reposts */}
      <div className='flex gap-4 px-3 py-2'>
        {/* Likes */}
        <div className='flex items-center gap-1 text-xs font-semibold'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.3}
            stroke='currentColor'
            className='size-5'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z'
            />
          </svg>
          {numLikes !== 0 && numLikes}
        </div>

        {/* Comments */}
        <div className='flex items-center gap-1 text-xs font-semibold'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.3}
            stroke='currentColor'
            className='size-5'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z'
            />
          </svg>
          {numComments !== 0 && numComments}
        </div>

        {/* Reposts */}
        <div className='flex items-center gap-1 text-xs font-semibold'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.3}
            stroke='currentColor'
            className='size-5'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3'
            />
          </svg>
          {numReposts !== 0 && numReposts}
        </div>
      </div>
    </div>
  );
}

export default PostCard;

{
  /* <PostCard 
  textContent='I agree, why?...' 
  imgSrc='https://picsum.photos/500' 
/> */
}
