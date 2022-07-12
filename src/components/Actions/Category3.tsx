import {DownloadCategory3Action} from "../../index"

const десерт = () => {
    return function(dispatch) {

        fetch('https://raw.githubusercontent.com/justaplaya/AristocraticCourt/main/src/JSONs/Category3.json')
  .then(response => response.json())
  .then(json => dispatch(DownloadCategory3Action(json)))

    }
}

export default десерт