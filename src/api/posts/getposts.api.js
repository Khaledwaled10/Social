import axios from "axios";

export async function Getposts() {
  const token = localStorage.getItem("token"); // هنا جوه الفنكشن
  const { data } = await axios.get(
    "https://linked-posts.routemisr.com/posts?sort=-createdAt",
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return data;
}
