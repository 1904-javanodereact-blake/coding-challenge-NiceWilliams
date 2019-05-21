import React from 'react';
import { number, string } from 'prop-types';
import { MonsterCardComponent } from './monstercard.component';
import { Monster } from '../../model/monster';

interface InterState {
    monsters: Monster[]
}

export class MonsternameComponent extends React.Component<any, InterState> {

    constructor(props: any) {
        super(props);
        this.state={
            monsters:[]
        };
    }
    componentDidMount = async () => {
        const response = await fetch('http://localhost:8081/monsters', {
            credentials: 'include'
        });
        const body = await response.json();
        let monsterA = body.map(monster => {
            let resultObj = {
                monsterid: number,
                monstername: string,
                password: string,
                role: string
            };
            resultObj.monsterid = monster.monsterid;
            resultObj.monstername = monster.monstername;
            resultObj.password = monster.monster_password;
            resultObj.role = monster.monster_role;
            return resultObj;
        });
        console.log(monsterA);
        this.setState({
            monsters: monsterA
        })
    }

    render() {
    console.log(this.state.monsters)
        return (
            <div className="container">
             <div className="row">
                {this.state.monsters.map(monster => 
                <MonsterCardComponent key={'monster-' + monster.monsterid} monster={monster} />
                )}
             </div>
            </div>
        );
    }

}