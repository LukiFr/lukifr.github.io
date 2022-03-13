import React from "react";
import styled from "styled-components";

type Props = {
  url: string;
};

const Image: React.FC<Props> = ({ url }) => {
  return <StyledImage url={url} />;
};

const StyledImage = styled.div`
  width: 30vw;
  height: 20vw;
  margin: 20px;
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center center;

  :hover {
    -webkit-box-shadow: 0px 8px 57px -4px rgba(66, 68, 90, 1);
    -moz-box-shadow: 0px 8px 57px -4px rgba(66, 68, 90, 1);
    box-shadow: 0px 8px 57px -4px rgba(66, 68, 90, 1);
  }
`;

export default Image;
