import React from'react';
import {Link} from 'react-router-dom'
import {FiPlus} from 'react-icons/fi'
import {Map, TileLayer} from 'react-leaflet'

import 'leaflet/dist/leaflet.css';

import mapMarkImg from '../images/map-mark.svg';

import '../styles/pages/orphanages-map.css';

function OrphanagesMap () {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkImg} alt="Happy" />

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando sua visita :)</p>
                </header>
                <footer>
                    <strong>Pelotas</strong> 
                    <span>Rio Grande do Sul</span>
                </footer>
            </aside>

            <Map
                center={[-31.7622969,-52.3294118]}
                zoom={14}
                style={{width:'100%', height:'100%'}}
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                </Map>

            <Link to="" className="create-orphanage">
              <FiPlus size= {32} color= "#FFF" />  
            </Link>

        </div>
    );
}

export default OrphanagesMap