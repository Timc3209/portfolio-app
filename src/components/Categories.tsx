import React from "react";
import { connect } from "react-redux";
import { AppState, CategoryState } from "../redux/types";
import { toggleCategory } from "../redux/actions";
import { Container, ListGroup } from "reactstrap";
import CategoryItem from "./CategoryItem";

interface StateProps {
  categories: Array<CategoryState>;
}

interface OwnProps extends StateProps {
  toggleCategory: typeof toggleCategory;
}

class Categories extends React.PureComponent<OwnProps> {
  render() {
    const { categories, toggleCategory } = this.props;
    return (
      <Container className="container-category">
        <div className="category-container box-shadow mt-4 mb-3">
          <ListGroup className="justify-content-center" horizontal="md">
            {categories &&
              categories.map((category: CategoryState, index: number) => (
                <CategoryItem
                  key={index}
                  name={category.name}
                  icon={category.icon}
                  iconPrefix={category.iconPrefix}
                  enabled={category.enabled}
                  onClick={() => toggleCategory(category.name)}
                />
              ))}
          </ListGroup>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state: AppState): StateProps => {
  const categories = state.categories;
  return { categories };
};

const mapDispatchToProps = {
  toggleCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
