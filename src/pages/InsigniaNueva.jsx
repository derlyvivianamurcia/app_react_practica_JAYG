import React from 'react';
import LogoHeader from '../images/logo.png'
import Insigna from '../components/Insignia.jsx'
import Navbar from '../components/Navbar.jsx'
import InsigniaFormulario from '../components/InsigniaFomulario';
import Insignia from '../components/Insignia.jsx';

class InsiginiaNueva extends React.Component{
    state={
        form:{
            firstName:'',
            lastName:'',
            email:'',
            ocupacion: '',
            twitter:'',
        }
    };

    handleChange= (e)=>{
        const nextForm = this.state.form
        nextForm [e.target.name] = e.target.value
        this.setState({
            form:nextForm,
        })
    }

    render(){
        return(
            <div>
            <Navbar/>
            <div className='BadgeNew__hero'>
                <img className='img-fluid' src={LogoHeader} alt='Logo'/>
            </div>
           <div className='container'>
            <div className='row'>
                <div className='col-6'>
                    <Insignia
                        firstName={this.state.form.firstName}
                        lastName={this.state.form.lastName}
                        email={this.state.form.email}
                        ocupacion={this.state.form.ocupacion}
                        twitter={this.state.form.twitter}
                        avatar='https://lh3.googleusercontent.com/ogw/ADGmqu_e23iETjKvu6OThpjgArZYP58etUW65I32YKU0=s83-c-mo'
                    />
                </div>
                <div className='col-6'>
                    <InsigniaFormulario onChange={this.handleChange} formValues={this.state.form} />
                </div>
            </div>
           </div>
            </div>
        )
    }
}

export default InsiginiaNueva;