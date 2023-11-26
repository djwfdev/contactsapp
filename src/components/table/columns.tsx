'use client'

import Link from 'next/link'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { ColumnDef } from '@tanstack/react-table'
import { ColumnHeader } from './columnheader'

export type User = {
    id: number
    name: string
    email: string
    address: {
        street: string
        suite: string
        city: string
        zipcode: string
        geo: {
            lat: string
            lng: string
        }
    }
    phone: string
    website: string
    company: {
        name: string
        catchPhrase: string
        bs: string
    }
}

export const columns: ColumnDef<User>[] = [
    {
        accessorKey: 'name',
        header: ({ column }) => <ColumnHeader column={column} title='Name' />,
        cell: ({ row }) => {
            return (
                <div className='flex gap-2'>
                    {row.getValue('name') ? (
                        <div className='flex gap-2'>
                            <Link href={`/users/${row.getValue('id')}`}>
                                <Avatar className='hover:scale-110 hover:cursor-pointer transition-transform'>
                                    <AvatarFallback className='dark:text-[#faf0d6] text-[#050f29] font-semibold transition-all'>
                                        {(row.getValue('name') as string)
                                            .split(' ')
                                            .map((n: string) => n[0])
                                            .join('')}
                                    </AvatarFallback>
                                </Avatar>
                            </Link>
                            <div className='flex flex-col gap-1'>
                                <span className='truncate font-medium'>{row.getValue('name')}</span>
                                <a
                                    className='text-sm text-gray-500 truncate hover:text-blue-500 hover:underline'
                                    href={`mailto:${row.getValue('email')}`}
                                >
                                    {row.getValue('email')}
                                </a>
                            </div>
                        </div>
                    ): (<></>)}
                </div>
            )
        },
    },
    {
        accessorKey: 'phone',
        header: 'Phone',
    },
    {
        accessorKey: 'address.city',
        header: ({ column }) => <ColumnHeader column={column} title='City' />,
    },
    {
        accessorKey: 'company.name',
        header: ({ column }) => <ColumnHeader column={column} title='Company' />,
    },
    {
        accessorKey: 'email',
        header: ({ column }) => <ColumnHeader column={column} title='Email' />,
        cell: ({ row }) => {
            return (
                <a className='hover:text-blue-500 hover:underline' href={`mailto:${row.getValue('email')}`}>
                    {row.getValue('email')}
                </a>
            )
        },
    },
    {
        accessorKey: 'website',
        header: ({ column }) => <ColumnHeader column={column} title='Website' />,
        cell: ({ row }) => {
            return (
                <a className='text-blue-500 hover:underline' href={`https://${row.getValue('website')}`} target='_blank'>
                    {row.getValue('website')}
                </a>
            )
        },
    },
]
