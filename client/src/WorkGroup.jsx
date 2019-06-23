import React from 'react';
import {Button, Form, Icon, Input, Tooltip} from 'antd';
import './WorkGroup.css';
import SafetyCircle from "./SafetyCircle";

class FormItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {validateStatus: "", help: ""}
    }

    handleChange = (event) => {
        const value = event.target.value;
        if (value && value.length === 7) {
            this.setState({validateStatus: "success", help: ""});
        } else if (value && value.length === 0) {
            this.setState({validateStatus: "", help: ""});
        } else {
            this.setState({validateStatus: "error", help: "请输入有效名称"});
        }
    };

    render() {
        return (
            <Form.Item
                label={this.props.label}
                hasFeedback
                validateStatus={this.state.validateStatus}
                help={this.state.help}
            >
                <Input placeholder={this.props.placeholder} id={this.props.id} onChange={this.handleChange}/>
            </Form.Item>
        );
    }
}

let id = 1;

class WorkGroup extends React.Component {
    remove = k => {
        const {form} = this.props;
        const keys = form.getFieldValue('keys');
        if (keys.length === 0) return;
        form.setFieldsValue({
            keys: keys.filter(key => key !== k),
        });
    };
    addSK = () => {
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
                <SafetyCircle id={key} onRemove={() => this.remove(key)}/>
            </div>
        ));
        return (
            <div className='work-group'>
                <Form>
                    <FormItem label='工作组' id='work-group' placeholder='请输入工作组名称'/>
                    {formItems}
                    <Tooltip
                        placement="top"
                        mouseEnterDelay={0.4}
                        title="添加安全回路">
                        <Button className="add-work-group" type="dashed" onClick={this.addSK} style={{width: '100%'}}>
                            <Icon className="plus-circle" type="plus-circle" theme="twoTone" twoToneColor="#02cc6b"/>
                        </Button>
                    </Tooltip>
                </Form>
            </div>
        );
    }
}

export default Form.create()(WorkGroup);
