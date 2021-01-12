import React from 'react'
import { Link } from 'react-router-dom'
import { Color } from './color'

const colors = { colors: [{ name: 'red', value: '#FF0000' }, { name: 'green', value: '#008000' }, { name: 'blue', value: '#0000FF' }] }

const storedColors = localStorage.getItem('colors')  ? 'do nothing' : localStorage.setItem('colors',JSON.stringify(colors))

const style={background:'rgb(24, 23, 23',color:'white',height:'120px',marginTop: '-20px'}

export class Colors extends React.Component{
    constructor(props) {
        super(props)
        this.state = JSON.parse(localStorage.getItem('colors'))
      }
    
    render(){
        let id = -1
        const allColors = this.state.colors.map(color => {
            return <Color key={id++} name={color.name} value={color.value} />
          })

        return(
            <div style={style}>
                <h2>Welcome to our color industry.</h2>
                <Link to='/colors/new' style={{ textDecoration: 'underline white' }}>
                   <h1 style={{color:'white'}}>Add a color</h1>
                </Link>
                <p style={{color:'blue',marginTop:'40px'}}>Please select a color</p>
                <ul>{allColors}</ul>
            </div>
        )
    }
}
