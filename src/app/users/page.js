'use client'
import { http } from '@/client';
import LayoutComponent from '@/components/layout';
import UserTable from '@/components/userTable';
import { theme } from 'antd';
import { useEffect, useState } from 'react';

export default function Users() {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const [data, setData] = useState([])

    useEffect(() => {
        http.get('/api/users').then((response) => {
            setData(response.data)
        })
    }, [])

    const handleVerify = (value, id) => {
        data.map((item) => {
            if (item._id === id) {
                item.verified = value;
            }
        })
        setData([...data])
        http.put(`/api/users/${id}`, { verified: value }).then((_response) => {
            console.log('User verified successfully!')
        }).catch((error) => {
            console.error(error);
            data.map((item) => {
                if (item._id === id) {
                    item.verified = !value;
                }
            })
            setData([...data])
        })
    }

    const deleteUser = (record) => {
        http.delete(`/api/users/${record._id}`).then((_reponse) => {
            console.log("User deleted successfully!");
            setData([...data.filter(item => item._id !== record._id)])
        })

    }
    return (
        <LayoutComponent title={'Users'} route={'/users'}>
            <div
                style={{
                    margin: '16px 0',
                    padding: 24,
                    minHeight: 360,
                    background: colorBgContainer,
                    borderRadius: borderRadiusLG,
                }}
            >
                <UserTable data={data} handleVerify={handleVerify} deleteUser={deleteUser} />
            </div>
        </LayoutComponent>
    )
}
