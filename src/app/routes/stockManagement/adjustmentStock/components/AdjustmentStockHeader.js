import React from 'react';
import { Icon } from 'antd';
import PageHeader from 'ant-design-pro/lib/PageHeader';

import 'ant-design-pro/dist/ant-design-pro.css';

export default class AdjustmentStockHeader extends React.Component {
    render() {
        return (
            <PageHeader
                title={<p><Icon type="solution" />&nbsp;&nbsp;&nbsp;{this.props.headerMessage}</p>}
            />
        );
    }
}