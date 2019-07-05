import * as React from 'react'

import { Layout, Menu, Icon, Select } from 'antd';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { ClientList } from '../Components/ClientList'
import { DirectoryList } from '../Components/DirectoryList';
import { Home } from '../Components/Home';
import { RouteError } from '../Components/RouteError';

import avocado from '../assets/avocado-svgrepo-com1.svg'

const {Header, Content, Sider } = Layout

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
            {/* <Route exact path='/' component={Home}></Route>
            <Route path='/client' component={ClientList} ></Route>
            <Route path='/directory' component={DirectoryList}></Route> */}
            <Route path='/:component' component={MatchComponent} />
          </Content>
        </Layout>
      </Layout>
    </Router>
}

const MatchComponent = (props:any) => {
    console.log("props",props.match.params)
    const component = props.match.params.component
    const [Selected, setSelected] = React.useState()

    return(
        <>{
            component === 'client'
                ? <ClientList/>
                : component === 'directory'
                    ? <p>Directory</p>
                    : component === 'diligences'
                        ? <p>Diligence</p>
                        : <RouteError/>
         }</>
    )
}