import { columns, User } from '@/components/table/columns'
import { Navbar } from '@/components/navbar/Navbar'

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
            {data.length > 0 ? (
                <span className='dark:text-[#faf0d6] text-[#050f29] heading'>{data[0].email}</span>
            ) : (
                <span className='dark:text-[#faf0d6] text-[#050f29] heading'>User not found</span>
            )}
        </div>
    )
}
