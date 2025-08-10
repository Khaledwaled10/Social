
import  axios  from 'axios';
export async function Loginfn(dataform){
const {data}=await axios.post('https://linked-posts.routemisr.com/users/signin',dataform)
return data;
}