

export interface Order {
    shipper: {
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
    },
    receiver: {
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
    },
    productDescription: string,
    product: string,
    actualWeight: string,
    noOfPackages: string,
    length: string,
    width: string,
    height: string,
    customsValue: string
}


export interface StepProps {
    handleNext: () => void;
    handleBack: () => void;
    setOrder: (order: Order) => void;
    order: Order;
}