import img from "./images/image-equilibrium.jpg";
import svg from "./images/icon-ethereum.svg";
import svg2 from "./images/icon-clock.svg";
import img2 from "./images/image-avatar.png";
import img3 from "./images/icon-view.svg";
import GoogleFontLoader from './fonts/Outfit-SemiBold.ttf';
import React, { useState } from 'react';


<GoogleFontLoader
    fonts={[
        {
            font: 'Outfit-SemiBold'
        },
    ]}
/>
function ChildComponent(props) {
  const [isHovering, setIsHovering] = useState(false);

  const handleHover = () => {
    setIsHovering(!isHovering);
  };

  const hoverStyle = {
    hover: {
      width: "302px",
      height: "302px",
      borderRadius: "8px",
      margin: "24px",
      background: "#00FFF8",
      zIndex: 10,
      position: "absolute",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      opacity: 0.5,
      visibility: isHovering ? "visible" : "hidden",
      
    },
  };

  return (
    <div style={styles.container}>
      <img src={img} style={imgStyle.img} onClick={handleHover} />
      <div style={hoverStyle.hover}>
        <img src={img3} style={wievStyle.wiew} />
      </div>

      <div style={divStyle.div}>
        <h3 style={headingStyle.heading} onClick={handleHover}>Equilibrium #3429</h3>
        <p style={pStyle.parag}>
          Our Equilibrium collection promotes balance and calm.
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "inline",
            justifyContent: "space-between",
          }}
        >
          <p style={etP.etPara}>
            <img src={svg} style={iconStyle.svg} />
            0.041 ETH
          </p>
          <p style={etP2.etPara2}>
            <img src={svg2} style={iconStyle2.svg2} />3 days left
          </p>
        </div>
        <hr style={{ background: "#2E405A" }}></hr>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
          }}
        >
          <img src={img2} style={profileImg.prof} />
          <p style={heading3.head3} onClick={handleHover} >
            <span style={span.span1}>Creation of</span> Jules Wyvern
          </p>
        </div>
      </div>
    </div>
  );
}
export default ChildComponent;
const styles = {
  container: {
    height: "620px",
    width: "350px",
    background: "#15263F",
    borderRadius: "15px",
    display: "flex",
    flexDirection: "column",
  },
};
const imgStyle = {
  img: {
    width: "302px",
    height: "302px",
    borderRadius: "8px",
    margin: "24px",
  },
};

const divStyle = {
  div: {
    width: "302px",
    height: "298px",
    padding: "0px 24px  0px  24px ",
  },
};

const headingStyle = {
  heading: {
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "22px",
    lineHeight: "28px",
    color: "#FFFFFF",
  },
};
const pStyle = {
  parag: {
    fontWeight: 300,
    fontSize: "18px",
    lineHeight: "26px",
    color: "#8BACD9",
  },
};
const iconStyle = {
  svg: {
    width: "11px",
    height: "18px",
    alingItems: "right",
    marginRight: "5px",
  },
};
const etP = {
  etPara: {
    fontWeight: 600,
    fontSize: "16px",
    lineHeight: "20px",
    color: "#00FFF8",
  },
};
const iconStyle2 = {
  svg2: {
    width: "13.33px",
    height: "13.33px",
    color: "#8BACD9",
    marginRight: "5px",
  },
};
const etP2 = {
  etPara2: {
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "20px",
    alignItems: "end",
    color: "#8BACD9",
  },
};
const profileImg = {
  prof: {
    width: "33px",
    height: "33px",
    borderRadius: 60,
    borderWidth: 1,
    borderColor: "#FFFFFF",
    borderStyle: "solid",
    marginRight: "15px",
  },
};
const heading3 = {
  head3: {
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "20px",
    color: "#FFFFFF",
  },
};
const span = {
  span1: {
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "20px",
    color: "#8BACD9",
  },
};
// const hoverStyle = {
//   hover: {
//     width: "302px",
//     height: "302px",
//     borderRadius: "8px",
//     margin: "24px",
//     background: "#00FFF8",
//     zIndex: 10,
//     position: "absolute",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     visibility: "hidden"
//   },
// };
const wievStyle = {
  wiew: {
    width: "44px",
    height: "30px",
  },
};
