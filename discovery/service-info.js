import * as os from 'os';

export const SERVICE_NAME = 'deeplens-discovery';

export const generateEvent = function() {
    const interfaces = os.networkInterfaces();

    const interfaceAddresses = Object.keys(interfaces)
        .map(name => {
            const addresses = interfaces[name]
                .filter(address => !address.internal)
                .map(address => address.address);

            return {name, addresses}
        })
        .filter(i => i.addresses.length > 0)
        .map(i => `${i.name}: ${i.addresses.join(', ')}`);

    return {
        name: 'deeplens',
        data: {
            addresses: interfaceAddresses
        }
    };
}