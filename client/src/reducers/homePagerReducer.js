import { GET_POSTS } from "../actions/types";

const initialState = {
    posts:
        [{ "id": 1, "imageUrl": "https://i.pinimg.com/originals/04/98/65/0498659455374a06c7db95f3a55222bd.jpg", "Description": "Doggo" },
        { "id": 2, "imageUrl": "https://data.whicdn.com/images/298844185/large.jpg?t=1507433077", "Description": "Gatto" },
        { "id": 3, "imageUrl": "https://i.pinimg.com/originals/c1/d3/ce/c1d3ce3e21df873370596aeef34d061b.jpg", "Description": "Moo" }],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload
            };
        // case LIKE_POST:
        //     let targetPostId = action.payload;
        //     let array = state.posts.filter(post => targetPostId.includes(post.id));
        //     return {
        //         ...state,
        //         posts: array
        //     };
        default:
            return state;
    }
};
