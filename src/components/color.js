import React from 'react'
import { Link } from 'react-router-dom'

export class Color extends React.Component{
    render(){
        return(
            <Link  to={{
                pathname: 'colors/' + this.props.name,
                state: { name:this.props.name,value: this.props.value }
              }} >
              <li  style={{ listStyleType: 'none', marginRight: '30px', marginBottom: '5px' }}>{this.props.name}</li>
            </Link>
        )
    }
}