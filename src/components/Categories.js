import React, { Component } from 'react'

export class Categories extends Component {

    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'Все'
                },
                {
                    key: 'chairs',
                    name: 'Стулья'
                },
                {
                    key: 'tables',
                    name: 'Столы'
                },
                {
                    key: 'sofa',
                    name: 'Диваны'
                },
                {
                    key: 'light',
                    name: 'Свет'
                },
                {
                    key: 'cabinets',
                    name: 'Шкафы'
                }
            ]
        }
    }
    render() {
        return (
        <div>Categories</div>
        )
    }
}

export default Categories