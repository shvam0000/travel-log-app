import { useState } from 'react';
import axios from 'axios';

const AuthForm = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const authSubmitHandler = (e: any) => {
    e.preventDefault();
    // if (isLogin) {
    //   url = '';
    // } else {
    //   url = '';
    // }
  };

  return (
    <div className='min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full space-y-8'>
        <div>
          <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
            {isLogin ? 'Sign in to your account' : 'Register'}
          </h2>
        </div>
        <form onSubmit={authSubmitHandler} className='mt-8 space-y-6'>
          <input type='hidden' name='remember' value='true' />
          <div className='rounded-md shadow-sm -space-y-px'>
            <div>
              <label htmlFor='email-address' className='sr-only'>
                Email address
              </label>
              <input
                type='email'
                autoComplete='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-500 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:z-10 sm:text-sm'
                placeholder='Email address'
              />
            </div>
            <div>
              <label htmlFor='password' className='sr-only'>
                Password
              </label>
              <input
                type='password'
                autoComplete='current-password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-500 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:z-10 sm:text-sm'
                placeholder='Password'
              />
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'>
              {isLogin ? 'Sign in' : 'Register'}
            </button>
          </div>

          <div className='flex justify-center font-bold'>OR</div>

          <div>
            <button
              onClick={() => setIsLogin(!isLogin)}
              className='group relative w-1/4 mx-auto flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'>
              {isLogin ? 'Register' : 'Login'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;