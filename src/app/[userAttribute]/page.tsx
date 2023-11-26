import React from 'react'
import Link from 'next/link'
import { User } from '@/components/table/columns'
import { Navbar } from '@/components/navbar/navbar'
import { Card, CardContent, CardFooter, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Building2, Facebook, Mail, MapPin, Phone, Twitter } from 'lucide-react'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { LinkedInLogoIcon } from '@radix-ui/react-icons'

async function getData(userAttribute: string): Promise<User[]> {
    if (!isNaN(Number(userAttribute))) {
        // Fetching the user data from the API with id
        return fetch(`https://jsonplaceholder.typicode.com/users/${userAttribute}`)
            .then((response) => response.json())
            .then((data) => [data]) // Wrap the result in an array for consistency
    } else {
        // Fetching the user data from the API with email
        return fetch(`https://jsonplaceholder.typicode.com/users`)
            .then((response) => response.json())
            .then((data) => {
                return data.filter((user: User) => user.email === userAttribute)
            })
    }
}

export default async function Home({ params }: { params: { userAttribute: string } }) {
    const data = await getData(decodeURIComponent(params.userAttribute))
    

    return (
        <div className='flex flex-col gap-4 container mx-auto px-6'>
            <Navbar />
            {data.length > 0 && data[0] ? (
                <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                    <Card>
                        <CardHeader className='text-center'>
                            <CardTitle>{data[0].name}</CardTitle>
                            <CardDescription>
                                <a className='text-blue-500 hover:underline' href={`https://${data[0].website}`} target='_blank'>
                                    <span>www.{data[0].website}</span>
                                </a>
                            </CardDescription>
                        </CardHeader>
                        <CardContent className='flex flex-col gap-2 justify-center items-center'>
                            <div className='flex gap-2 items-center'>
                                <Mail className='h-5 w-5' />
                                <a className='hover:text-blue-500 hover:underline' href={`mailto:${data[0].email}`}>
                                    {data[0].email}
                                </a>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <Phone className='h-5 w-5' />
                                <a className='hover:text-blue-500 hover:underline' href={`tel:${data[0].phone}`}>
                                    {data[0].phone}
                                </a>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <Building2 className='h-5 w-5' />
                                <span>{data[0].company.name}</span>
                            </div>
                        </CardContent>
                        <CardFooter className='flex gap-2 justify-center mt-36'>
                            <Link
                                href='https://www.linkedin.com/in/dylanwf/'
                                target='_blank'
                                className={cn(
                                    buttonVariants({
                                        variant: 'outline',
                                        size: 'icon',
                                    })
                                )}
                            >
                                <LinkedInLogoIcon className='h-4 w-4' aria-hidden='true' />
                            </Link>
                            <Link
                                href='https://www.linkedin.com/in/dylanwf/'
                                target='_blank'
                                className={cn(
                                    buttonVariants({
                                        variant: 'outline',
                                        size: 'icon',
                                    })
                                )}
                            >
                                <Facebook className='h-4 w-4' aria-hidden='true' />
                            </Link>
                            <Link
                                href='https://www.linkedin.com/in/dylanwf/'
                                target='_blank'
                                className={cn(
                                    buttonVariants({
                                        variant: 'outline',
                                        size: 'icon',
                                    })
                                )}
                            >
                                <Twitter className='h-4 w-4' aria-hidden='true' />
                            </Link>
                        </CardFooter>
                    </Card>
                    <Card>
                        <img src='/img/map.png' alt='map' className='w-full h-1/2 object-cover rounded-t-md' />
                        <CardHeader>
                            <CardTitle className='text-lg'>Address</CardTitle>
                            <CardDescription className='flex gap-2 items-center'>
                                <MapPin className='h-5 w-5' />
                                <span>{data[0].address.street}, {data[0].address.city}, {data[0].address.zipcode}</span>
                            </CardDescription>
                        </CardHeader>
                    </Card>
                </div>
            ) : (
                <span className='dark:text-[#faf0d6] text-[#050f29] heading'>User not found</span>
            )}
        </div>
    )
}
