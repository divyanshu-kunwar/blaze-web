import style from "./Loader.module.css";
export default function Loader(props){

  let themeColor = props.theme=='light' ? "#1E1E1E99" : "#EEEEEE99";
  let backgroundColor = props.theme=='light' ? "#EEEEEE" : "#2E2E2E";
  let textColor = props.theme=='light' ? "#1E1E1E" : "#EEEEEE";

    return <div
    className={style.loader}
        style={{
          position: "absolute",
          bottom: "50px",
          paddingLeft:'38px',
          padding: "10px 36px",
          borderRadius: "24px",
          color: textColor,
          border: `1px solid ${themeColor}`,
          backgroundColor: `${backgroundColor}`,
          letterSpacing: "3px"
        }}
      > Loading...
      </div>
}