import axios from "axios";
export async function deletepost(id) {
  const token = localStorage.getItem("token");
  const { data } = await axios.delete(
    `https://linked-posts.routemisr.com/posts/${id}`,
    {
      headers: { token },
    }
  );
  return data;
}
