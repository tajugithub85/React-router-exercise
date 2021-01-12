import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ColourWheel } from './colorwheel'
import './color.css'

export class NewColor extends Component {
    constructor(props) {
        super(props)
        this.state = {color: 'null'}
        this.getColor = this.getColor.bind(this)
    }
    handleClick(e) {
        //preventDefault stops React links from working? hmm...
        // e.preventDefault()

        const input1 = e.target.parentNode.parentNode.children[1], input2 = e.target.parentNode.parentNode.children[4]

        if (input1.value !== '' && input2.value !== '') {
            const color = { name: input1.value, value: input2.value };
            const storedColors = JSON.parse(localStorage.getItem('colors'));
            storedColors.colors.unshift(color);
            localStorage.setItem('colors', JSON.stringify(storedColors));
        } else {
            alert('fill in all input fields!');
        }

    }

    getColor(color) {
        this.setState({ color: color })
        const colorValue = document.getElementById('value');
        colorValue.value = this.state.color
    }

    getInput() {
        const colorWheel = document.querySelector('.colorWheel');
        colorWheel.style.display = 'block';
    }

    render() {
        return (
            <div className='newcolor'>
                <form className='form'>
                    <label htmlFor='colorName'>Color Name:</label>
                    <input type='text' id='colorName' />
                    <br />
                    <label htmlFor='value'>Color Value:</label>
                    <input type='text' id='value' onClick={this.getInput} /> 
                    <div className='displayColor' style={{background:this.state.color}}></div>
                    <div className='colorWheel'>
                        <ColourWheel width={100} callback={this.getColor} />
                        <p>double click, hold and drag!</p>
                    </div>
                    <br />
                    <Link to='/colors' style={{ textDecoration: 'none' }}>
                        <p className='btn' onClick={this.handleClick}>Add this color</p>
                    </Link>
                </form>
            </div>
        )
    }
}