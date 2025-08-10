import axios from "axios";
const token = localStorage.getItem("token");
export async function Getprofile(id) {
    
  const { data } = await axios.get(
    `https://linked-posts.routemisr.com/users/${id}/posts`,
    {
      headers: { token },
    }
  );
  return data;
}
