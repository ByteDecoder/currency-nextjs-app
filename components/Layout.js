import "bootswatch/dist/cerulean/bootstrap.min.css";
import Typography from "typography";
import moragaTheme from "typography-theme-moraga";
import Navbar from "./Navbar";

const typography = new Typography(moragaTheme);
typography.injectStyles();

const Layout = props => (
  <div>
    <Navbar />
    <div className="container">{props.children}</div>
  </div>
);

export default Layout;
