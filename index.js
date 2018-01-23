import { Discovery } from 'udp-discovery';
import { argv } from 'yargs'

import { SERVICE_NAME, generateEvent } from './service-info';

const discoveryService = new Discovery();

if (!argv.server && !argv.client) {
    console.error('Please specify --server or --client.');
    process.exit(1);
}

if(argv.server) {
    discoveryService.on('available', (name, data, reason) => {
        console.log('server: available', { name, data, reason });
        const event = generateEvent();
        discoveryService.sendEvent(event.name, event.data);
    });
}

if(argv.client) {
    discoveryService.announce(SERVICE_NAME, {}, 500, true);

    discoveryService.on('MessageBus', (event, data) => {
        console.log('client: event', { event, data });
    });
}
