
export interface Contact {
    companyName: string
    firstName: string,
    lastName: string,
    address1: string,
    address2: string,
    city: string,
    state: string,
    zip: string,
    country: string,
    tel: string,
    email: string,
}
export interface Order {
    shipper: Contact,
    receiver: Contact,
    productDescription: string,
    product: string,
    actualWeight: string,
    noOfPackages: string,
    length: string,
    width: string,
    height: string,
    customsValue: string,
    billShippingCharges: string,
    billDutyTaxes: string,
    serviceLevel: string,
    specialInstructions: string,
    references: string
}


export interface StepProps {
    handleNext: () => void;
    handleBack: () => void;
    setOrder: (order: Order) => void;
    order: Order;
}

export interface ContactProps {
    handleNext: () => void;
    handleBack: () => void;
    setContact: (contact: Contact) => void;
    contact: Contact;
}