import { avatar } from '../assets';
import data from '../data/data';
import Layout from '../layout/Layout';

const Home = () => {
  return (
    <Layout>
      <div className='mx-[5vw] '>
        <div className='flex md:flex-row flex-col md:items-stretch items-center pb-6 mb-6 border-b border-[#a4a096] pt-5 gap-5 w-full'>
          <div className=''>
            <img
              src={avatar}
              alt=''
              className=' rounded-xl w-[150px] md:w-[200px]'
            />
          </div>
          <div className=' w-full flex flex-col justify-between'>
            <div className='md:text-left text-center'>
              <h3 className='text-3xl font-semibold'>Bessie Coleman</h3>
              <p className='font-light text-xl text-[#63615c]'>Civil Aviator</p>
            </div>
            <div className='flex md:flex-row flex-col gap-4 justify-between items-center w-full'>
              <span className='flex items-center text-[#63615c] gap-2'>
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <rect
                    x='13.0676'
                    y='4.87506'
                    width='11.6506'
                    height='3.21396'
                    transform='rotate(135 13.0676 4.87506)'
                    fill='#212121'
                  />
                  <path
                    d='M14.2035 1.4662C14.8311 2.09377 14.8311 3.11125 14.2035 3.73881L13.6354 4.30697L11.3628 2.03436L11.9309 1.4662C12.5585 0.83864 13.576 0.83864 14.2035 1.4662Z'
                    fill='#212121'
                  />
                  <path
                    d='M1.54021 13.4837L2.55674 10.8408L4.82935 13.1134L2.18637 14.1299C1.782 14.2854 1.38468 13.8881 1.54021 13.4837Z'
                    fill='#212121'
                  />
                </svg>
                <p>Edit Profile</p>
              </span>
              <button className='bg-[#212121] md:w-fit w-full justify-center rounded-lg p-5 py-3 flex text-[#FCF5E5] items-center gap-3'>
                <svg
                  width='14'
                  height='14'
                  viewBox='0 0 14 14'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M1 7L13 7'
                    stroke='#FCF5E5'
                    stroke-width='2'
                    stroke-linecap='round'
                  />
                  <path
                    d='M7 13L7 1'
                    stroke='#FCF5E5'
                    stroke-width='2'
                    stroke-linecap='round'
                  />
                </svg>
                New Post
              </button>
            </div>
          </div>
        </div>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 pb-6 gap-6'>
          {data.map((item) => (
            <div key={item.id} className=''>
              <img src={item.img} className='w-full rounded-lg' />
              <div className='flex justify-between mt-3'>
                <h4>{item.name}</h4>
                <svg
                  width='23'
                  height='20'
                  viewBox='0 0 23 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g opacity='0.4'>
                    <path
                      d='M15.9512 1.05664C17.3161 0.856584 18.8067 1.15981 20.1602 2.32812L20.4287 2.57324C22.6597 4.72264 22.3285 8.02556 20.5967 9.89355L20.4248 10.0693L11.5 18.6025L2.57422 10.0693H2.5752C0.754421 8.29659 0.296669 5.00618 2.36328 2.78516L2.57129 2.57324C3.99417 1.20243 5.593 0.843258 7.04883 1.05664C8.5402 1.27524 9.89546 2.09997 10.7266 3.11523L11.5 4.06055L12.2734 3.11523C13.1045 2.09997 14.4598 1.27524 15.9512 1.05664Z'
                      stroke='#212121'
                      stroke-width='2'
                    />
                  </g>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
