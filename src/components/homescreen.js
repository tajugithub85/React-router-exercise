import { Component } from 'react';
import { Link } from 'react-router-dom'
import './homescreen.css'

export class Homescreen extends Component {
    render() {
        return (
            <main>
                <div className='div'>
                    <h1 className='heading'>Color Factory</h1>
                    <Link to='/colors' style={{ textDecoration: 'underline indigo' }}>
                        <div className='text'>Visit our color factory!</div>
                    </Link>
                </div>
            </main>
        )
    }
}