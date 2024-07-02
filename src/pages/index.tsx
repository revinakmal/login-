import Image from "next/image";
import { Inter } from "next/font/google";
import { useRouter } from 'next/router';


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();

    const handleClick = () => {
    // Lakukan navigasi menggunakan router.push()
    router.push('/home');
    };

  return (
    <div className='min-h-full flex items-center justify-center mt-32 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full space-y-8'>
        <div>
          <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>Sign in</h2>
          <p className='mt-2 text-center text-sm text-gray-600'>
            or
            <a href="#" className='font-medium text-indigio-600 hover:text-indigo-500 px-2'>sign up</a>
          </p>
          <form className='mt-8 spacey-y-6'>
            <div className='rounded-md shadow-md -space-y-px'>
              <input type="email" autoComplete='none' required className='appereance-none relative block w-full px-3 py-2 border border-gray-300 border-gray-500
                           text-gray-900 rounded-t-mb mb-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm' placeholder='email address'/>
            </div>
            <div>
               <input type="password" autoComplete='none' required className='appereance-none relative block w-full px-3 py-2 border border-gray-300 border-gray-500
                           text-gray-900 rounded-b-mb mb-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm' placeholder='password'/> 
            </div>
            <div className='flex items-center justify-between'>
              <input type='checkbox' className='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded'/>
              <label className='ml-2 block text-sm text-gray-900'>Remember me</label>
            </div>
            <div className='text-sm'>
              <a href='#' className='font medium text-indigo-600 hover:text-indigo-500'>Forgot your password</a>
            </div>
            <div>
             <button className='group-relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700
             focus:outline-none focus-ring-2 focus:ring-offset-2 focus:ring-indigo-500' onClick={handleClick}>Sign in</button>
            </div> 
            </form> 
        </div>
      </div>
    </div>
  )
}