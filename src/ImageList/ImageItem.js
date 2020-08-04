import React, { Component } from 'react'



export default class ImageItem extends Component {


    render() {
        return (
            <div>
                {this.props.data
                .filter(creature => {
                    if(!this.props.keyword && !this.props.hornCount) { 
                        return true;
                    }
                    else if (!this.props.keyword && this.props.hornCount)
                    {
                        return creature.horns.toString() === this.props.hornCount;
                    }
                    else if (this.props.keyword && !this.props.hornCount) {
                        return this.props.keyword === creature.keyword;
                    }
                    return creature.horns.toString() === this.props.hornCount && this.props.keyword === creature.keyword;
                })
                .map((image) =>
                    <img src={image.url.includes('modernfarmer') ? 'http://www.placekitten.com/200/200' : image.url} key={image.title} alt={image.title} />
                    )}
            </div>
        )
    }
}
