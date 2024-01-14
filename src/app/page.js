'use client'
import { http } from '@/client';
import LayoutComponent from '@/components/layout';
import WorkTable from '@/components/worksTable';
import { theme } from 'antd';
import { useEffect, useState } from 'react';

export default function Home() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const [data, setData] = useState([])

  useEffect(() => {
    http.get('/api/works').then((response) => {
      setData(response.data)
    })
  }, [])

  const handlePaid = (record) => {
    http.delete(`/api/works/${record._id}`).then((response) => {
      console.log("Deleted successfully!")
    })
  }
  return (
    <LayoutComponent title={'Works Details'} route={'/'}>
      <div
        style={{
          margin: '16px 0',
          padding: 24,
          minHeight: 360,
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
        <WorkTable data={data} handlePaid={handlePaid} />
      </div>
    </LayoutComponent>
  )
}
