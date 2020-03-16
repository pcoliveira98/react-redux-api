import React, { Component } from 'react';
import UserForm from './UserForm';

class User extends Component {
    render() {
        let list = [
            {
                name: "Paulo",
                email: "paulo@gmail.com"
            },
            {
                name: "João",
                email: "joao@gmail.com"
            }
        ]
        return (
            <div>
                <UserForm />
                <table border="l">
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                    {list.map(item => {
                        return (
                            <tr>
                                <td>
                                    {item.name}
                                </td>
                                <td>
                                    {item.email}
                                </td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        )
    }
}

export default User;
