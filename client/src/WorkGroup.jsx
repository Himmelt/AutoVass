import React from 'react';
import {Button, Form, Icon, Input, Tooltip} from 'antd';
import SafetyCircle from "./SafetyCircle";
import './WorkGroup.css';

class WorkGroup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            arg: 'x',
            count: 0,
            validateStatus: '',
            helpText: ''
        };
        this.id = 1;
    }

    remove = k => {
        const {form} = this.props;
        const keys = form.getFieldValue('keys');
        if (keys.length === 0) return;
        const nextKeys = keys.filter(key => key !== k);
        form.setFieldsValue({
            keys: nextKeys
        });
        console.log(nextKeys.length);
        this.setState({
            count: nextKeys.length
        });
    };

    add = () => {
        if (this.state.validateStatus === 'success') {
            const {form} = this.props;
            const keys = form.getFieldValue('keys');
            const nextKeys = keys.concat(this.id++);
            form.setFieldsValue({
                keys: nextKeys,
            });
            console.log(nextKeys.length);
            this.setState({
                count: nextKeys.length
            });
        } else if (this.state.validateStatus === '') {
            this.setState({
                arg: 'x',
                validateStatus: 'error',
                helpText: '必须填写工作组名！'
            });
        }
    };

    handleChange = (event) => {
        const value = event.target.value;
        if (!value) {
            this.setState({
                arg: 'x',
                validateStatus: 'error',
                helpText: '必须填写工作组名！'
            });
        } else if (value.length <= 6 || value.length > 7) {
            this.setState({
                arg: 'x',
                validateStatus: 'warning',
                helpText: '工作组名长度为 7 ，例：K1U1A21'
            });
        } else if (!/[A-Z1-9]{6}[1-9]/.test(value)) {
            this.setState({
                arg: 'x',
                validateStatus: 'error',
                helpText: '请规范填写工作组名，例：K1U1A21'
            });
        } else {
            this.setState({
                validateStatus: 'success',
                helpText: '',
                arg: value.charAt(6),
            });
        }
    };

    render() {
        const {getFieldDecorator, getFieldValue} = this.props.form;
        getFieldDecorator('keys', {initialValue: []});
        const keys = getFieldValue('keys');
        const formItems = keys.map((key, index) => (
            <Form.Item key={key}>
                <SafetyCircle arg={this.state.arg} id={key} onRemove={() => this.remove(key)}/>
            </Form.Item>
        ));
        return (
            <div className='work-group'>
                <Form>
                    <Form.Item hasFeedback
                               validateStatus={this.state.validateStatus}
                               help={this.state.helpText}
                               label='工作组' style={{display: 'flex'}}>
                        <Input style={{minWidth: '16em', color: 'black'}} disabled={this.state.count !== 0}
                               autoComplete="off" placeholder='请输入工作组名称'
                               onChange={this.handleChange}/>
                    </Form.Item>
                    {formItems}
                    <Tooltip
                        placement="top"
                        mouseEnterDelay={0.4}
                        title="添加安全回路">
                        <Button className="add-work-group" type="dashed"
                                onClick={this.add}
                                style={{width: '100%'}}>
                            <Icon className="plus-circle" type="plus-circle" theme="twoTone"
                                  twoToneColor="#02cc6b"/>
                        </Button>
                    </Tooltip>
                </Form>
            </div>
        );
    }
}

export default Form.create()(WorkGroup);
