import * as React from 'react'

import { Layout, Breadcrumb, Menu, Icon } from 'antd';

const {Header, Content, Sider } = Layout

const CSSclasses = {
    logo:{
        height: 32,
        background: 'rgba(255, 255, 255, 0.2)',
        margin: 16
    }
}

export const ContentWrapper = (props?:any) => {
    const [collapsed,setCollapsed] = React.useState(false);
    const toggleCollapse = () => {
        setCollapsed(!collapsed)
    }
    return <Layout style={{height: '100vh'}}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div style={CSSclasses.logo} />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              style={{margin: 20}}
              className="trigger"
              type={collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={() => toggleCollapse()}
            />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
}