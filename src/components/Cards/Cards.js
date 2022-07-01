import React from 'react'
import styles from './Cards.module.scss';

const Cards = ({results}) => {
    
    let display;
    console.log(results);

    if(results){
        display = results.map(result => { 
            let {id, name, image, status} = result;
            let badgeColor;
            switch (status){
                case 'Alive':
                    badgeColor = "bg-success";
                    break;
                case 'Dead':
                    badgeColor = "bg-danger";
                    break;
                default:
                    badgeColor = "bg-secondary";
            }
            return(
                <div key={id} className="col-4 position-relative mb-4">
                    <div className="border border-primary border border-3 rounded">
                        <img src={image} className="img-fluid"/>
                        <div className="fs-3 m-2">{name}</div>
                    </div>
                    <div className={`${styles.badge} badge ${badgeColor} position-absolute`}>{status}</div>
                </div>
            );
        });
    }
    else{
      display =  "No character found.";
    }
    return (
        <>{display}</>
    )
}

export default Cards;