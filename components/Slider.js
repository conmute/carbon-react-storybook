import React, {Component} from 'react'
import PropTypes from 'prop-types';
import { Slider as CarbonSlider } from 'carbon-components-react'

function onChange() {
    console.log(arguments);
}

class Slider extends Component {

    constructor(props) {
        super(props);
    }

    render() {
    //     return <div class="bx--form-item">
    //         <label for="slider" class="bx--label">Slider label</label>
    //         <div class="bx--slider-test">
    //             <div class="bx--slider-container">
    //             <span class="bx--slider__range-label">0</span>
    //             <div class="bx--slider" data-slider data-slider-input-box="#slider-input-box">
    //                 <div class="bx--slider__track"></div>
    //                 <div class="bx--slider__filled-track"></div>
    //                 <div class="bx--slider__thumb" tabindex="0"></div>
    //                 <input id="slider" class="bx--slider__input" type="range" step="1" min="0" max="100" value="50" />
    //             </div>
    //             <span class="bx--slider__range-label">100</span>
    //             <input id="slider-input-box" type="number" class="bx--text-input bx--slider-text-input" placeholder="0" />
    //         </div>
    //     </div>
    //   </div>
        return <CarbonSlider
            id="slider"
            className="extra-class"
            value={50}
            min={0}
            max={100}
            step={1}
            onChange={onChange}
        />
    }
}

// Slider.defaultProps = {
// };

// Slider.propTypes = {
// };

export default Slider;