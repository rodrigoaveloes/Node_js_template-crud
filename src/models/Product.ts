type Product = {
    title: string,
    price: number
};

const data: Product[] = [
    {title: 'Produto A', price: 10},
    {title: 'Produto B', price: 15},
    {title: 'Produto C', price: 20},
    {title: 'Produto D', price: 5},
];

export const Product = {
    getAll: (): Product[] => {
        return data;
    },
    getFromPriceAfter: (price: number): Product[] => {
        return data.filter(item => item.price >= price);
    },

  
 
}


