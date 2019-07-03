import * as React from 'react'

import { Layout, Menu, Icon } from 'antd';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { ClientList } from '../Components/ClientList'
import { DirectoryList } from '../Components/DirectoryList';
import { Home } from '../Components/Home';

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

    const deconnect = () => {
        localStorage.setItem('connected', 'false')
        props.setConnection(false)
    }

    return <Router>
    <Layout style={{height: '100vh'}}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div style={CSSclasses.logo} />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
                <Link to='/'>
                    <Icon type="home" />
                    <span>Accueil</span>
                </Link>
            </Menu.Item>
            <Menu.Item key="2">
                <Link to='/client'>
                    <Icon type="user" />
                    <span>Utilisateurs</span>
                </Link>
            </Menu.Item>
            <Menu.Item key="3">
                <Link to='directory'>
                    <Icon type="database" />
                    <span>Dossiers</span>
              </Link>
            </Menu.Item>
            <Menu.Item key='4' onClick={() => deconnect()}>
            <Link to='/'>
                <Icon type='close' />
                <span>Déconnexion</span>
            </Link>
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
            <Route exact path='/' component={Home}></Route>
            <Route path='/client' component={ClientList} ></Route>
            <Route path='/directory' component={DirectoryList}></Route>
          </Content>
        </Layout>
      </Layout>
    </Router>
}