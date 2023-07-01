import { useState, useEffect } from 'react';

const changeColor = (type: string) => {
    if (type === 'Plante') return '#78C850';
    if (type === 'Poison') return '#A040A0';
    if (type === 'Feu') return '#F08030';
    if (type === 'Vol') return '#A890F0';
    if (type === 'Eau') return '#6890F0';
    if (type === 'Insecte') return '#A8B820';
    if (type === 'Normal') return '#A8A878';
    if (type === 'Electrik') return '#F8D030';
    if (type === 'Fée') return '#EE99AC';
    if (type === 'Combat') return '#C03028';
    if (type === 'Spectre') return '#705898';
    if (type === 'Acier') return '#B8B8D0';
    if (type === 'Psy') return '#F85888';
    if (type === 'Sol') return '#E0C068';
    if (type === 'Roche') return '#B8A038';
    if (type === 'Glace') return '#98D8D8';
    if (type === 'Dragon') return '#7038F8';
    if (type === 'Ténèbres') return '#705848';
    return '#275299';
}


export const useTypeColor = (types: string) => {
    const [color, setColor] = useState<string>("#275299");

    useEffect(() => {
        setColor(changeColor(types))
    }, [types]);

    return color;
}