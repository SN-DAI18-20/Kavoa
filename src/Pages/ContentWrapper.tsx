import * as React from 'react'

import { Layout, Menu, Icon, Select, Button } from 'antd';

import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

import { RouteError } from '../Components/RouteError'

import { Get } from '../utils/api';

import avocado from '../assets/avocado-svgrepo-com1.svg'
import { Lazy } from '../utils/Lazy';
import { Modification } from '../Components/Modification';
import { TableAll } from '../Components/Table';
import { HomePage } from '../Components/Home';

const {Header, Content, Sider } = Layout

export const ContentWrapper = (props?:any) => {
    const [collapsed,setCollapsed] = React.useState(false);
    const [siderWidth, setSiderWidth] = React.useState(80)
    const [route, setRoute] = React.useState()
    const toggleCollapse = () => {
        setCollapsed(!collapsed)
    }
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
                <Link to='/home'>
                    <Icon type="home" />
                    <span>Accueil</span>
                </Link>
            </Menu.Item>
            <Menu.Item key="2">
                <Link to='/clients' replace>
                    <Icon type="user" />
                    <span>Utilisateurs</span>
                </Link>
            </Menu.Item>
            <Menu.Item key="3">
                <Link to='/dossiers'>
                    <Icon type="database" />
                    <span>Dossiers</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="4">
                <Link to='/diligences'>
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
            <Route exact path='/' render={() => <Redirect to='/home' />} />
            <Route exact path='/:components' render={({match}) => {
                const {components} = match.params
                if(route!==components) setRoute(components)
                return route === components
                    ? <MatchSimpleComponent props={match} />
                    : <></>
            }}/>

            <Route path='/:component/:parameter/:id' render={({match}) => {
                const {components, parameter, id} = match.params
                const superRoute = components + parameter + id
                if(route !== superRoute) setRoute(superRoute)
                return route === superRoute
                    ?<MatchIdComponent props={match} />
                    :<></>
                }} />
            <Route exact path='/diligence/:id' render={(props:any) => <Lazy promise={Get("diligences",props.match.params.id)} Component={Modification} />}/>
          </Content>
        </Layout>
      </Layout>
      </Router>
}

const MatchSimpleComponent = ({props}:any) => {
    const components = props.params.components
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();
    return(
        <>{
            props.isExact
                ? components === 'newDiligence'
                    ? <Modification datas={[{Collaborateur:NaN, Diligence_Date:`${yyyy}-${mm}-${dd}`, Detail:'', Dossier:NaN, Heure_TotalDecimal:1.0 , ID:NaN}]} />
                    : components === 'home'
                        ? <HomePage/>
                        : components === 'clients'||'dossiers'||'diligences'
                            ? <Lazy otherProps={{Type:components}} Component={TableAll} promise={Get(components)} />
                            : <RouteError/>
                    : <RouteError/>
         }</>
    )
}

const MatchIdComponent = ({props}:any) => {
    const {component,parameter,id} = props.params;
    return(
        <>{
            parseInt(id, 10)
                ? component === 'clients'||'dossiers'||'diligences'
                    ? <Lazy promise={Get(component, parameter+'/'+id)} Component={TableAll} otherProps={{Type:component}} />
                        : <RouteError/>
                : <RouteError/>
        }</>
    )
}