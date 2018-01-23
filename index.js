import { Discovery } from 'udp-discovery';
import { argv } from 'yargs'

const SERVICE_NAME = "deeplens-discovery";

const discoveryService = new Discovery();

if (!argv.server && !argv.client) {
    console.error('Please specify --server or --client.');
    process.exit(1);
}

if(argv.server) {
    discoveryService.on('available', (name, data, reason) => {
        console.log('server: available', { name, data, reason });
        discoveryService.sendEvent('deeplens', {});
    });
}

if(argv.client) {
    discoveryService.announce(SERVICE_NAME, {}, 500, true);

    discoveryService.on('MessageBus', (event, data) => {
        console.log('client: event', { event, data });
    });
}
