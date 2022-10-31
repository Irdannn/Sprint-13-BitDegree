import fetch from 'node-fetch'

interface CustomerItem {
    id : never;
    name : string,
    address : {
        street : string,
        suite : string,
    },
    company : {
        name : string,
    }
};

interface Customer {
    id : number;
    name : string;
    streetAddress : string;
    company : string;
}

type result = Promise<Customer[]>

const apiURL = 'https://jsonplaceholder.typicode.com/users'

const fetchFunction = async (url: string): result => {
    const data = await fetch(url).then(response => response.json());
    return data.map((customer: CustomerItem): Customer => {
        return {
          id: customer.id,
          name: customer.name,
          streetAddress: `${customer.address.suite} ${customer.address.street}`,
          company: customer.company.name
        }
    })
}

fetchFunction(apiURL).then(users => console.log(users))