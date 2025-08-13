import axios from "axios";
export async function Getprofile(id) {
  const token = localStorage.getItem("token");
    
  const { data } = await axios.get(
    `https://linked-posts.routemisr.com/users/${id}/posts`,
    {
      headers: { token },
    }
  );
  return data;
}
