import React from 'react';
import {Button, Icon} from 'antd';
import './SafetyCircle.css';

class SafetyCircle extends React.Component {
    render() {
        return (
            <div className='safety-circle'>
                {this.props.text}
                <Button type="dashed" style={{width: '100%'}}>
                    <Icon type="plus"/>添加工作站(ST)
                </Button>
            </div>
        );
    }
}

export default SafetyCircle;
