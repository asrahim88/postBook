import React from 'react';

const PostDetails = (props) => {
    const {Title} = props.post;
    
    return (
        <div>
          Title: {Title}
        </div>
    );
};

export default PostDetails;