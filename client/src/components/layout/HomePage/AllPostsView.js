import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "reactstrap";

class AllPostsView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: this.props.posts
        };
    }

    render() {
        return (
            <div>
                {this.state.posts.map((post) => (
                    <div key={post.id}>
                        <img src={post.imageURL} />
                        <p> Description: {campus.description}</p>
                        <Button onClick={() => this.props.likePost(post.id)}>Like</Button>
                    </div>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    posts: state.posts
});

const mapDispatchToProps = dispatch => {
    return {
        likePost: postId => dispatch(likePost(postId))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AllPostsView);
