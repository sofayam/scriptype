
interface Cash { kind: "cash"; }
interface PayPal {
      kind: "paypal";
      email: string;
}
interface CreditCard {
      kind: "credit";
      cardNumber: string;
      securityCode: string;
}

type PaymentMethod = Cash | PayPal | CreditCard;

function describePaymentMethod(method: PaymentMethod) {
      switch (method.kind) {
            case "cash": // Here, method has type Cash 
                  return "Cash";
            case "paypal": // Here, method has type PayPal 
                  return `PayPal (${method.email})`;
            case "credit": // Here, method has type CreditCard 
                  return `Credit card (${method.cardNumber})`;
      }
}