import React  from "react";

class Opciones extends React.Component {
    
    render(){
        const { a: opcionA, b: opcionB } = this.props.opciones;
        
        return (
            <div className="opciones">

                <div className="opcion">
                    <button id="A" className="botones" onClick={this.props.handleSelect}>A</button>
                    <h2>{opcionA}</h2>
                </div>

                <div className="opcion">
                <button id="B" className="botones" onClick={this.props.handleSelect}>B</button>
                <h2>{opcionB}</h2>
                </div>

            </div>
        )
    }
}

export default Opciones;