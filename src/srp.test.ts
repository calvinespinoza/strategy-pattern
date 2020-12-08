import { Ticket, Checkout, Invoice } from './srp-after'
import { TicketOld } from './srp-before'

describe('SRP Before Tests', () => {
    test('[BEFORE] should return ticket info', () => {
        var ticket = new TicketOld("Standard Entrance", 150, ["Free drinks"]);
        var ticketInfo = ticket.getTicketInfo();
        expect(ticketInfo).toEqual("The ticket Standard Entrance has a price of 150");
    });

    test('[BEFORE] should generate ticket purchase invoice', () => {
        var ticket = new TicketOld("VIP Entrance", 200, ["Free drinks", "VIP Access"]);
        var invoice = ticket.purchaseTickets(2, "Calvin Espinoza");
        expect(invoice).toContain("Calvin Espinoza");
        expect(invoice).toContain("400");
    });
});

describe('SRP After Tests', () => {
    test('[AFTER] should return ticket info', () => {
        var ticket = new Ticket("Standard Entrance", 150, ["Free drinks"]);
        var ticketInfo = ticket.getTicketInfo();
        expect(ticketInfo).toEqual("The ticket Standard Entrance has a price of 150");
    });

    test('[AFTER] should generate ticket purchase invoice', () => {
        var ticket = new Ticket("VIP Entrance", 200, ["Free drinks", "VIP Access"]);
        var checkout = new Checkout();
        var invoice = checkout.purchaseTickets(2, "Calvin Espinoza", ticket);
        expect(invoice.clientName).toEqual("Calvin Espinoza");
        expect(invoice.cost).toEqual(400);
    });
});