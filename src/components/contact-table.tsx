// ContactTable.js
import React, { useState, useEffect } from 'react';
import Search from './search'; // Pastikan Anda mengimpor komponen Search

const ContactTable = () => {
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        // Fetch users from API
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    // Filter users based on search term
    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.username.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-sm text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th className="py-3 px-6">#</th>
                        <th className="py-3 px-6">Name</th>
                        <th className="py-3 px-6">Username</th>
                        <th className="py-3 px-6">Email</th>
                        <th className="py-3 px-6 text-center">Address</th>
                    </tr> 
                </thead>
                <tbody>
                    {filteredUsers.map(user => (
                        <tr key={user.id}>
                            <td className="py-3 px-6 border border-gray-200">{user.id}</td>
                            <td className="py-3 px-6 border border-gray-200">{user.name}</td>
                            <td className="py-3 px-6 border border-gray-200">{user.username}</td>
                            <td className="py-3 px-6 border border-gray-200">{user.email}</td>
                            <td className="py-3 px-6 border border-gray-200 text-center">
                                {`${user.address.street}, ${user.address.city}`}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ContactTable;