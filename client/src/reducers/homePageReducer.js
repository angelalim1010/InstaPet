import {
    GET_POSTS,
    LIKE_POST
} from "../actions/types";

const initialState = {
    posts:
        [{ "id": 1, "imageURL": "https://i.pinimg.com/originals/04/98/65/0498659455374a06c7db95f3a55222bd.jpg", "Description": "Doggo", "likes": 340 },
        { "id": 2, "imageURL": "https://data.whicdn.com/images/298844185/large.jpg?t=1507433077", "Description": "Gatto", "likes": 123 },
        { "id": 3, "imageURL": "https://i.pinimg.com/originals/c1/d3/ce/c1d3ce3e21df873370596aeef34d061b.jpg", "Description": "Moo", "likes": 562 }],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload
            };
        case LIKE_POST:
            let targetPostId = action.payload;
            let updatedPostArray = state.posts;
            let indexOfTargetPost = updatedPostArray.findIndex(
                post => post.id === targetPostId
            );
            updatedPostArray[indexOfTargetPost].likes = state.posts[indexOfTargetPost].likes + 1;

            return {
                ...state,
                posts: updatedPostArray
            };
        default:
            return state;
    }
};