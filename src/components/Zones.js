import React, { Component, Fragment } from 'react';
import isEmpty from 'lodash.isempty';

// components:
import Marker from './Marker';
import GoogleMap from './GoogleMap';

import locations from '../constants/places';

// consts
import DENVER_AIRPORT from '../constants/denver_airport';


const getMapBounds = (map, maps, places) => {
    const bounds = new maps.LatLngBounds();
    console.log(places);
    places.forEach((place) => {
      bounds.extend(new maps.LatLng(
        place.geometry.location.lat,
        place.geometry.location.lng,
      ));
    });
    return bounds;
  };

// Re-center map when resizing the window
const bindResizeListener = (map, maps, bounds) => {
    maps.event.addDomListenerOnce(map, 'idle', () => {
      maps.event.addDomListener(window, 'resize', () => {
        map.fitBounds(bounds);
      });
    });
  };

  // Fit map to its bounds after the api is loaded
const apiIsLoaded = (map, maps, places) => {
    // Get bounds by our places
    const bounds = getMapBounds(map, maps, places);
    // Fit map to bounds
    map.fitBounds(bounds);
    // Bind the resize listener
    bindResizeListener(map, maps, bounds);
  };
  

class Zones extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          places: [],
        };
      }

      componentDidMount() {
        this.setState({ places: locations[0].results });
      }
    

      render() {
        const { places } = this.state;

        return (
            <Fragment>
              {!isEmpty(places) && (
                <GoogleMap
                  defaultZoom={1}
                  defaultCenter={DENVER_AIRPORT}
                  yesIWantToUseGoogleMapApiInternals
                  onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps, places)}
                >
                  {places.map(place => (
                    <Marker
                      key={place.id}
                      text={place.name}
                      lat={place.geometry.location.lat}
                      lng={place.geometry.location.lng}
                    />
                  ))}
                </GoogleMap>
              )}
            </Fragment>
          );
      }
    
}

export default Zones;