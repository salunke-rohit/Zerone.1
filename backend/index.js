require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dns = require("dns");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");
const { UserModel } = require("./model/UserModel");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.use(cors());
app.options("*", cors());
app.use(bodyParser.json());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body || {};

  if (!name || !email || !password) {
    return res.status(400).json({ success: false, message: "Name, email and password are required." });
  }

  try {
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ success: false, message: "User already exists." });
    }

    const user = await UserModel.create({ name, email, password });
    return res.status(201).json({ success: true, message: "Signup successful.", user: { name: user.name, email: user.email } });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Signup failed.", error: error.message });
  }
});

app.post("/signin", async (req, res) => {
  const { email, password } = req.body || {};

  if (!email || !password) {
    return res.status(400).json({ success: false, message: "Email and password are required." });
  }

  try {
    const user = await UserModel.findOne({ email, password });
    if (!user) {
      return res.status(401).json({ success: false, message: "Invalid credentials." });
    }

    return res.status(200).json({ success: true, message: "Signin successful.", user: { name: user.name, email: user.email } });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Signin failed.", error: error.message });
  }
});

// app.get("/addHoldings", async (req, res) => {
//   let tempHoldings = [
//     {
//       name: "BHARTIARTL",
//       qty: 2,
//       avg: 538.05,
//       price: 541.15,
//       net: "+0.58%",
//       day: "+2.99%",
//     },
//     {
//       name: "HDFCBANK",
//       qty: 2,
//       avg: 1383.4,
//       price: 1522.35,
//       net: "+10.04%",
//       day: "+0.11%",
//     },
//     {
//       name: "HINDUNILVR",
//       qty: 1,
//       avg: 2335.85,
//       price: 2417.4,
//       net: "+3.49%",
//       day: "+0.21%",
//     },
//     {
//       name: "INFY",
//       qty: 1,
//       avg: 1350.5,
//       price: 1555.45,
//       net: "+15.18%",
//       day: "-1.60%",
//       isLoss: true,
//     },
//     {
//       name: "ITC",
//       qty: 5,
//       avg: 202.0,
//       price: 207.9,
//       net: "+2.92%",
//       day: "+0.80%",
//     },
//     {
//       name: "KPITTECH",
//       qty: 5,
//       avg: 250.3,
//       price: 266.45,
//       net: "+6.45%",
//       day: "+3.54%",
//     },
//     {
//       name: "M&M",
//       qty: 2,
//       avg: 809.9,
//       price: 779.8,
//       net: "-3.72%",
//       day: "-0.01%",
//       isLoss: true,
//     },
//     {
//       name: "RELIANCE",
//       qty: 1,
//       avg: 2193.7,
//       price: 2112.4,
//       net: "-3.71%",
//       day: "+1.44%",
//     },
//     {
//       name: "SBIN",
//       qty: 4,
//       avg: 324.35,
//       price: 430.2,
//       net: "+32.63%",
//       day: "-0.34%",
//       isLoss: true,
//     },
//     {
//       name: "SGBMAY29",
//       qty: 2,
//       avg: 4727.0,
//       price: 4719.0,
//       net: "-0.17%",
//       day: "+0.15%",
//     },
//     {
//       name: "TATAPOWER",
//       qty: 5,
//       avg: 104.2,
//       price: 124.15,
//       net: "+19.15%",
//       day: "-0.24%",
//       isLoss: true,
//     },
//     {
//       name: "TCS",
//       qty: 1,
//       avg: 3041.7,
//       price: 3194.8,
//       net: "+5.03%",
//       day: "-0.25%",
//       isLoss: true,
//     },
//     {
//       name: "WIPRO",
//       qty: 4,
//       avg: 489.3,
//       price: 577.75,
//       net: "+18.08%",
//       day: "+0.32%",
//     },
//   ];

//   tempHoldings.forEach((item) => {
//     let newHolding = new HoldingsModel({
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.day,
//       day: item.day,
//     });

//     newHolding.save();
//   });
//   res.send("Done!");
// });

// app.get("/addPositions", async (req, res) => {
//   let tempPositions = [
//     {
//       product: "CNC",
//       name: "EVEREADY",
//       qty: 2,
//       avg: 316.27,
//       price: 312.35,
//       net: "+0.58%",
//       day: "-1.24%",
//       isLoss: true,
//     },
//     {
//       product: "CNC",
//       name: "JUBLFOOD",
//       qty: 1,
//       avg: 3124.75,
//       price: 3082.65,
//       net: "+10.04%",
//       day: "-1.35%",
//       isLoss: true,
//     },
//   ];

//   tempPositions.forEach((item) => {
//     let newPosition = new PositionsModel({
//       product: item.product,
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day,
//       isLoss: item.isLoss,
//     });

//     newPosition.save();
//   });
//   res.send("Done!");
// });

app.get("/health", (req, res) => {
  res.status(200).json({ ok: true, message: "Backend is running." });
});

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  newOrder.save();

  res.send("Order saved!");
});

const server = app.listen(PORT, () => {
  console.log(`App started on port ${server.address().port}`);
  // Try to connect to the configured MongoDB. If that fails, attempt a local fallback
  // so the backend doesn't crash when the remote DB is unreachable.
  const connectWithFallback = async () => {
    const opts = { serverSelectionTimeoutMS: 10000 };
    // If using mongodb+srv, try using public DNS servers to resolve SRV records
    try {
      if (uri && uri.startsWith("mongodb+srv://")) {
        dns.setServers(["8.8.8.8", "1.1.1.1"]);
        let host = uri.replace("mongodb+srv://", "").split("/")[0];
        // strip credentials if present (user:pass@host)
        if (host.includes("@")) host = host.split("@").pop();
        const srvName = `_mongodb._tcp.${host}`;
        try {
          await new Promise((resolve, reject) => {
            dns.resolveSrv(srvName, (err, addresses) => {
              if (err) return reject(err);
              resolve(addresses);
            });
          });
          console.log("SRV DNS resolved for Atlas host, proceeding with SRV connection.");
        } catch (srvErr) {
          console.warn("SRV DNS resolution failed for", srvName, srvErr.message || srvErr);
          console.warn("Proceeding to attempt SRV connection anyway; if it fails, local fallback will be used.");
        }
      }
    } catch (e) {
      console.warn("DNS helper encountered an error:", e.message || e);
    }

    try {
      await mongoose.connect(uri, opts);
      console.log("DB started!");
      return;
    } catch (err) {
      console.error("Primary MongoDB connection failed:", err.message || err);
    }

    const fallback = "mongodb://127.0.0.1:27017/zerone";
    if (uri && uri !== fallback) {
      try {
        console.log("Attempting local MongoDB fallback...");
        await mongoose.connect(fallback, opts);
        console.log("DB started (local fallback)!");
      } catch (err2) {
        console.error("Local MongoDB fallback failed:", err2.message || err2);
        console.error("Continuing without DB connection — endpoints that use the DB may not work until a DB is available.");
      }
    } else {
      console.error("No alternate MongoDB URI available. Continuing without DB connection.");
    }
  };

  connectWithFallback();
});

server.on("error", (err) => {
  if (err && err.code === "EADDRINUSE") {
    console.error(`Port ${PORT} is already in use. Server not started.`);
  } else {
    console.error("Server error:", err);
  }
});
