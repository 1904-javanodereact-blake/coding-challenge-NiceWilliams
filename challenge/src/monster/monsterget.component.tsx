import React from 'react';
import { number, string } from 'prop-types';




export class MonsterGetComponent extends React.Component<any, any> {
    
    constructor(props: any) {
        super(props);
        this.state = {
         monster: {monsterid: 0, monstername: '', password: '', role: ''},
         inputValue: string
        };
    }


  newMonster = async (monsterid) => {
    const resp = await fetch('http://localhost:8081/users/' + monsterid,{

       credentials: 'include'
    });
    const body = await resp.json();
    console.log(body);
    let monsterA = body;
    let monsterB = {
        monsterid: number,
        monstername: string,
        password: string,
        role: string
    };
    monsterB.monsterid = monsterA.monsterid;
    monsterB.monstername = monsterA.monstername;
    monsterB.password = monsterA.monster_password;
    monsterB.role =monsterA.user_role;
    console.log(monsterB);
    this.setState({
        monster: monsterB
    })

  }
    updateInputValue(e) {
     this.setState({
       inputValue: e.target.value
     });
    }

    render() {
      return(
       <div className="container">
        <img src="data:image/jpeg;base64,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"
          className="card-img-top"
          alt="..." />
        <div className="row">
        <div className="card col-md-4 col-sm-6 col-xs-12">
        <input type="text" value={this.state.inputValue} onChange={(e) => this.updateInputValue(e)}></input><br></br>
        <button onClick={() => this.newMonster(this.state.inputValue)} className="btn btn-primary">Retrieve</button>

        <div className="card-body">
            <h4 className="card-title">{this.state.monstername}</h4>
        </div>
        <ul className="list-group list-group-flush">
         <li className="list-group-item">ID: {this.state.monster.monsterid}</li>
         <li className="list-group-item">Monstername: {this.state.monster.monstername}</li>
         <li className="list-group-item">Password: {this.state.monster.password}</li>
         <li className="list-group-item">Role: {this.state.monster.role}</li>
       </ul>
    </div>
       </div>
    </div>
  );
 }
}