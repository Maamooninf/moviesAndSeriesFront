import React from "react";
import "./Contactstyle.scss";
const Messagebody: React.FC<{ own: boolean; text: string }> = ({
  own,
  text,
}) => {
  return <div className={own ? "own" : "messagebod"}>{text}</div>;
};

export default Messagebody;
