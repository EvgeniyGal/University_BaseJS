// Скалярні типи
function getOrderInfo(order) {
    return [
        order.goods.reduce((acc, el) => {
            acc += el[1];
            return acc;
        }, 0),
        order.status,
    ];
}
const order = {
    id: "123",
    goods: [
        ["banana", 56],
        ["socks", 956],
    ],
    status: "delivered",
};
console.log(getOrderInfo(order));
// type OrderItem = {
//   name: string;
//   price: number;
// };
// type Order = {
//   number: string;
//   items: OrderItem[];
//   status: string;
// };
// const exampleOrder: Order = {
//   number: "12345",
//   items: [
//     { name: "Laptop", price: 800 },
//     { name: "Mouse", price: 30 },
//     { name: "Keyboard", price: 50 },
//   ],
//   status: "in process",
// };
// function calculateTotal( items : OrderItem[]): number {
//   return items.reduce(
//     (acc: number, { price }: OrderItem): number => acc + price,
//     0
//   );
// }
// function printStatus({ number, status, items }: Order): void {
//   console.log(
//     `Order - ${number}, status: ${status}, total price ${calculateTotal(items)}`
//   );
// }
// printStatus(exampleOrder);
//# sourceMappingURL=index.js.map