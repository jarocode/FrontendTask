import Axios from 'axios';
import BASE_URL from '../config/config';

const signIn = async (loginData) => {
   try {
    const {data} =  await Axios.post(`${BASE_URL}/api/auth/signin`, loginData);
    return data;
   } catch (error) {
       throw error;
   }
}

export default signIn;