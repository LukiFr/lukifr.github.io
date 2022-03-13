import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Image from "../Image/Image";

const ListImages: React.FC = () => {
  const [imagesList, setImagesList] = useState<[string]>([""]);
  const [pageNumber, setPageNumber] = useState<number>(1);

  const handleNextButton = () => {
    pageNumber < imagesList.length - 3 ? setPageNumber(pageNumber + 3) : "";
  };

  const handlePreviousButton = () => {
    pageNumber > 3 ? setPageNumber(pageNumber - 3) : "";
  };

  useEffect(() => {
    fetch("https://picsum.photos/v2/list")
      .then((response) => response.json())
      .then((data) =>
        setImagesList(
          data.map((x) => x.url.split("/")[x.url.split("/").length - 1])
        )
      );
  });

  return (
    <>
      <StyledImagesContainer>
        <Image url={`http://source.unsplash.com/${imagesList[pageNumber]}`} />
        <Image
          url={`http://source.unsplash.com/${imagesList[pageNumber + 1]}`}
        />
        <Image
          url={`http://source.unsplash.com/${imagesList[pageNumber + 2]}`}
        />
      </StyledImagesContainer>
      <StyledButtonContainer>
        <StyledButton onClick={() => handlePreviousButton()}>
          PREVIOUS
        </StyledButton>
        <StyledButton onClick={() => handleNextButton()}>NEXT</StyledButton>
      </StyledButtonContainer>
    </>
  );
};

const StyledImagesContainer = styled.div`
  display: flex;
  margin: 50px 0;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const StyledButton = styled.button`
  width: 20vw;
  height: 5vw;
`;

export default ListImages;
