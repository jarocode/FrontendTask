import React, {useState} from 'react';
import styled from '@emotion/styled';
import { message, Form, Input, Button, Typography, Select} from 'antd';
import { useHistory } from 'react-router';

import signIn from '../apis/signIn';
import { yearOptions } from '../utils/functions';

const {Paragraph} = Typography;
const {Option} = Select;

const FIleAssessment = () => {
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const onFinish = (formDetails) => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            return message.success("File Assessment Successful!");
        }, 2500);
    }
    return (
        <Container>
            <P>File Assessment</P>
            <Form onFinish={onFinish} layout="vertical">
                <FormItem 
                    label="Assessment Year" 
                    name="year"
                    rules={[
                        {
                        required: true,
                        message: 'Field is required'
                        }
                    ]}>
                     <Select defaultValue="2021">
                            {
                                yearOptions().map(year => 
                                <Option value={year.toString()}>{year.toString()}</Option>)
                            } 
                        </Select>
                </FormItem>
                <FormItem 
                    label="Assessment Amount" 
                    name="amount"
                    rules={[
                        {
                        required: true,
                        message: 'Field  is required'
                        }
                    ]}>
                    <StyledInput placeholder="enter..."/>
                </FormItem>
                <Form.Item 
                        label="Assessment Type" 
                        name="type" 
                        rules={[
                            {
                              required: true,
                              message: 'Field is required'
                            }
                        ]} 
                    >
                        <Select defaultValue="PAYE">
                            <Option value="PAYE">PAYE</Option>
                            <Option value="VAT">VAT</Option>
                            <Option value="WHT">WHT</Option>
                        </Select>
                    </Form.Item>
                <FormItem 
                   >
                    <Submit  htmlType="submit" loading={loading}>Send</Submit>
                </FormItem>
            </Form>
        </Container>
    )
}

export default FIleAssessment;

const Container = styled.div`
    height: 30rem;
    margin-top: 2rem;
    width: 20rem;
    box-shadow: 0px 12px 35px 0px #A0790033;
    border-radius : 5px;
    padding: 1.5rem 2rem 3rem 2rem;
    
`;
const P = styled(Paragraph)`
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    color: #006633;
`;
const Para = styled(Paragraph)`
    font-size: 1rem;
    font-weight: 600;
    color: #006633;
`;
const Sp = styled(Paragraph)`
    font-size: 1.3rem;
    font-weight: bold;
    color: #003399;
    text-decoration: underline;
    cursor: pointer;
`;

const StyledInput = styled(Input)`
    display: block;
    width: 100%;
    height: 2.5rem;
    margin-bottom: 0rem;
`;

const FormItem = styled(Form.Item)`
    margin-top: 2rem;
`

const Submit = styled(Button)`
    height: 2.8rem;
    width: 100%;
    border: none;
    font-size: 16px;
    margin-top: 0rem;
    border-radius: 6px;
    display: block!important;
    color: #fff;
    background: #006633;
    cursor: pointer;
    &:hover{
        color: #003399;
        background: #fff;
        border: 1px solid #003399;
    }
`;