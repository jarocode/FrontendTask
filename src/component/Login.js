import React, {useState} from 'react';
import styled from '@emotion/styled';
import { message, Form, Input, Button, Typography} from 'antd';
import { useHistory } from 'react-router';

const {Paragraph} = Typography;

const Login = () => {
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const onFinish = (formDetails) => {
        setLoading(true);
        const userData = JSON.parse(localStorage.getItem('__details'));
        if(userData.username !== formDetails.username){
            setLoading(false);
            return message.error("Invalid username!")
        };
        if(userData.password !== formDetails.password) {
            setLoading(false);
            return message.error("Incorrect password!")
        };
    }
    return (
        <Container>
            <P>Log In</P>
            <Form onFinish={onFinish} layout="vertical">
                <FormItem 
                    label="Username" 
                    name="username"
                    rules={[
                        {
                        required: true,
                        message: 'Username is required'
                        }
                    ]}>
                    <StyledInput  placeholder="username" 
                        
                    />
                </FormItem>
                <FormItem 
                    label="Password" 
                    name="password"
                    rules={[
                        {
                        required: true,
                        message: 'Password  is required'
                        }
                    ]}>
                    <StyledInput placeholder="password"/>
                </FormItem>
                <FormItem 
                   >
                    <Submit  htmlType="submit" loading={loading}>Log In</Submit>
                </FormItem>
            </Form>
            <Para>Don't have an Account? <Sp onClick={()=> history.push("/register")}>SignUp</Sp></Para>
        </Container>
    )
}

export default Login;

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