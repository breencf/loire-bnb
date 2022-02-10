import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = (props) => {
  const location = useLocation();

  const scrollHandler = () => {}


  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {window.removeEventListener("scroll", scrollHandler)}
  }, [location]);

  return <>{props.children}</>
};
