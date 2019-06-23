import React from 'react';
import {Button, Form, Icon, Input} from 'antd';
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

let id = 0;

class WorkGroup extends React.Component {

    addSK = () => {
        const {form} = this.props;
        // can use data-binding to get
        const keys = form.getFieldValue('keys');
        const nextKeys = keys.concat(id++);
        // can use data-binding to set
        // important! notify form to detect changes
        form.setFieldsValue({
            keys: nextKeys,
        });
    };

    render() {
        const {getFieldDecorator, getFieldValue} = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: {span: 24},
                sm: {span: 4},
            },
            wrapperCol: {
                xs: {span: 24},
                sm: {span: 20},
            },
        };
        const formItemLayoutWithOutLabel = {
            wrapperCol: {
                xs: {span: 24, offset: 0},
                sm: {span: 20, offset: 4},
            },
        };
        getFieldDecorator('keys', {initialValue: []});
        const keys = getFieldValue('keys');
        const formItems = keys.map((key, index) => (
            <SafetyCircle text={key + ',' + index}/>
        ));
        return (
            <div className='work-group'>
                <Form>
                    <FormItem label='工作组' id='work-group' placeholder='请输入工作组名称'/>
                    {formItems}
                    <Button type="dashed" onClick={this.addSK} style={{width: '100%'}}>
                        <Icon type="plus"/>添加安全回路(SK)
                    </Button>
                </Form>
            </div>
        );
    }
}

export default Form.create()(WorkGroup);
