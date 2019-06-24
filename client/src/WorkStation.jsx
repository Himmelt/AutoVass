import React from 'react';
import {Button, Form, Icon, Tooltip} from "antd";
import './WorkStation.css'

let id = 1;

class WorkStation extends React.Component {

    addST = () => {
        const {form} = this.props;
        const keys = form.getFieldValue('keys');
        const nextKeys = keys.concat(id++);
        form.setFieldsValue({
            keys: nextKeys,
        });
    };

    render() {
        const {getFieldDecorator, getFieldValue} = this.props.form;
        getFieldDecorator('keys', {initialValue: []});
        const keys = getFieldValue('keys');
        const formItems = keys.map((key, index) => (
            <div key={key}>
                XXXXXX
            </div>
        ));
        return (
            <div className='work-station'>
                <Tooltip
                    placement="left"
                    mouseEnterDelay={0.4}
                    title="删除工作站">
                    <Icon className="minus-circle"
                          type="minus-circle"
                          theme="twoTone"
                          twoToneColor="#ff0000"
                          onClick={this.props.onRemove}/>
                </Tooltip>
                <span>工作站{this.props.id}</span>
                {formItems}
                <Tooltip
                    placement="top"
                    mouseEnterDelay={0.4}
                    title="添加工作站">
                    <Button type="dashed" onClick={this.addST} style={{width: '100%'}}>
                        <Icon className="plus-circle" type="plus-circle" theme="twoTone" twoToneColor="#0787f6"/>
                    </Button>
                </Tooltip>
            </div>
        );
    }
}

export default Form.create()(WorkStation);

