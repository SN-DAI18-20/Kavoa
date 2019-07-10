import * as React from 'react'

import { Layout, Menu, Icon, Select, Button } from 'antd';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { RouteError } from '../Components/RouteError'

import { Get } from '../utils/api';

import avocado from '../assets/avocado-svgrepo-com1.svg'
import { Lazy } from '../utils/Lazy';
import { Modification } from '../Components/Modification';
import { ListAll } from '../Components/List';
import { ClientList } from '../Components/ClientList';
import { Home } from '../Components/Home';

const {Header, Content, Sider } = Layout

export const ContentWrapper = (props?:any) => {
    const [collapsed,setCollapsed] = React.useState(false);
    const [siderWidth, setSiderWidth] = React.useState(80)
    const [route, setRoute] = React.useState()
    const toggleCollapse = () => {
        setCollapsed(!collapsed)
    }
    console.log("wrapper connection", props.connection)
    const deconnect = () => {
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
                <Link to='clients'>
                    <Icon type="user" />
                    <span>Utilisateurs</span>
                </Link>
            </Menu.Item>
            <Menu.Item key="3">
                <Link to='dossiers'>
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
          <Header style={{ background: '#fff', padding: 0, flexDirection:'row' }}>
            <Icon
              style={{margin: 20}}
              className="trigger"
              type={collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={() => toggleCollapse()}
              />
                <Link to='/newDiligence'>
                  <Button>Nouvel diligence</Button>
                </Link>
          </Header>
          <Content
            style={{
                margin: '24px 16px',
                padding: 24,
                background: '#fff',
            }}
            >
            <Route path='/' component={Home} />
            <Route path='/:components' component={MatchSimpleComponent} />
            <Route path='/:component/:parameter/:id' component={MatchIdComponent} />
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
                ? components === 'newDiligence'
                    ? <Modification datas={{Collaborateur:NaN, DateCourses:'2019-12-2', Detail:'', Dossier:NaN, Heure_TotalDecimal:1.0 , ID:NaN}} />
                    : components === 'clients'||'dossiers'||'diligences'
                        ? <Lazy otherProps={{Type:components}} Component={ClientList} promise={Get(components)} />
                        : <RouteError/>
                : <></>
         }</>
    )
}

const MatchIdComponent = (props:any) => {
    const {component,parameter,id} = props.match.params;
    return(
        <>{
            parseInt(id, 10)
                ? component
                    ? <p/>
                    : <RouteError/>
                : <RouteError/>
        }</>
    )
}