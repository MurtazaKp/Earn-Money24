import { DeleteOutlined } from '@ant-design/icons';
import { Button, Popconfirm, Space, Switch, Table } from 'antd';
import UserDetailsModal from './userDetailsModal';

const UserTable = ({ data = [], handleVerify, deleteUser }) => {
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Username',
            dataIndex: 'username',
            key: 'username',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
        },

        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Disctrict',
            dataIndex: 'district',
            key: 'district',
        },
        {
            title: 'Verified',
            key: 'verified',
            dataIndex: 'verified',
            render: (_, { verified, _id }) => (
                <>
                    <Switch defaultChecked checked={verified} onChange={(e) => handleVerify(e, _id)} />
                </>
            ),
        },
        {
            title: 'Actions',
            key: 'action',
            render: (_, record) =>
                data.length >= 1 ? (
                    <Space>
                        <UserDetailsModal record={record} />
                        <Popconfirm okButtonProps={{ ghost: true, danger: true }} title="Sure to Delete?" onConfirm={() => deleteUser(record)}>
                            <Button type="link" danger icon={<DeleteOutlined style={{ fontSize: '25px' }} />} />
                        </Popconfirm>
                    </Space>
                ) : null,
        },
    ];
    return (<Table columns={columns} dataSource={data} scroll={{ y: '70vh' }} />);
}
export default UserTable;