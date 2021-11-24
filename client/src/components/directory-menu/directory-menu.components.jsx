import React, { Component } from 'react';
import MenuItem from '../menu-item/menu-item.components';

export class DirectoryMenu extends Component {
    constructor(props){
        super(props);
        this.state={
            Sections:[
            {
                "title":'Jackets',
                'id':1,            
            },
            {
                'title' : 'Hats',
                'id': 2,

            },
            {
                'title': 'Snekers',
                'id':3,
            },
            {
                'title': 'Man',
                'id': 4,
            },
            {
                'title' : 'Women',
                'id' : 5,
            }
    ]
    } }
    render() {
        return (
            <div className="directory-item">
            {this.state.Sections.map(({title,id}) =>(
                <MenuItem title={title} key={id} />
            ))}
                
            </div>
        )
    }
}

export default DirectoryMenu;
