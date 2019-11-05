import React, { Component } from "react";
import PropTypes from "prop-types";

import { size, style, color, icon, iconPosition, shadow} from "./ButtonTypes";

export default class Button extends Component {

  getButtonClasses() {

    const {size, buttonStyle, color, icon, iconPosition, shadow} = this.props;

    const buttonClasses = [
      "btn",
      `btn--${size}`,
      `btn--${buttonStyle}`,
      `btn--${color}`,
      `btn--${icon}`,
      `btn--${iconPosition}`,
      `btn--${shadow}`,
    ];

    return buttonClasses.join(" ");
  }

  render() {
    const { disabled, onClickHandler, label } = this.props;

    return (
      <button
        className={this.getButtonClasses()}
        onClick={event => onClickHandler(event.target)}
        disabled={disabled}
      >
        {label}
      </button>
    );

  }
}

Button.propTypes = {
  size: PropTypes.oneOf(Object.values(size)),
  buttonStyle: PropTypes.oneOf(Object.values(style)),
  color: PropTypes.oneOf(Object.values(color)),
  icon: PropTypes.oneOf(Object.values(icon)),
  iconPosition: PropTypes.oneOf(Object.values(iconPosition)),
  shadow: PropTypes.oneOf(Object.values(shadow)),
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  onClickHandler: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
};

Button.defaultProps = {
  size: size.medium,
  buttonStyle: style.solid,
  color: color.neutral,
  icon: icon.none,
  iconPosition: iconPosition.left,
  shadow: shadow.none,
  disabled: false,
  fullWidth: false,
  onClickHandler: () => console.log("No click handler specified"),
  label: ""
};
