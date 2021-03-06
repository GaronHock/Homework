import React from "react";
import { Mutation } from "react-apollo";
import Mutations from "../../graphql/mutations";
const { NEW_ABODE } = Mutations;
import Queries from "../../graphql/queries";
const { FETCH_ABODES } = Queries;

class AbodeCreate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      coordinates: "",
      message: ""
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateCache = this.updateCache.bind(this);
  }

  update(field) {
    return e => {
      let input = e.target.value;
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e, newAbode) {
    e.preventDefault();
    let name = this.state.name;

    // our newGod function will accept an object with the key of "variables" pointing to an object with all our passed in variables.
    newAbode({
      variables: {
        name: name,
        coordinates: this.state.coordinates
      }
    })
      // after our mutation has run we want to reset our state and show our user the success message
      .then(data => {
        console.log(data);
        this.setState({
          message: `New abode "${name}" created successfully`,
          name: ""
        });
      });
  }

  updateCache(cache, { data: { newAbode } }) {
    let abodes;
    try {
      // we'll try to read from our cache but if the query isn't in there no sweat!
      // We only want to update the data if it's in the cache already - totally fine if the data will
      // be fetched fresh later
      abodes = cache.readQuery({ query: FETCH_ABODES });
    } catch (err) {
      return;
    }

    // then our writeQuery will only run IF the cache already has data in it
    if (abodes) {
      let abodesArray = abodes.abodes;

      cache.writeQuery({
        query: FETCH_ABODES,
        data: { abodes: abodesArray.concat(newAbode) }
      });
    }
  }

  render() {
    return (
      <Mutation
        mutation={NEW_ABODE}
        update={(cache, data) => this.updateCache(cache, data)}
      >
        {(newAbode, { data }) => ( ///callback for mutation component 
        //gives access gto actual mutation that we are invoking to send data to our backend
        //directly linked to whatever we named mutation in the mutation file 
          <div>
            <form onSubmit={e => this.handleSubmit(e, newAbode)}>
              <input
                onChange={this.update("name")}
                value={this.state.name}
                placeholder="Name"
              />
              <input
                onChange={this.update("coordinates")}
                value={this.state.coordinates}
                placeholder="Coordinates"
              />
              <button type="submit">Create Abode</button>
            </form>
            <p>{this.state.message}</p>
          </div>
        )}
      </Mutation>
    );
  }
}

export default AbodeCreate;
