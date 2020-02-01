import React from 'react';
import '../WaterWaste.css'


const WaterWaste = (props) => {

    const bought = props.products.filter(product => product.active === false);

    const incarts = bought.map(product => product);


    console.log(incarts)

    const production = incarts.map(incart => incart.production)
    const eko = incarts.map(incart => incart.eko)
    const cansave = incarts.map(incart => incart.cansave)

    console.log(production)

    const sum = production.reduce(function (total, next) {
        return total + next;
    }, 0)

    const ecoChoise = eko.reduce(function (total, next) {
        return total + next;
    }, 0)

    const lowervalue = cansave.reduce(function (total, next) {
        return total + next;
    }, 0)




    return (
        <section className='waste'>
            <div className='sum_production'>
                <h2>Do produkcji zużyto: <span>{sum} l</span></h2>
            </div>
            <div className='sum_production'>
                <h2>Ekologoczne zamienniki: <span>{ecoChoise} l</span></h2>

            </div>
            <div className='save'>
                <h2>Możesz oszczędzić: <strong>{lowervalue} l</strong></h2>

            </div>
            <button className='more'><a href= 'https://mknowak.github.io/save-water-page/'>Dowiedz się więcej</a></button>
        </section>

    )
}

export default WaterWaste;
