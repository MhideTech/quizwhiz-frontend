import { ReactNode, useEffect } from 'react';
import { SidebarProvider, SidebarTrigger } from '@/common/components/ui/sidebar';
import { AppSidebar } from '@/common/components/ui/AppSideBar';
import { Avatar, AvatarFallback } from '@/common/components/ui/avatar';
import { Button } from '@/common/components/ui/button';
import { LogOut } from 'lucide-react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@/features/auth/useAuth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = () => {
  const { user } = useAuth();

  const handleLogout = () => {
    // todo api func
    console.log('Logout clicked from topbar');
  };
  if (!user) return null;

  return (
    <SidebarProvider>
      <div className='min-h-screen flex w-full bg-background'>
        <AppSidebar />

        <div className='flex-1 flex flex-col'>
          {/* Top Navigation Bar */}
          <header className='sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
            <div className='container flex h-14 items-center justify-between px-4'>
              <div className='flex items-center gap-4'>
                <SidebarTrigger className='md:hidden' />
                <div className='hidden md:block'>
                  <SidebarTrigger />
                </div>
              </div>

              {/* User Menu */}
              <div className='flex items-center gap-4'>
                <div className='flex items-center gap-3'>
                  <Avatar className='h-8 w-8'>
                    <AvatarFallback className='bg-primary text-primary-foreground'>
                      JD
                    </AvatarFallback>
                  </Avatar>
                  <div className='hidden sm:block'>
                    <p className='text-sm font-medium leading-none'>{user.name}</p>
                    <p className='text-xs text-muted-foreground'>Quiz Creator</p>
                  </div>
                </div>

                <Button
                  variant='ghost'
                  size='sm'
                  onClick={handleLogout}
                  className='text-muted-foreground hover:text-foreground'
                >
                  <LogOut className='w-4 h-4 mr-2' />
                  <span className='hidden sm:inline'>Logout</span>
                </Button>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className='flex-1 overflow-auto'>
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
