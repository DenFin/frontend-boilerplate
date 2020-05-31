import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";

export default function() {

    const target = document.querySelector('#target');
    const results = Splitting({ target: target, by: 'chars' });


}