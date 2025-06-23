// simulator.js
const mqtt = require('mqtt');

const client = mqtt.connect('mqtt://localhost:1883'); // Change to your broker if needed

client.on('connect', () => {
  console.log('Simulator connected to MQTT broker');

  let count = 0;
  const interval = setInterval(() => {
    const value = (Math.random() * 100).toFixed(2); // Random float 0–100
    const payload = JSON.stringify({ value: parseFloat(value) });

    client.publish('iot/pm25', payload);
    console.log(`Published: ${payload}`);

    count++;
    if (count >= 10) {
      clearInterval(interval);
      client.end();
      console.log('Finished simulation');
    }
  }, 1000);
});
