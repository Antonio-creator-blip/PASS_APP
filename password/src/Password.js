import React from 'react'

class Password extends React.Component{
    constructor(){
        super()
        this.state={
            chiaro: "",
            criptato: "",
            lunghezza: "Consigliato inserire minimo 8 caratteri"
        }
    }

    encrypt(testo){
        let testo_criptato = '########'
        for(let i=0;i<testo.length;i++){
            if(testo.length<8){
                console.log("Sto in if")
                if(testo[i]==='s'){
                    testo_criptato=testo_criptato.replace('#','$')
                }else if(testo[i]==='a'){
                    testo_criptato=testo_criptato.replace('#','@')
                }else if(testo[i]==='l'){
                    testo_criptato=testo_criptato.replace('#','1')
                }else if(testo[i]==='e'){
                    testo_criptato=testo_criptato.replace('#','3')
                }else if(testo[i]==='o'){
                    testo_criptato=testo_criptato.replace('#','0')
                }else if(testo[i]==='g'){
                    testo_criptato=testo_criptato.replace('#','6')
                }else if(testo[i]===' '){
                    testo_criptato=testo_criptato.replace('#','_')
                }else{
                    testo_criptato=testo_criptato.replace('#',testo[i])
                }
            }else{
                console.log("Sto in else")
                if(testo[i]==='s'){
                    testo_criptato=testo_criptato.replace('','$')
                }else if(testo[i]==='a'){
                    testo_criptato+='@'
                }else if(testo[i]==='l'){
                    testo_criptato+='1'
                }else if(testo[i]==='e'){
                    testo_criptato+='3'
                }else if(testo[i]==='o'){
                    testo_criptato+='0'
                }else if(testo[i]==='g'){
                    testo_criptato+='6'
                }else if(testo[i]===' '){
                    testo_criptato+='_'
                }else{
                    testo_criptato+=testo[i]
                }
                testo_criptato=testo_criptato.replace('#','')
            }
        }
        
        return testo_criptato
    }

    lung(testo){
        console.log(testo.length)
        testo = testo.replace(/#/g,'')
        if(testo.length<7){
            return "Consigliato inserire minimo 8 caratteri"
        }else{
            return "Lunghezza giusta"
        }
    }

    aggiornaChiaro = (evento) =>{
        let testo = evento.target.value;
        this.setState({
            chiaro:testo,
            criptato: this.encrypt(testo),
            lunghezza: this.lung(this.state.criptato)
        })
    }

    render(){
        return(
            <section>
                <div>
                    <label>Inserisci una parola </label><br/>
                    <input type='text' value={this.state.chiaro} onChange={this.aggiornaChiaro}></input>
                </div>
                <div>
                    <label>La tua password </label><br/>
                    <input type='text' value={this.state.criptato} readOnly></input>
                </div>
                <br/>
                <div>
                    {this.state.lunghezza}
                </div>
            </section>
        )
    }
}

export default Password;