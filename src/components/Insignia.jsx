import React from 'react';
import '../styles/Insignia.css';
import Logo from '../images/logo-negro.png'

class Insignia extends React.Component{
    render(){
        // const firstName= 'Patricia'

 
        return(
            <div className= 'Insignia'>
                <div className='Insignia_header'>
                    <img src={Logo} alt='Logo'/>
                </div>
                <div className='Insignia__section_name'>
                    <img className='Insignia__avatar' src={this.props.avatar}/>
                    <h1>{this.props.firstName}<br/> {this.props.lastName}</h1>
                </div>
                <div className='Insignia__section_info'>
                    <h2>FrontEnd Enginner</h2>
                    <div>{this.props.twitter}</div>
                </div>
                <div className= 'Insignia__footer'>
                    POLITECNICO
                </div>
            </div>
        )
    }
}
export default Insignia;