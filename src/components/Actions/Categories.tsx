import {DownloadCategoriesAction} from "../../index"

const categories = () => {
    return function(dispatch) {

        fetch('https://raw.githubusercontent.com/justaplaya/AristocraticCourt/main/src/JSONs/Categories.json')
  .then(response => response.json())
  .then(json => dispatch(DownloadCategoriesAction(json)))

    }
}

export default categories