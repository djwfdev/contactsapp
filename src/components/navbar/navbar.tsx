'use client';

import Link from 'next/link';
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme/themetoggle';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

export const Navbar = () => {
    return (
        <header className='top-0 z-40 w-full border-b bg-background py-2'>
            <div className='flex h-16 px-2 items-center justify-between'>
                <Link href='/' className='flex items-center'>
                    <Avatar className='ring-2 dark:ring-[#faf0d6] ring-[#050f29] h-6'>
                        <AvatarFallback className='dark:text-[#faf0d6] text-[#050f29] text-sm font-semibold transition-all'>
                            <span>Dyl</span>
                        </AvatarFallback>
                    </Avatar>
                </Link>
                <div className='flex items-center'>
                    <Link
                        href='https://www.linkedin.com/in/dylanwf/'
                        target='_blank'
                        className={cn(
                            buttonVariants({
                                variant: 'ghost',
                                size: 'icon',
                            })
                        )}
                    >
                        <LinkedInLogoIcon className='h-4 w-4' aria-hidden='true' />
                    </Link>
                    <Link
                        href='https://github.com/djwfdev'
                        target='_blank'
                        className={cn(
                            buttonVariants({
                                variant: 'ghost',
                                size: 'icon',
                            })
                        )}
                    >
                        <GitHubLogoIcon className='h-4 w-4' aria-hidden='true' />
                    </Link>
                    <ThemeToggle />
                </div>
            </div>
        </header>
    );
};
