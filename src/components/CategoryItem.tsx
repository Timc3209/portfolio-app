import React from "react";
import { ListGroupItem } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconPrefix, IconName } from "@fortawesome/fontawesome-svg-core";
import { CategoryState } from "../redux/types";

interface OwnProps extends CategoryState {
  onClick: () => void;
}

const CategoryItem = ({
  name,
  icon,
  iconPrefix,
  enabled,
  onClick,
}: OwnProps) => (
  <ListGroupItem
    className="category-item border-0"
    onClick={onClick}
    data-testid="btnToggle"
  >
    <FontAwesomeIcon
      icon={[iconPrefix as IconPrefix, icon as IconName]}
      color={enabled ? "#007bff" : "000"}
      size="1x"
      style={{ marginRight: 5 }}
    />
    {name}
  </ListGroupItem>
);

export default CategoryItem;
