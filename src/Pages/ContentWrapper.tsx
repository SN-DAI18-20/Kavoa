import * as React from 'react'

import { Layout, Menu, Icon, Select } from 'antd';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { ClientList } from '../Components/ClientList'
import { RouteError } from '../Components/RouteError'

import { Get } from '../utils/api';

import avocado from '../assets/avocado-svgrepo-com1.svg'
import { Lazy } from '../utils/Lazy';

const {Header, Content, Sider } = Layout

export const ContentWrapper = (props?:any) => {
    const [collapsed,setCollapsed] = React.useState(false);
    const [siderWidth, setSiderWidth] = React.useState(80)
    const toggleCollapse = () => {
        setCollapsed(!collapsed)
    }

    const deconnect = () => {
        localStorage.setItem('connected', 'false')
        props.setConnection(false)
    }

    return <Router>
    <Layout style={{height: '100vh'}}>
        <Sider collapsedWidth={siderWidth} breakpoint='sm' onBreakpoint={(el) => el ? setSiderWidth(0): setSiderWidth(80)} trigger={null} collapsible collapsed={collapsed}>
          <div style={{display:'flex', flexDirection:'row', alignItems:'center', marginLeft:25, marginTop: 20, marginBottom:20}} >
              <img src={avocado} height='30' />
              { !collapsed ? <h1 style={{color:'white', fontSize:'50', marginLeft: 20, marginTop: 10}}> Kavoa </h1> :<></>}
          </div>
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
                <Link to='dossier'>
                    <Icon type="database" />
                    <span>Dossiers</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="4">
                <Link to='diligences'>
                    <Icon type="file-done" />
                    <span>Diligences</span>
              </Link>
            </Menu.Item>
            <Menu.Item key='5' onClick={() => deconnect()}>
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
            <Route path='/:components' component={MatchSimpleComponent} />
            <Route path='/:component/:id' component={MatchIdComponent} />
          </Content>
        </Layout>
      </Layout>
    </Router>
}

const MatchSimpleComponent = (props:any) => {
    const { components } = props.match.params
    return(
        <>{
            props.match.isExact
                ? components === 'client'
                    ? <Lazy Component={ClientList} promise={Get('clients')} />
                    : components === 'dossier'
                        ? <Lazy Component={ClientList} promise={Get('dossiers')} />
                        : components === 'diligences'
                            ? <Lazy Component={ClientList} promise={Get('diligences')} />
                            : <RouteError/>
                : <></>
         }</>
    )
}

const MatchIdComponent = (props:any) => {
    const {component,id} = props.match.params;
    return(
        <>{
            parseInt(id, 10)
                ? component
                    ? <ClientList/>
                    : <RouteError/>
                : <RouteError/>
        }</>
    )
}