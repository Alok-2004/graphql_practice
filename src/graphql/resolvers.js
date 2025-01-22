// Method
import { products } from "../data/product.js";

const resolvers = {
    Query : {
        products : () => products,
        product : (_, {id}) => products.find(product => product.id === id),
    },
    Mutation:{
        createProduct : (_, {title, category, price, instock}) => {
            const newlyCreatedProduct = {
                id : String(products.length + 1),
                title,
                category,
                price,
                instock,
            }

            products.push(newlyCreatedProduct);
            return newlyCreatedProduct;
        },
    }
};

export{
    resolvers,
}