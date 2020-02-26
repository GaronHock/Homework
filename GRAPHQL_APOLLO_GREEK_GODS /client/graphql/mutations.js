import gql from "graphql-tag";

export default {
  // we make sure to use the `mutation` key word when creating our frontend mutations
  // just like we would in GraphiQL
  DELETE_GOD: gql`
    mutation DeleteGod($id: ID!) {
      deleteGod(id: $id) {
        id
      }
    }
  `,
  NEW_GOD: gql`
    mutation NewGod($name: String, $type: String, $description: String) {
      newGod(name: $name, type: $type, description: $description) {
        id
        name
        description
      }
    }
  `,
  NEW_EMBLEM: gql`
    mutation NewEmblem($name: String) {
      newEmblem(name: $name) {
        id
        name
      }
    }
  `,
  NEW_ABODE: gql`
    mutation NewAbode($name: String, $coordinates: String) {
      newAbode(name: $name, coordinates: $coordinates) {
        id
        name
        coordinates
      }
    }
  `,
  UPDATE_GOD_NAME: gql`
    mutation updateGodName($id: ID!, $name: String) {
      updateGod(id: $id, name: $name) {
        id
        name
      }
    }
  `,
  UPDATE_GOD_TYPE: gql`
    mutation updateGodType($id: ID!, $type: String) {
      updateGod(id: $id, type: $type) {
        id
        type
      }
    }
  `,
  UPDATE_GOD_DESCRIPTION_DETAIL: gql`
    mutation updateGodDescription($id: ID!, $description: String) {
      updateGod(id: $id, description: $description) {
        id
        description
      }
    }
  `,
  // UPDATE_GOD_DOMAINS_DETAIL: gql`
  //   mutation updateGodType($id: ID!, $type: String) {
  //     updateGod(id: $id, type: $type) {
  //       id
  //       type
  //     }
  //   }
  // `,
  // UPDATE_ABODE_DETAIL: gql`
  //   mutation updateGodType($id: ID!, $type: String) {
  //     updateGod(id: $id, type: $type) {
  //       id
  //       type
  //     }
  //   }
  // `,
  // UPDATE_RELATIVES_DETAIL: gql`
  //   mutation updateGodType($id: ID!, $type: String) {
  //     updateGod(id: $id, type: $type) {
  //       id
  //       type
  //     }
  //   }
  // `
};