class Ticket {
    public name: string;
    public price: number;
    public benefits: string[];

    constructor(name: string, price: number, benefits: string[]) {
        this.name = name;
        this.price = price;
        this.benefits = benefits;
    }

    public getTicketInfo(): string {
        return `The ticket ${this.name} has a price of ${this.price}`
    }
}

class Checkout {
    public purchaseTickets(quantity: number, clientName: string, ticket: Ticket): Invoice {
        var cost = quantity * ticket.price;
        return new Invoice(clientName, cost, new Date());
    }
}

class Invoice {
    public clientName: string;
    public cost: number;
    public purchaseDate: Date;

    constructor(clientName: string, cost: number, date: Date) {
        this.clientName = clientName;
        this.cost = cost;
        this.purchaseDate = date;
    }
}

export { Ticket, Checkout, Invoice }