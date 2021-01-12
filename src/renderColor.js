import { Link, Redirect } from 'react-router-dom'

export function RenderColor({ match }) {
    const allColors = JSON.parse(localStorage.getItem('colors'))
    const color = allColors.colors.find(color => color.name === match.params.name)
    
    if (!color) return <Redirect to='/colors' /> 

    const style = {
        height: '100vh',
        width: '100vw',
        textAlign: 'center',
        fontSize: '5rem',
        color: '#fff',
        background: color.value
    }

    return (
        <div style={style}>
            This is {color.name} <br /> <br /> isn't it beautiful?
            <br /><br />
            <Link to='/colors'  style={{ textDecoration: 'underline white' }}>
                <div style={{ color: '#fff' }}>Go back</div>
            </Link>
        </div>
    )
}