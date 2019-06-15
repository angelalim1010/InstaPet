const posts = [
  {
    id: 1,
    userId: 5,
    userName: "billy",
    imageURL:
      "https://i.pinimg.com/originals/04/98/65/0498659455374a06c7db95f3a55222bd.jpg",
    likes: [7, 12], // an array of the userIds of users who liked this post
    caption:
      "Doggo doggo doggo doggo doggo doggo doggo doggo doggo doggo doggo doggo doggo doggo doggo doggo doggo doggo doggo doggo doggo",
    comments: [
      {
        id: 1,
        userId: 7,
        userName: "johnny12",
        content: "Wowwwww"
      },
      {
        id: 2,
        userId: 12,
        userName: "_jacky",
        content: "hearteyesemoji"
      },
      {
        id: 3,
        userId: 7,
        userName: "johnny12",
        content: "!!!!!!!!!!"
      }
    ],
    tags: ["dog", "pet", "cute", "aww"]
  },
  {
    id: 2,
    userId: 7,
    userName: "johnny12",
    imageURL: "https://data.whicdn.com/images/298844185/large.jpg?t=1507433077",
    likes: [5],
    caption: "Gatto",
    comments: [
      {
        id: 1,
        userId: 5,
        userName: "billy",
        content: "Congratulations!"
      }
    ],
    tags: ["cat", "pet", "cute", "aww"]
  },
  {
    id: 3,
    userId: 12,
    userName: "_jacky",
    imageURL:
      "https://i.pinimg.com/originals/c1/d3/ce/c1d3ce3e21df873370596aeef34d061b.jpg",
    likes: [],
    caption: "Moo",
    comments: [],
    tags: ["cow", "pet", "cute", "aww"]
  }
];

export default posts;
