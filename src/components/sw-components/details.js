import React from 'react'

import ItemDetails, { Record } from '../item-details'
import SwapiService from '../../services/swapi-service'

const swapiServices = new SwapiService();

const {
    getPerson,
    getPlanet,
    getStarship,
    getPersonImage,
    getPlanetImage,
    getStarshipImage
} = swapiServices

const PersonDetails = ({ itemId }) => {

    return (
      <ItemDetails
        itemId={itemId}
        getData={getPerson}
        getImageUrl={getPersonImage} >

        <Record field="gender" label="Gender" />
        <Record field="eyeColor" label="Eye Color" />

      </ItemDetails>
    )
}


const PlanetDetails = ({ itemId }) => {
    <ItemDetails
        itemId={itemId}
        getData={getPlanet}
        getImageUrl={getPlanetImage}>

        <Record field="population" label="Population" />
        <Record field="rotationPeriod" label="RotationPeriod" />
        <Record field="diameter" label="diameter" />
    </ItemDetails>
}



const StarshipDetails = ({ itemId }) => {
    <ItemDetails
        itemId={itemId}
        getData={getStarship}
        getImageUrl={getStarshipImage}>

        <Record field="model" label="Model" />
        <Record field="length" label="Length" />
        <Record field="costInCredits" label="Cost" />
    </ItemDetails>
}


export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
}