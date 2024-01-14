import { Button, Popconfirm, Table } from 'antd';

const WorkTable = ({ data = [], handlePaid }) => {
    const expandedRowRender = (workDetails = []) => {
        const columns = [
            {
                title: 'Date',
                dataIndex: 'date',
                key: 'date',
            },
            {
                title: 'Corrects',
                dataIndex: 'corrects',
                key: 'corrects',
            },
            {
                title: 'Incorrects',
                dataIndex: 'incorrects',
                key: 'incorrects',
            },
            {
                title: 'Total',
                dataIndex: 'total',
                key: 'total',
            },

        ];

        return <Table columns={columns} dataSource={workDetails} pagination={false} />;
    };

    const columns = [
        {
            title: 'Name',
            dataIndex: 'user',
            render: (user) => {
                return user.name
            }
        },

        {
            title: 'Account Number',
            dataIndex: 'user',
            render: (user) => {
                return user.accountNumber
            }
        },
        {
            title: 'IFSC',
            dataIndex: 'user',
            render: (user) => {
                return user.ifsc
            }
        },
        {
            title: 'Corrects',
            dataIndex: 'workDetails',
            render: (record) => {
                const total = record.reduce((accum, item) => accum + item.corrects, 0)
                return total || 0
            }
        },
        {
            title: 'Incorrects',
            dataIndex: 'workDetails',
            render: (record) => {
                const total = record.reduce((accum, item) => accum + item.incorrects, 0)
                return total || 0
            }
        },
        {
            title: 'Total',
            dataIndex: 'workDetails',
            render: (record) => {
                const total = record.reduce((accum, item) => accum + item.total, 0)
                return total || 0
            }
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) =>
                data.length >= 1 ? (
                    <Popconfirm okButtonProps={{ ghost: true }} title="Sure to paid?" onConfirm={() => handlePaid(record)}>
                        <Button type="primary" ghost>
                            Paid
                        </Button>
                    </Popconfirm>
                ) : null,
        },

    ];

    return (
        <>
            <Table
                columns={columns}
                expandable={{
                    expandedRowRender: (record) => expandedRowRender(record.workDetails),
                    // defaultExpandedRowKeys: ['0'],
                }}
                dataSource={data}
                scroll={{ y: '70vh' }}
            />
        </>
    );
};
export default WorkTable;