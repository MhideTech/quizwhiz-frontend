import { Button } from '@/common/components/ui/button';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '@/features/auth/useAuth';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/common/components/ui/dropdown-menu';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, isLoggedIn } = useAuth();

  const isAuthenticated = Boolean(user && isLoggedIn);

  const avatar = (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className='w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-semibold text-gray-700 hover:bg-gray-300'>
          {user?.name?.charAt(0).toUpperCase() || 'U'}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' className='w-40'>
        <DropdownMenuItem asChild>
          <Link to='/dashboard'>Dashboard</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to='/profile'>Profile</Link>
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => console.log('TODO: Logout')}>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );

  return (
    <nav className='bg-white py-4 shadow-sm'>
      <div className='container mx-auto px-4 flex justify-between items-center'>
        {/* Logo */}
        <Link to='/' className='flex items-center'>
          <span className='text-2xl font-bold bg-gradient-to-r from-quiz-primary to-quiz-blue text-transparent bg-clip-text'>
            QuizWhizz
          </span>
        </Link>

        {/* Center Nav Links */}
        <div className='hidden md:flex items-center space-x-8 mx-auto'>
          <Link to='/' className='nav-link font-medium'>
            Home
          </Link>
          <Link to='/feed' className='nav-link font-medium'>
            Explore
          </Link>
          <Link to='/friends' className='nav-link font-medium'>
            Friends
          </Link>
        </div>

        {/* Right Auth Buttons or Avatar */}
        <div className='hidden md:flex items-center space-x-4'>
          {isAuthenticated ? (
            avatar
          ) : (
            <>
              <Link to='/auth/signup'>
                <Button variant='outline' className='rounded-full'>
                  Sign Up
                </Button>
              </Link>
              <Link to='/auth/login'>
                <Button className='rounded-full bg-quiz-primary text-white hover:bg-quiz-secondary'>
                  Login
                </Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Toggle */}
        <button className='md:hidden' onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            {isMobileMenuOpen ? (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            ) : (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className='md:hidden bg-white border-t mt-2 animate-fade-in'>
          <div className='container mx-auto px-4 py-3 space-y-3'>
            <Link
              to='/'
              onClick={() => setIsMobileMenuOpen(false)}
              className='block py-2 px-4 text-sm hover:bg-gray-50 rounded-md'
            >
              Home
            </Link>
            <Link
              to='/feed'
              onClick={() => setIsMobileMenuOpen(false)}
              className='block py-2 px-4 text-sm hover:bg-gray-50 rounded-md'
            >
              Explore
            </Link>
            <Link
              to='/friends'
              onClick={() => setIsMobileMenuOpen(false)}
              className='block py-2 px-4 text-sm hover:bg-gray-50 rounded-md'
            >
              Friends
            </Link>

            {isAuthenticated ? (
              <div className='space-y-2'>
                <Link to='/dashboard' onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className='w-full'>Dashboard</Button>
                </Link>
                <Link to='/profile' onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant='outline' className='w-full'>
                    Profile
                  </Button>
                </Link>
                <Button
                  variant='ghost'
                  className='w-full'
                  onClick={() => console.log('TODO: Logout')}
                >
                  Logout
                </Button>
              </div>
            ) : (
              <div className='flex flex-col space-y-2 p-4'>
                <Link to='/auth/signup'>
                  <Button variant='outline' className='w-full rounded-full'>
                    Sign Up
                  </Button>
                </Link>
                <Link to='/auth/login'>
                  <Button className='w-full rounded-full bg-quiz-primary hover:bg-quiz-secondary text-white'>
                    Login
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
