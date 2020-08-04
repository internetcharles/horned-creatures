import React, { Component } from 'react'
import ImageItem from './ImageItem'



export default class ImageList extends Component {
    render() {
        return (
            <div>
                <ImageItem data={this.props.data} />
                {console.log(this.props.data)}
            </div>
        )
    }
}
