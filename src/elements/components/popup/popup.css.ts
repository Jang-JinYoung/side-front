import { style } from "@vanilla-extract/css";

export const popupStyle = style({
    // display: "none",
    position: "absolute",
    top: "30vh",
    left: "40vw",
    backgroundColor: "white",
    // zIndex: "1002",
    // overflowY: "auto",
    // boxSizing: "border-box",
    

    width: 300,
    maxHeight: "90vh",
    height: "fit-content",
    borderRadius: 5,
    padding: 30,
    // // top: "0 !important",
    // bottom: "0 !important",
    // // left: "0 !important",
    // right: "0 !important",
    // justifyContent: "center",
    margin: "auto",
    textAlign: "center"
});


export const messageStyle = style({
    fontSize: 14,
})