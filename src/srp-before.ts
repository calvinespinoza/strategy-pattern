class TicketOld {
	private name: string;
	private price: number;
	private benefits: string[];

	constructor(name: string, price: number, benefits: string[]) {
		this.name = name;
		this.price = price;
		this.benefits = benefits;
	}

	public getTicketInfo(): string {
		return `The ticket ${this.name} has a price of ${this.price}`
	}

	public purchaseTickets(quantity: number, clientName: string): string {
		var cost = quantity * this.price;
		return this.generateInvoice(clientName, cost, new Date());
	}

	private generateInvoice(clientName: string, cost: number, date: Date): string {
		return `Name: ${clientName}.
			Cost: ${cost}.
			Date: ${date}.`;
	}
}

export { TicketOld }