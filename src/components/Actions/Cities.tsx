import {DownloadCitiesAction} from "../../index"

const cities = () => {
    return function(dispatch) {

        fetch('https://raw.githubusercontent.com/justaplaya/AristocraticCourt/main/src/JSONs/Cities.json')
  .then(response => response.json())
  .then(json => dispatch(DownloadCitiesAction(json)))

    }
}

export default cities