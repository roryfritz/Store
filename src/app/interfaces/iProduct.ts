export interface iProduct {
    product:{
    productID: number,
    productName: string, 
    productPicture: string,
    productPrice: number
};
transaction:{
    invoice: number,
    invoiceDetail:   [{productID: number,
                     productName: string,
                     quantity: number,
                     productPrice: number}],
    totalAmount: number
};
}
