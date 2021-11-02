import React from "react";
import './card-list.stylesheet.css/style.css'
import {Card} from './card/card.component'
export const CardList=(props)=>{

    return (<div className="card-list">
        {props.monster.map(moster=><Card key={moster.id} monster={

        moster}> </Card>)}
        
        </div>)
}