import {DownloadRestaurantsAction} from "../../index"

const restaurants = () => {
    return function(dispatch) {

        fetch('https://raw.githubusercontent.com/justaplaya/AristocraticCourt/main/src/JSONs/Restaurants.json')
  .then(response => response.json())
  .then(json => dispatch(DownloadRestaurantsAction(json)))

    }
}

export default restaurants