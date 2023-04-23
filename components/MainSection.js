import React from 'react'


export default function MainSection(props) {
    return (
        <section>
            <img className="section__img" src={props.country.imageUrl} />
            <div className="section__hero">
                <div className="section__location">
                    <i className="section__icon fa-solid fa-location-dot"></i>
                    <span className="section__country">{props.country.location.toUpperCase()}</span>
                    <a className="section__link" href={props.country.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h3 className="section__title">{props.country.title}</h3>
                <p className="section__dates"><strong>{props.country.startDate} - {props.country.endDate}</strong></p>
                <span className="section__description">{props.country.description}</span>
            </div>
        </section>

    )
}