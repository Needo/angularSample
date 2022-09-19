export class AppSummry
{
    Order:OrderSummary =new OrderSummary();
    Expense:ExpenseSummary=new OrderSummary();
    Revenue:RevenuSummary=new OrderSummary();
    User:UserSummary=new OrderSummary();
}
export class SummryItem
{
    Total:number;
    Caption:string;
    Icon:string;
}
export class OrderSummary
{
    TotalOrders:number=345;
    Caption:string="Total Orders"
    Icon:string;
}
export class ExpenseSummary
{
    TotalOrders:number=345;
    Caption:string="Total Expense"
    Icon:string;
}
export class RevenuSummary
{
    TotalOrders:number=345;
    Caption:string="Total Revenu"
    Icon:string;
}
export class UserSummary
{
    TotalOrders:number=345;
    Caption:string="New Users"
    Icon:string;
}
