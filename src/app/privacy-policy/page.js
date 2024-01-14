'use client'
import { http } from '@/client';
import LayoutComponent from '@/components/layout';
import { CloseOutlined } from '@ant-design/icons';
import { Button, Card, Form, Input, Space, theme } from 'antd';
import { useEffect } from 'react';

const PrivacyPolicy = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const [form] = Form.useForm();

    useEffect(() => {
        http.get('/api/privacy-policy').then((response) => {
            const items = [];
            response.data.map((item) => {
                items.push({
                    id: item._id,
                    language: item.language,
                    title: item.title,
                    content: item.content.map((text) => {
                        return ({ text: text })
                    })
                })
            })
            form.setFieldsValue({
                items: items,
            })
        })
    })

    const handleSave = (values) => {
        const content = [];
        values.content.map(({ text }) => {
            content.push(text)
        })
        http.put(`/api/privacy-policy/${values.id}`, { content }).then(() => {
            console.log("Updated successfully!")
        })

    }

    return (
        <LayoutComponent title={'Privacy Policy'} route={'/privacy-policy'}>
            <div
                style={{
                    margin: '16px 0',
                    padding: 24,
                    minHeight: 360,
                    background: colorBgContainer,
                    borderRadius: borderRadiusLG,
                }}
            >
                <Form
                    labelCol={{
                        span: 6,
                    }}
                    wrapperCol={{
                        span: 18,
                    }}
                    form={form}
                    name="dynamic_form_complex"
                    autoComplete="off"
                >

                    <Form.List name="items">
                        {(fields) => (
                            <div
                                style={{
                                    display: 'flex',
                                    rowGap: 16,
                                    flexDirection: 'column',
                                }}
                            >
                                {fields.map((field) => {
                                    return (
                                        <Card
                                            size="small"
                                            title={`${form.getFieldValue()?.items[field.key]?.title} (${form.getFieldValue()?.items[field.key]?.language})`}
                                            key={field.key}

                                        >
                                            <Form.Item label="Content">
                                                <Form.List name={[field.name, 'content']}>
                                                    {(subFields, subOpt) => (
                                                        <div
                                                            style={{
                                                                display: 'flex',
                                                                flexDirection: 'column',
                                                                rowGap: 16,
                                                            }}
                                                        >
                                                            {subFields.map((subField) => (
                                                                <Space.Compact block key={subField.key}>
                                                                    <Form.Item noStyle name={[subField.name, 'text']}>
                                                                        <Input placeholder="Add policy" />
                                                                    </Form.Item>
                                                                    <Button icon={<CloseOutlined />} onClick={() => {
                                                                        subOpt.remove(subField.name);
                                                                    }} />

                                                                </Space.Compact>
                                                            ))}
                                                            <Button type="dashed" onClick={() => subOpt.add()} block>
                                                                + Add Policy
                                                            </Button>
                                                        </div>
                                                    )}
                                                </Form.List>
                                            </Form.Item>
                                            <Space className='mb-4 flex justify-end'>
                                                <Button onClick={() => handleSave(form.getFieldValue()?.items[field.key])} type='primary' className='bg-primary-color'>Save</Button>
                                            </Space>
                                        </Card>
                                    )
                                })}
                            </div>
                        )}
                    </Form.List>
                </Form>
            </div>
        </LayoutComponent>

    );
};
export default PrivacyPolicy;
