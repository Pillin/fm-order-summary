import React from "react";
const Image = (props: {
  src: string;
  alt: string;
  style?: React.CSSProperties;
}) => {
  return <img style={props.style} src={props.src} alt={props.alt} />;
};

export default Image;
