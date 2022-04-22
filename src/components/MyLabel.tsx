import './mylabel.css';


import React from 'react';

export interface Props {

    /**
    * Este es el mensaje a mostrar en la etiqueta
    */
    label: string;
    /**
    * Este es el tamaño de la etiqueta
    */
    size: 'normal' | ' h1' | 'h2' | 'h3';
    allCaps: true | false;
    color: 'primary' | 'secondary' | 'tertiary';
    /**
    * Este es el color de la fuente
    */
    fontColor?: string;

}

export const MyLabel = ({
    label = 'No label',
    size = 'normal',
    color= 'primary',
    allCaps = false,
    fontColor
}: Props) => {
    return (
        <span 
            className={`label ${ size }  text-${ color } `} 
            style={{color:fontColor}}
        >
            {allCaps ? label.toUpperCase() :label}
        </span>
    )
}



