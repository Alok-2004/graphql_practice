// This file will tell structure of Data

import { gql } from 'graphql-tag';
const typeDefs = gql`
type Product {
    id : ID!
    title : String!
    category : String!
    price : Float!
    instock : Boolean!
}

type Query {
    products : [Product]
    product(id : ID!) : Product 
}
    
type Mutation {
    createProduct(
    title : String!, 
    category : String!, 
    price : Float!, 
    instock : Boolean!
    ) : Product
}
`;
// product(id : ID!) : Product  this will recieve a id praameter and return a product

export{
    typeDefs,
}