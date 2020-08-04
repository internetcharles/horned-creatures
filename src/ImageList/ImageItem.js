import React, { Component } from 'react'



export default class ImageItem extends Component {


    render() {
        return (
            <div>
                {this.props.data.map((image) =>
                    <img src={image.url} />
                    )}
            </div>
        )
    }
}
