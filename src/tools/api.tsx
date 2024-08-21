import axios from 'axios';



 export const axiosInstance = axios.create({
   baseURL: 'https://star-wars-api-v1.vercel.app',
   timeout: 5000, 
   headers: {
     'ContentType': 'application/json',
   },
 });

 export const fetchData = async ( url: string , options = {}): Promise<any>  => {
   try {
     const response = await axiosInstance(url, options);
     return response.data;
   } catch (error) {
     console.error('Error retrieving data:', error);
     throw new Error('Could not get data');
   }
 };