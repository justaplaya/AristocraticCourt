import {DownloadCategory2Action} from "../../index"

const блюдо = () => {
    return function(dispatch) {

        fetch('https://raw.githubusercontent.com/justaplaya/AristocraticCourt/main/src/JSONs/Category2.json')
  .then(response => response.json())
  .then(json => dispatch(DownloadCategory2Action(json)))

    }
}

export default блюдо