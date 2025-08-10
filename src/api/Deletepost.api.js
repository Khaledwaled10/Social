import axios from "axios";
const token = localStorage.getItem("token");
export async function deletepost(id) {
  const { data } = await axios.delete(
    `https://linked-posts.routemisr.com/posts/${id}`,
    {
      headers: { token },
    }
  );
  return data;
}
