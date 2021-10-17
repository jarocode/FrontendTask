import Axios from 'axios';
import BASE_URL from '../config/config';

const signUp = async (signUpData) => {
   try {
    const {data} =  await Axios.post(`${BASE_URL}/api/auth/signup`, signUpData);
    return data;
   } catch (error) {
       throw error;
   }
}

export default signUp;
