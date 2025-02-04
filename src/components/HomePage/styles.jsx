import { makeStyles } from "@mui/styles";
import { max, min } from "lodash";

const useStyles = makeStyles(theme => ({
  wrapper: {
    display: "flex",
    alignItems: "top",
    justifyContent: "center",
    height: "100%",
    background: "#f2f2f2"
  },
  mainBody: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    height: "100%",
    margin: "1rem 0 2rem 0",
    flexDirection: "column"
  },
  sideBody: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    width: "fit-content",
    margin: "1rem 1rem 2rem 1rem",
    height: "100%",
    flexDirection: "column",
    [theme.breakpoints.down(960)]: {
      display: "none"
    },
    maxWidth: "300px"
  },
  cardBody: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    direction: "column"
  },
  sort: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    margin: "0rem 0 0rem 0"
  },
  sortedList: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    width: "auto",
    [theme.breakpoints.down(750)]: {
      display: "none"
    }
  },
  navigation: {
    "&:selcted": {
      border: "2px solid black"
    }
  },
  sideCard: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    maxHeight: "35rem",
    margin: "0 0 2rem 0",
    background: "white",
    boxShadow: ".5px 2px 5px gray"
  },

  leftSideCard: {
    display: "flex",
    alignItems: "left",
    justifyContent: "center",
    flexDirection: "column",
    maxHeight: "35rem",
    margin: "0 0 2rem 0",
    background: "white",
    boxShadow: ".5px 2px 5px gray"
  },

  outerSideBar: {
    minWidth: "100%"
  },
  contentPart: {
    height: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    maxWidth: "1400px"
  },
  card: {
    padding: "6px",
    margin: "0 0.5rem 0 0.5rem"
  },
  "@media (max-width: 960px)": {
    card:{
      minWidth: "300px",
    },
    tags:{
      display:"flex",
      flexDirection:"column",
      flexwrap:"wrap",
      minWidth: "325px",
    },
    tabs:{
      minWidth: "325px",
    },
    posts:{
      minWidth: "325px",
    }
  }
}));

export default useStyles;
