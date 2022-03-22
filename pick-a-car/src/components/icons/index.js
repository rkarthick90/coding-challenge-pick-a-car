import React from "react";
import styled, { css } from "styled-components";

export const InlineSvg = styled.svg`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  color: inherit;
  fill: ${(props) => (props.color ? props.fill : "currentColor")};
`;

export const SvgWrapper = styled.div`
  display: inline-block;
  flex: 0 0 ${(props) => (props.size ? `${props.size}px` : "32px")};
  width: ${(props) => (props.size ? `${props.size}px` : "32px")};
  height: ${(props) => (props.size ? `${props.size}px` : "32px")};
  min-width: ${(props) => (props.size ? `${props.size}px` : "32px")};
  min-height: ${(props) => (props.size ? `${props.size}px` : "32px")};
  position: relative;
  color: inherit;

  ${(props) =>
    props.count &&
    css`
      background-color: transparent;
      &:after {
        content: ${props.count ? `'${props.count}'` : `''`};
        position: absolute;
        left: calc(100% - 12px);
        top: -2px;
        font-size: 14px;
        font-weight: 600;
        background: var(--base-color);
        color: ${({ theme: thm }) =>
          process.env.NODE_ENV === "production"
            ? thm.text.default
            : thm.warn.alt};
        border-radius: 8px;
        padding: 2px 4px;
        border: 2px solid
          ${({ theme: thm }) =>
            process.env.NODE_ENV === "production"
              ? thm.text.default
              : thm.warn.alt};
      }
    `};
`;

const Glyph = ({ glyph }) => {
  switch (glyph) {
    case "search":
      return (
        <path
          fill="#a0aeb8"
          d="M11.015 11.95c-2.641 2.17-6.557 2.013-9.033-.464-2.635-2.635-2.644-6.898-.019-9.523s6.888-2.616 9.523.019c2.477 2.476 2.633 6.392.464 9.033l3.855 3.855c.26.26.26.679.002.937a.662.662 0 01-.937-.002l-3.855-3.855zM2.902 2.902C.793 5.01.8 8.435 2.917 10.552c2.116 2.116 5.541 2.123 7.65.015 2.108-2.109 2.101-5.534-.015-7.65C8.435.8 5.01.793 2.902 2.902z"
        />
      );

    case "arrowdown":
      return (
        <path d="M8.626 9.744c-.875-.903-2.294-.903-3.17-.001s-.876 2.366-.001 3.268l8.959 9.244a2.195 2.195 0 0 0 3.171 0l8.959-9.244c.875-.903.874-2.366-.001-3.268s-2.295-.902-3.169.001L16 17.353 8.626 9.744z"></path>
      );
    default:
      return null;
  }
};

class Icons extends React.Component {
  render() {
    const {
      size = 32,
      style = {},
      tipText,
      tipLocation,
      count,
      onClick,
      width = "100%",
      height = "100%",
      glyph,
      dataCy,
      color,
      fill,
      viewBox,
      className,
    } = this.props;

    return (
      <SvgWrapper
        data-cy={dataCy}
        size={size}
        tipText={tipText}
        tipLocation={tipLocation}
        count={count}
        className={`icon ${className || glyph}`}
        onClick={onClick}
        style={style}
      >
        <InlineSvg
          fillRule="evenodd"
          fill={fill}
          width={width}
          height={height}
          clipRule="evenodd"
          strokeLinejoin="round"
          strokeMiterlimit="1.414"
          xmlns="http://www.w3.org/2000/svg"
          aria-labelledby="title"
          viewBox={viewBox || "0 0 32 32"}
          color={color}
          preserveAspectRatio="xMidYMid meet"
          id={glyph}
        >
          {/* <title id="title">{glyph}</title> */}
          <Glyph glyph={glyph} />
        </InlineSvg>
      </SvgWrapper>
    );
  }
}

export default Icons;
