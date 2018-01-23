import { Discovery } from 'udp-discovery';

const SERVICE_NAME = "deeplens-discovery";

const discoveryService = new Discovery();

discoveryService.on('available', (name, data, reason) => {
    console.log('server: available', { name, data, reason });
    discoveryService.sendEvent('deeplens', {});
});

discoveryService.announce(SERVICE_NAME, {}, 500, true);

discoveryService.on('MessageBus', (event, data) => {
    console.log('client: event', { event, data });
});