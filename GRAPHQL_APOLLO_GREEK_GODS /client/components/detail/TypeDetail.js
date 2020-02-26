import React from "react";
import { Mutation } from "react-apollo";
// we added the "react-icons" library to have access to a pencil icon for editting
import { IconContext } from "react-icons";
import { FaPencilAlt } from "react-icons/fa";
import Mutations from "../../graphql/mutations";
const { UPDATE_GOD_TYPE } = Mutations;

class NameDetail extends React.Component {
  constructor(props) {
    super(props);

    // since we know we'll be receiving the god's name through props
    // we can set it in our state
    this.state = {
      name: this.props.god.type || ""
    };

  }

  fieldUpdate(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  render() {
    // if we are editing we'll return a Mutation component
    return (
      <Mutation mutation={UPDATE_GOD_TYPE}>
        {(updateGod, data) => (
          <div>
            <form
              onSubmit={e => {
                e.preventDefault();
                updateGod({
                  variables: { id: this.props.god.id, type: this.state.type }
                });
              }}
            >
              {/* <input
                value={this.state.name}
                onChange={this.fieldUpdate("name")}
              /> */}
              <select 
                value={this.state.type} 
                onChange={this.fieldUpdate("type")}>
                <option value="god">God</option>
                <option value="goddess">Goddess</option>
              </select>
              <button type="submit">Update Type</button>
            </form>
          </div>
        )}
      </Mutation>
    );
  }
}

export default NameDetail;
