import { PrismaClient } from '@prisma/client';
import mqtt from 'mqtt';


const prisma = new PrismaClient();
const client = mqtt.connect('mqtt://localhost:18983'); // use your Windows IP for ESP32

client.on('connect', () => {
  console.log('Connected to MQTT');
  client.subscribe('iot/pm25');
});

client.on('message', async (topic, message) => {
  try {
    const data = JSON.parse(message.toString());
    const value = parseFloat(data.value);
    if (!isNaN(value)) {
      await prisma.pMReading.create({
        data: { value },
      });
      console.log('Saved value:', value);
    }
  } catch (err) {
    console.error('Invalid data received:', err);
  }
});
