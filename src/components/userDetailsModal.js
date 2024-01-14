import { EyeOutlined } from '@ant-design/icons';
import { Button, Col, Modal, Row, Typography } from 'antd';
import { useState } from 'react';
const { Text } = Typography;

const UserDetailsModal = ({ record }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Button type="link" icon={<EyeOutlined style={{ fontSize: '25px' }} />} onClick={showModal} />
            <Modal title={'User Details'} open={isModalOpen} onCancel={handleCancel}
                footer={(_, { OkBtn, CancelBtn }) => (
                    <>
                        <Button type='primary' className='bg-primary-color' onClick={handleCancel}>Close</Button>
                    </>
                )}
            >
                <Row className='mt-3  border bottom-1 p-2'>
                    <Col span={6}><Text strong>Username</Text></Col>
                    <Col span={1}>:</Col>
                    <Col span={17}>{record.username}</Col>
                </Row>
                <Row className='mt-3 border bottom-1 p-2'>
                    <Col span={6}><Text strong>Name</Text></Col>
                    <Col span={1}>:</Col>
                    <Col span={17}>{record.name}</Col>
                </Row>
                <Row className='mt-3 border bottom-1 p-2'>
                    <Col span={6}><Text strong>Phone</Text></Col>
                    <Col span={1}>:</Col>
                    <Col span={17}>{record.phone}</Col>
                </Row>
                <Row className='mt-3 border bottom-1 p-2'>
                    <Col span={6}><Text strong>Email</Text></Col>
                    <Col span={1}>:</Col>
                    <Col span={17}>{record.email}</Col>
                </Row>
                <Row className='mt-3 border bottom-1 p-2'>
                    <Col span={6}><Text strong>Bank Name</Text></Col>
                    <Col span={1}>:</Col>
                    <Col span={17}>{record.bankName}</Col>
                </Row>
                <Row className='mt-3 border bottom-1 p-2'>
                    <Col span={6}><Text strong>Account Number</Text></Col>
                    <Col span={1}>:</Col>
                    <Col span={17}>{record.accountNumber}</Col>
                </Row>
                <Row className='mt-3 border bottom-1 p-2'>
                    <Col span={6}><Text strong>IFSC</Text></Col>
                    <Col span={1}>:</Col>
                    <Col span={17}>{record.ifsc}</Col>
                </Row>
                <Row className='mt-3 border bottom-1 p-2'>
                    <Col span={6}><Text strong>Postal Address</Text></Col>
                    <Col span={1}>:</Col>
                    <Col span={17}>{record.postalAddress}</Col>
                </Row>
                <Row className='mt-3 border bottom-1 p-2'>
                    <Col span={6}><Text strong>Device Id</Text></Col>
                    <Col span={1}>:</Col>
                    <Col span={17}>{record.deviceId}</Col>
                </Row>
                <Row className='mt-3 border bottom-1 p-2'>
                    <Col span={6}><Text strong>Taluka</Text></Col>
                    <Col span={1}>:</Col>
                    <Col span={17}>{record.taluka}</Col>
                </Row>
                <Row className='mt-3 border bottom-1 p-2'>
                    <Col span={6}><Text strong>District</Text></Col>
                    <Col span={1}>:</Col>
                    <Col span={17}>{record.district}</Col>
                </Row>
                <Row className='mt-3 border bottom-1 p-2'>
                    <Col span={6}><Text strong>Password</Text></Col>
                    <Col span={1}>:</Col>
                    <Col span={17}>{record.password}</Col>
                </Row>
            </Modal>
        </>
    )
};
export default UserDetailsModal;