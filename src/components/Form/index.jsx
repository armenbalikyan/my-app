import React, { useEffect, useState } from "react";
import { Table, Input, Space } from 'antd';
import './style.css';
import { AudioOutlined } from '@ant-design/icons';
import { columns, mainData } from "../utils/data";


const { Search } = Input;


export const Form = (props) => {
    const [data, setData] = useState(mainData);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        if (searchValue == '') {
            setData(mainData);
        }
    }, [searchValue]);

    return (
        <div className="mainContainer">
            <Search placeholder="input search text" onSearch={(e)=>props.onSearch(e.target.value,data,setData)} value={searchValue} enterButton className="searchInput" onChange={(e) => setSearchValue(e.target.value)} />
            <Table columns={columns} dataSource={data} onChange={(values)=>props.tableOnChange(values,setData)} />
        </div>
    )

}