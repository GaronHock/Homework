import gql from "graphql-tag";

const FETCH_DOG = gql`
  query FetchDog($id: ID!) {
    dog(_id: $id) {
      _id
      name
      breed
    }
  }
`;

const DogDetail = props => { <Query query={FETCH_DOG} variables={{ id: props.match.params.dogId }}></Query>};

export default DogDetail;
