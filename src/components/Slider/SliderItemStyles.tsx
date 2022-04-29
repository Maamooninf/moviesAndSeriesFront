import styled from 'styled-components'

type Props = {
  zoomFactor: number;
  slideMargin: number;
  visibleSlides: number;
  className: string;
};

export const StyledSliderItem = styled.div<Props>`
  margin: 0 ${(props:any) => props.slideMargin}px;
  transition: transform 500ms ease;
  border-radius: 20px;
  cursor: pointer;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  transform: scale(1);
  user-select: none;
  flex: 0 0
    calc(
      100% / ${(props:any) => props.visibleSlides} -
        ${(props:any) => props.slideMargin * 2}px
    );
  img {
    height: 100%;
    width: 100%;
    border-radius: 1.5vw;
    box-sizing: border-box;
  }
  :hover {
    transform: scale(${(props:any) => props.zoomFactor / 100 + 1}) !important;
  }
  :hover ~ * {
    transform: translateX(${(props:any) => props.zoomFactor / 2 + '%'}) !important;
  }
  &.left {
    transform-origin: left;
    :hover ~ * {
      transform: translateX(${(props:any) => props.zoomFactor + '%'}) !important;
    }
  }
  &.right {
    transform-origin: right;
    :hover ~ * {
      transform: translateX(0%) !important;
    }
  }
`;