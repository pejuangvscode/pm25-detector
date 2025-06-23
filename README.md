# 📡 IoT PM2.5 Monitoring System

An end-to-end air quality monitoring system using **ESP32**, **PM2.5 sensor**, **MQTT**, and the **T3 App Stack**. It collects PM2.5 data, transmits it over MQTT, stores it in a PostgreSQL database using Prisma, and visualizes it through a modern web dashboard.

---

## 🚀 Features

- 📟 PM2.5 sensor integration with ESP32  
- 🛰 MQTT communication using Mosquitto broker  
- 🧠 Backend listener that stores sensor data to the database  
- 📊 Frontend dashboard built with Next.js + tRPC + Recharts  
- 🛠 Built with the T3 Stack (TypeScript, Next.js, Prisma, tRPC, TailwindCSS)

---

## 📦 Tech Stack

| Layer           | Technology                                |
|------------------|--------------------------------------------|
| Microcontroller  | ESP32 + PMS5003 or SDS011 sensor           |
| Communication    | MQTT (Mosquitto)                           |
| Backend          | Node.js, tRPC, Prisma, PostgreSQL          |
| Frontend         | Next.js (T3 Stack), TailwindCSS, Recharts  |
| DB Hosting       | Supabase / Railway / Render                |

---

## 📁 Project Structure
pm25-dashboard/
├── scripts/
│ ├── mqtt-listener.ts # Listens to MQTT and stores to DB
│ └── simulator.js # Publishes fake sensor data
├── src/
│ └── pages/ # Web dashboard pages
│ └── server/api/pm.ts # tRPC API for reading PM2.5 data
├── prisma/
│ └── schema.prisma # PMReading model


---

## 📊 Dashboard Preview

> Displays real-time PM2.5 data from your sensor

- Line chart using Recharts  
- Auto-updating data via tRPC query  
- Mobile-responsive with Tailwind

---

## 🧪 Development Tips

- Use `Prisma Studio` to inspect the DB: `npx prisma studio`  
- Customize MQTT topic and port in `mqtt-listener.ts`  
- Add thresholds or alerts for high PM2.5 levels

---

## 📌 Future Improvements

- ✅ Real-time updates using WebSocket or Supabase Realtime  
- 📍 Add GPS/device metadata  
- 🔔 Alert system (email/SMS if threshold exceeded)  
- 📊 Export data to CSV or PDF reports  
- 🧩 Multi-sensor support

---

## 🧑‍💻 Author

-
-
-

---

## 📄 License

This project is licensed under the MIT License.

