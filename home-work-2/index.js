let getListStatus = true;
let postPostStatus = true;

let posts = [
  { postId: 1, post: "Post 1" },
  { postId: 2, post: "Post 2" },
  { postId: 3, post: "Post 3" },
  { postId: 4, post: "Post 4" },
  { postId: 5, post: "Post 5" },
];

const getList = () => {
  return new Promise((resolve, reject) => {
    if (getListStatus) resolve(posts);
    else reject("Liste Alınamadı");
  });
};

const postUpdate = (post) => {
  return new Promise((resolve, reject) => {
    if (postPostStatus) resolve(posts.push(post));
    else reject("Post Gönderilirken Hata Oluştu");
  });
};

async function processData() {
  try {
    await postUpdate({ postId: 6, post: "Post 6" });
    const updadetdList = await getList();
    updadetdList.map((item) => console.log(item));
  } catch (err) {
    console.log(err);
  }
}

processData();
