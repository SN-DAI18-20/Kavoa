import * as React from 'react'
import { Table, Button, Icon, Input } from 'antd';

import { ClientsInterface } from "../utils/interfaces";
import { RouterUtils } from '../utils/Router';

interface Props {
    datas: Array<ClientsInterface>
}

export const ClientList = (props: Props) => {
    const [search,setSearch] = React.useState()
    let searchInput:any = React.createRef()
    // Filtering
    const getColumnSearchProps = (dataIndex: any) => ({
        filterDropdown: (param:any) => {
        const { setSelectedKeys, selectedKeys, confirm, clearFilters } = param
        return (
            <div style={{ padding: 8 }}>
                <Input.Search
                    ref={node => {
                        searchInput = node;
                    }}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => {
                        setSelectedKeys(e.target.value ? [e.target.value] : [])
                    }}
                    onPressEnter={() => handleSearch(selectedKeys, confirm)}
                    style={{ width: 188, marginBottom: 8, display: 'block' }}
                />
                {/* <Button
                    type="primary"
                    onClick={() => handleSearch(selectedKeys, confirm)}
                    icon="search"
                    size="small"
                    style={{ width: 90, marginRight: 8 }}
                >
                    Search
            </Button> */}
                <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                    Reset
            </Button>
            </div>
        )},
        filterIcon: (filtered:any) => (
            <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
        ),
        onFilter: (value:any, record:any) =>
            record[dataIndex]
                .toString()
                .toLowerCase()
                .includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: (visible:any) => {
            if (visible) {
                setTimeout(() => searchInput.select());
            }
        }
    });

    const handleSearch = (selectedKeys:any, confirm:any) => {
        confirm();
        setSearch(selectedKeys[0])
      };
    
      const handleReset = (clearFilters:any) => {
        clearFilters();
        setSearch('')
      };


    const columns: any = [];

    Object.keys(props.datas[0]).forEach(k => {
        if (k == 'ID') return;

        columns.push({
            title: k.replace('_', ' '),
            dataIndex: k,
            key: k,
            ...getColumnSearchProps(k)
        });
    });

    columns.push({
        title: '',
        key: 'rowAction',
        dataIndex: 'rowAction',
        render: () => (
            // <RouterUtils route=''>
            <Button type="link" size="small"><Icon type="eye" />Voir</Button>
            // </RouterUtils>
        )
    });



    return <Table columns={columns} dataSource={props.datas} />;
}