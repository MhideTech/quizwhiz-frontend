import {
  LayoutDashboard,
  FileQuestion,
  FileText,
  Eye,
  Plus,
  Play,
  BarChart3,
  Settings,
  User,
  Bell,
  Shield,
  LogOut,
  Brain,
} from 'lucide-react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  useSidebar,
} from '@/common/components/ui/sidebar';

const mainNavItems = [
  {
    title: 'Dashboard',
    url: '/dashboard',
    icon: LayoutDashboard,
  },
];

const quizNavItems = [
  {
    title: 'View All Quizzes',
    url: '/dashboard/quiz',
    icon: FileQuestion,
  },
  {
    title: 'Drafts',
    url: '/dashboard/quizzes/drafts',
    icon: FileText,
  },
  {
    title: 'Published',
    url: '/dashboard/quizzes/published',
    icon: Eye,
  },
  {
    title: 'Create Quiz',
    url: '/dashboard/quiz/create',
    icon: Plus,
  },
];

const sessionNavItems = [
  {
    title: 'Live Sessions',
    url: '/dashboard/sessions',
    icon: Play,
  },
];

const analyticsNavItems = [
  {
    title: 'Analytics',
    url: '/dashboard/analytics',
    icon: BarChart3,
  },
];

const settingsNavItems = [
  {
    title: 'Profile',
    url: '/dashboard/settings/profile',
    icon: User,
  },
  {
    title: 'Preferences',
    url: '/dashboard/settings/preferences',
    icon: Settings,
  },
  {
    title: 'Notifications',
    url: '/dashboard/settings/notifications',
    icon: Bell,
  },
  {
    title: 'Security',
    url: '/dashboard/settings/security',
    icon: Shield,
  },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const collapsed = state === 'collapsed';

  const navigate = useNavigate();

  const isActive = (path: string) => currentPath === path;
  const getNavClass = (isActive: boolean) =>
    isActive
      ? 'bg-sidebar-accent text-sidebar-accent-foreground font-medium'
      : 'hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground';

  const handleLogout = () => {
    console.log('Logout clicked');
  };

  return (
    <Sidebar className={collapsed ? 'w-16' : 'w-64'} collapsible='icon'>
      <SidebarHeader className='border-b border-sidebar-border p-4'>
        <div
          className='flex items-center gap-2 cursor-pointer'
          role='button'
          onClick={() => {
            navigate('/');
          }}
        >
          <Brain className='h-8 w-8 text-primary' />
          {!collapsed && (
            <div>
              <h2 className='text-lg font-bold text-sidebar-foreground'>QuizWhizz</h2>
              <p className='text-xs text-sidebar-foreground/60'>Dashboard</p>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className='py-4'>
        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNavItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavClass(isActive(item.url))}>
                      <item.icon className='h-4 w-4' />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Quizzes Section */}
        <SidebarGroup>
          <SidebarGroupLabel>Quizzes</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {quizNavItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavClass(isActive(item.url))}>
                      <item.icon className='h-4 w-4' />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Sessions Section */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {sessionNavItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavClass(isActive(item.url))}>
                      <item.icon className='h-4 w-4' />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Analytics Section */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {analyticsNavItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavClass(isActive(item.url))}>
                      <item.icon className='h-4 w-4' />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Settings Section */}
        <SidebarGroup>
          <SidebarGroupLabel>Settings</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {settingsNavItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavClass(isActive(item.url))}>
                      <item.icon className='h-4 w-4' />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className='border-t border-sidebar-border p-4'>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={handleLogout}
              className='hover:bg-destructive/10 hover:text-destructive'
            >
              <LogOut className='h-4 w-4' />
              {!collapsed && <span>Logout</span>}
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
