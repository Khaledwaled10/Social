import axios from "axios";
const token = localStorage.getItem("token");
export async function Getsingleposts(id) {
  const { data } = await axios.get(
    `https://linked-posts.routemisr.com/posts/${id}`,
    {
      headers: { token },
    }
  );
  return data;
}
