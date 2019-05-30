import { connect } from "react-redux";
import { State } from "../reducers";
import ItemListComponent from "../components";
import { fetchItems, updateItem, removeItem } from "../actions/items";

const mapStateToProps = (state: State, ownProps: any) => {
  return {
    items: state.itemState.items,
    options: state.itemState.options
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchItems: () => dispatch(fetchItems()),
    updateItem: (id: string, role: string) => dispatch(updateItem(id, role)),
    removeItem: (id: string) => dispatch(removeItem(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemListComponent);
