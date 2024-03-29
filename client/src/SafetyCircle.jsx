import React from 'react';
import {Button, Form, Icon, Input, Tooltip} from 'antd';
import './SafetyCircle.css';
import WorkStation from "./WorkStation";

class SafetyCircle extends React.Component {

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
            <WorkStation key={key} id={key}/>
        ));
        return (
            <div className='safety-circle'>
                <Tooltip
                    placement="left"
                    mouseEnterDelay={0.4}
                    title="删除安全回路">
                    <Icon className="minus-circle"
                          type="minus-circle"
                          theme="twoTone"
                          twoToneColor="#ff0000"
                          onClick={this.props.onRemove}/>
                </Tooltip>
                <Form.Item label='安全回路' style={{display: 'flex'}}>
                    <Input style={{width: '64px'}} addonBefore={this.props.arg} defaultValue={this.props.id}/>
                </Form.Item>
                {formItems}
                <Tooltip
                    placement="top"
                    mouseEnterDelay={0.4}
                    title="添加工作站">
                    <Button type="dashed" onClick={this.add} style={{width: '100%'}}>
                        <Icon className="plus-circle" type="plus-circle" theme="twoTone" twoToneColor="#0787f6"/>
                    </Button>
                </Tooltip>
            </div>
        );
    }
}

export default Form.create()(SafetyCircle);
