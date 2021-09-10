import data from "./data.json";
import React  from "react";
import Opciones from "./Opciones";
import Recordatorio from "./Recordatorio";
import Swal from 'sweetalert2';

class Historia extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
          contador: 0,
          idHistoria: "1",
          seleccionAnterior: "",
          historial: []
        };
    }

    static getDerivedStateFromProps( props, state ){
        if( state.seleccionAnterior === "" ){
            return null;
        } else {
            return { historial : [ ...state.historial, state.seleccionAnterior ] };
        }
    }

    handleSelect = ( event ) => { 
        if( this.state.contador > 4 ){
            Swal.fire( `¡Elegiste el final ${ event.target.id }!` );
        } else {
            this.setState( ( prevState ) => ({
               contador : ( prevState.contador + 1 ) === 1 ? 2 : ( prevState.contador + 1 ),
               idHistoria : String( ( prevState.contador + 1 ) === 1 ? 2 : ( prevState.contador + 1 ) ) + event.target.id.toLowerCase(),
               seleccionAnterior : event.target.id,
            }));
        }
    }
    
    render(){
        const { seleccionAnterior, historial } = this.state;
        const narracionActual = data.find( item => item.id === this.state.idHistoria );

        return (
            <div className="layout">
                <h1 className="historia">{ narracionActual.historia }</h1>
                <Opciones opciones={ narracionActual.opciones } handleSelect={ this.handleSelect }/>
                <Recordatorio seleccionAnterior={ seleccionAnterior } historial={ historial }/>
            </div>
        )
    }
}

export default Historia;