import React from 'react';
import { Spin, Alert } from 'antd';

const Loader = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', position: "absolute", top: "50%", left: "50%"}}>
        <Spin tip="Loading...">
  </Spin>
    </div>
  )
}

export default Loader;
