import React, { Component } from 'react'



export default class ImageItem extends Component {


    render() {
        return (
            <div>
                {this.props.data
                .filter(creature => {
                    if(!this.props.keyword && !this.props.hornCount) return true;
                    return creature.horns.toString() === this.props.hornCount && this.props.keyword === creature.keyword;
                })
                .map((image) =>
                    <img src={image.url} key={image.title} alt={image.title} />
                    )}
            </div>
        )
    }
}
