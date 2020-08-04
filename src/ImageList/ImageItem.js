import React, { Component } from 'react'



export default class ImageItem extends Component {


    render() {
        return (
            <div>
                {this.props.data
                .filter(creature => {
                    if(!this.props.keyword) return true;
                    return creature.keyword === this.props.keyword;
                })
                .map((image) =>
                    <img src={image.url} />
                    )}
            </div>
        )
    }
}
