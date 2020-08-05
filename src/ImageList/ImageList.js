import React, { Component } from 'react'
import ImageItem from './ImageItem'


export default class ImageList extends Component {
    render() {
        return (
            <div className="image-box">
                <ImageItem data={this.props.data} keyword={this.props.keyword} hornCount={this.props.horns} />
            </div>
        )
    }
}
