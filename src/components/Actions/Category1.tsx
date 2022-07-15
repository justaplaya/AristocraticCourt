import {DownloadCategory1Action} from "../../index"

const category1 = () => {
    return function(dispatch) {

        fetch('https://raw.githubusercontent.com/justaplaya/AristocraticCourt/main/src/JSONs/Category1.json')
  .then(response => response.json())
  .then(json => dispatch(DownloadCategory1Action(json)))

    }
}

export default category1