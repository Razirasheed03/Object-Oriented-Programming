// ❌ Without OCP
class Payment {
  process(type: string) {
    if (type === "credit") {
      console.log("Processing credit card payment");
    } else if (type === "paypal") {
      console.log("Processing PayPal payment");
    }
  }
}

// ✅ With OCP
interface PaymentMethod {
  process(): void;
}

class CreditCardPayment implements PaymentMethod {
  process() {
    console.log("Processing credit card payment");
  }
}

class PayPalPayment implements PaymentMethod {
  process() {
    console.log("Processing PayPal payment");
  }
}

class PaymentProcessor {
  handlePayment(payment: PaymentMethod) {
    payment.process();
  }
}

// Usage
const processor = new PaymentProcessor();
processor.handlePayment(new PayPalPayment());
