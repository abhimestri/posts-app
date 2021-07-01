export const useHttp = async (method, body = null, id = "") => {
  try {
    const posts = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        method,
        body,
      }
    );
    let res = await posts.json();
    if (method === "GET") {
      return [...res].slice(0, 5);
    } else {
      return posts;
    }
  } catch (err) {
    alert("something went wrong");
  }
};
