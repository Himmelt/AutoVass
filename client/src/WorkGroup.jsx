import React from 'react';
import {Form, Input} from 'antd';
import './WorkGroup.css';

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

class WorkGroup extends React.Component {

    render() {
        return (
            <div className='WorkGroup'>
                <Form>
                    <FormItem label='工作组' id='arg' placeholder='请输入工作组名称'/>
                </Form>
            </div>
        );
    }
}

export default WorkGroup;
