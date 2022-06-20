import React from "react";
import useScrollTrigger from '@mui/material/useScrollTrigger';

const ScrollHandler = props => {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: props.window ? window() : undefined
    });

    return React.cloneElement(props.children, {
        style: {
            backgroundColor: trigger ? "white" : "transparent",
            boxShadow: trigger ? "0px 5px 40px rgba(0, 0, 0, 0.14)" : "none"
        }
    });
};

const ScrollToColor = props => {
  return <ScrollHandler {...props}>{props.children}</ScrollHandler>;
};

export default ScrollToColor;