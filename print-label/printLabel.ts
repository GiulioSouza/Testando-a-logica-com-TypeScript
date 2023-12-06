type Product = {
    product: string,
    lot: number,
    year: number,
    qtt: number
}

const newProduct: Product = {
    product: 'CPU Dual Core 3.00GHZ',
    lot: 321,
    year: 2022,
    qtt: 11
}

const printLabel = (product: Product): string[] => {
    let label: string[] = []

    for(let i = 0; i <= product.qtt; i++){

        label.push(`${product.lot}-${product.year}-${i.toString().padStart(3, "0")}`);
    }

    return label
}

console.log(printLabel(newProduct));
