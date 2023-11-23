import { UserTable } from '@/components/table/usertable'
import { columns, User } from '@/components/table/columns'
import { Navbar } from '@/components/navbar/Navbar';

async function getData(): Promise<User[]> {
    // Fetching the user data from the API
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            return data;
        });
}

export default async function Home() {
    const data = await getData()

    return (
        <div className='flex flex-col gap-4 container mx-auto px-6'>
            <Navbar />
            <UserTable columns={columns} data={data} />
        </div>
    )
}
