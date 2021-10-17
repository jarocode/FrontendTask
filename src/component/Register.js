import React, {useState} from 'react';
import styled from '@emotion/styled';
import { message, Form, Input, Button, Typography} from 'antd';
import { useHistory } from 'react-router';

const {Paragraph, Text} = Typography;

const Register = () => {
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const onFinish = (formDetails) => {
        setLoading(true);
        console.log(formDetails);
        localStorage.setItem('__details', JSON.stringify(formDetails));
        setTimeout(() => {
            setLoading(false)
            return message.success("Account Created Successfully!");
        }, 1000);
        setTimeout(() => {
            history.push('/');
        }, 2500);
    }
    return (
        <Container>
            <P>Create account</P>
            <Form onFinish={onFinish} layout="vertical">
                <Div>
                <FormItem 
                    label="Surname" 
                    name="surname"
                    rules={[
                        {
                        required: true,
                        message: 'field is required'
                        }
                    ]}>
                    <StyledInput  placeholder="enter.." 
                        
                    />
                </FormItem>
                <FormItem 
                    label="Firstname" 
                    name="firstname"
                    rules={[
                        {
                        required: true,
                        message: 'field  is required'
                        }
                    ]}>
                    <StyledInput placeholder="enter..."/>
                </FormItem>
                
                </Div>
                <Div>
                <FormItem 
                    label="Username" 
                    name="username"
                    rules={[
                        {
                        required: true,
                        message: 'field is required'
                        }
                    ]}>
                    <StyledInput  placeholder="enter.." 
                        
                    />
                </FormItem>
                <FormItem 
                    label="Password" 
                    name="password"
                    rules={[
                        {
                        required: true,
                        message: 'field  is required'
                        }
                    ]}>
                    <StyledInput placeholder="enter password" type="password"/>
                </FormItem>
                
                </Div>
                <Div>
                <FormItem 
                    label="Phone Number" 
                    name="phone"
                    rules={[
                        {
                        required: true,
                        message: 'field is required'
                        }
                    ]}>
                    <StyledInput  placeholder="enter.." 
                        
                    />
                </FormItem>
                <FormItem 
                    label="Email Address" 
                    name="email"
                    rules={[
                        {
                        required: true,
                        message: 'field  is required'
                        }
                    ]}>
                    <StyledInput placeholder="enter..."/>
                </FormItem>
                
                </Div>
                <FormItem
                    label="Home Address" 
                    name="address"
                    rules={[
                        {
                        required: true,
                        message: 'field  is required'
                        }
                    ]} 
                   >
                    <Input.TextArea rows={3} style={{marginTop:'1rem'}}/>
                </FormItem>
                
                <FormItem 
                   >
                    <Submit  htmlType="submit" loading={loading}>Register</Submit>
                </FormItem>
            </Form>
            <Para>Already have an Account? <Sp onClick={()=> history.push("/")}>Log In</Sp></Para>
        </Container>
    )
}

export default Register;

const Container = styled.div`
    min-height: 30rem;
    margin-top: 2rem;
    width: 30rem;
    box-shadow: 0px 12px 35px 0px #A0790033;
    border-radius : 5px;
    padding: 1.5rem 2rem 3rem 2rem;
`;

const Div = styled.div`
    display: flex;
    width: 100%;
    gap: 3%;
    justify-content: space-between;
`;

const P = styled(Paragraph)`
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    color: #006633;
    margin-bottom: 1rem!important;
`;

const Para = styled(Paragraph)`
    font-size: 1rem;
    font-weight: 600;
    color: #006633;
`;
const Sp = styled(Text)`
    font-size: 1.3rem;
    font-weight: bold;
    color: #003399;
    text-decoration: underline;
    cursor: pointer;
`;

const StyledInput = styled(Input)`
    display: block!important;
    width: 100%;
    height: 2.5rem;
    margin-bottom: 0rem;
`;

const FormItem = styled(Form.Item)`
    margin-top: 0rem;
    display: block!important;
    width: 100%;
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