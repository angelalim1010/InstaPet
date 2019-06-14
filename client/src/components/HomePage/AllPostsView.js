import React, { Component } from "react";
import { connect } from "react-redux";
import Post from "../post/Post";

class AllPostsView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: this.props.homePage.posts
        };
    }

    render() {
        return (
            <div>
                {this.state.posts.map((post) => (
                    <div key={post.id}>
                        <p>{post.id}</p>
                        <Post post={post} />
                    </div>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    homePage: state.homePage
});

export default connect(
    mapStateToProps,
    // mapDispatchToProps
)(AllPostsView);
