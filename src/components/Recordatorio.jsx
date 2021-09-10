import React  from "react";

class Recordatorio extends React.Component {

    render(){
        const { seleccionAnterior, historial } = this.props;
        
        return (
            <div className="recordatorio">
                <h3>Selección anterior: {seleccionAnterior}</h3>
                <h4>Historial de opciones elegidas:</h4>
                <ul>
                    {historial.map((item, index) => <li key={String(index)}>{item}</li>)}
                </ul>
            </div>
        )
    }
}

export default Recordatorio;