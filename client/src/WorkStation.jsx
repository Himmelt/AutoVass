import React from 'react';
import {Button, Form, Icon, Tooltip} from "antd";
import './WorkStation.css'

class WorkStation extends React.Component {

    constructor(props) {
        super(props);
        this.id = 1;
    }

    add = () => {
        const {form} = this.props;
        const keys = form.getFieldValue('keys');
        const nextKeys = keys.concat(this.id++);
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
                {key}
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
                    title="添加XXX">
                    <Button type="dashed" onClick={this.add} style={{width: '100%'}}>
                        <Icon className="plus-circle" type="plus-circle" theme="twoTone" twoToneColor="#FFEA00"/>
                    </Button>
                </Tooltip>
            </div>
        );
    }
}

export default Form.create()(WorkStation);

