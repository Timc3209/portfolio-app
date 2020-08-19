import React from "react";
import { ListGroupItem } from "reactstrap";
import { SkillState } from "../../redux/types";
import { Icon } from "@iconify/react";
import html5 from "@iconify/icons-simple-icons/html5";
import css3 from "@iconify/icons-simple-icons/css3";
import js from "@iconify/icons-simple-icons/javascript";
import react from "@iconify/icons-simple-icons/react";
import redux from "@iconify/icons-simple-icons/redux";
import bootstrap from "@iconify/icons-simple-icons/bootstrap";
import node from "@iconify/icons-simple-icons/nodejs";
import mysql from "@iconify/icons-simple-icons/mysql";

const SkillItem = ({ name, icon, color }: SkillState) => {
  let iconImport = html5;

  switch (icon) {
    case "html5":
      iconImport = html5;
      break;
    case "css3":
      iconImport = css3;
      break;
    case "js":
      iconImport = js;
      break;
    case "react":
      iconImport = react;
      break;
    case "redux":
      iconImport = redux;
      break;
    case "bootstrap":
      iconImport = bootstrap;
      break;
    case "node":
      iconImport = node;
      break;
    case "mysql":
      iconImport = mysql;
      break;
    default:
      iconImport = html5;
      break;
  }

  return (
    <ListGroupItem className="border-0">
      <Icon icon={iconImport} width={"4em"} color={color} />
      <p>{name}</p>
    </ListGroupItem>
  );
};

export default SkillItem;
