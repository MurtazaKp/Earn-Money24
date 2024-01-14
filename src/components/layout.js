import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
    PieChartOutlined,
      DesktopOutlined,
      ContainerOutlined,
      MailOutlined,
      AppstoreOutlined,
      HomeFilled,
      FileOutlined,
      TeamOutlined,
      RightCircleOutlined,
      UserAddOutlined,
      AimOutlined,
      EditOutlined,
      EllipsisOutlined,
      ThunderboltOutlined,
      GiftOutlined,
      AccountBookFilled
      
      
      
  } from '@ant-design/icons';
import { Image, Layout, Menu, theme,Button } from 'antd';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const LayoutComponent = ({ children, title, route }) => {
    const [collapsed, setCollapsed] = useState(false);
    const [current, setCurrent] = useState(route);
    const items = [
        getItem('Dashboard', '/', <HomeFilled />),
        getItem('Welcome Letter', '2', <FileOutlined />),
        getItem('Register New (unpaid?)', '3', <EditOutlined />),
        getItem('Profile Management', 'Sub1', < UserAddOutlined />,[
          getItem('View/Edit Profile', '5'),
          getItem('Change Login Password', '6'),
         
        ]),
    
        getItem('My Network', 'sub2', <AimOutlined/>,[
          getItem('View/Edit Profile', '7'),
          getItem('Tree View', '8'),
          getItem('My Downline List', '9'),
          getItem('My Direct', '10'),
          getItem('Levelwise Distribution List', '11'),
    
         
        ]),
    
        getItem('e-Pin Management', 'sub3', <EllipsisOutlined />,[
          getItem('Transfer e-Pin', '12'),
          getItem('e-pin Transferred List', '13'),
          getItem('e-Pin Report', '14'),
          getItem('PIN Request', '15'),     
        ]),
    
        getItem('Distributor Top Up', '16', <ThunderboltOutlined />),
        getItem('My Rewards', '17', <GiftOutlined />),
    
        getItem('Commision', 'sub4', <MailOutlined />, [
          getItem('Commision History', '18',<RightCircleOutlined />),
          getItem('Commision Details', '19'),
     
        ]),
        getItem('Logout', '20',),]
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const router = useRouter()

    const onClick = (e) => {
        router.push(e.key)
    };
    return (
        <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <div className="flex justify-center m-2" >
                    <Image
                        preview={false}
                        width={100}
                        src="/Earn Money 24x7-logos_transparent.png"
                    />
                </div>
        <Menu
          theme="dark"
          mode="inline"
          onClick={onClick} selectedKeys={[current]}
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>

    );
};
export default LayoutComponent;