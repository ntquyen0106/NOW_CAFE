require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Kết nối MongoDB
if (!process.env.MONGO_URI) {
  console.error("❌ MONGO_URI environment variable is not defined");
  process.exit(1);
}

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// Định nghĩa Schema và Model
const AccountSchema = new mongoose.Schema({
  userName: String,
  passWord: String,
  userID: String,
});

const Account = mongoose.model("Account", AccountSchema, "Account");



app.post("/api/login", async (req, res) => {
  const { userName, passWord } = req.body;

  try {
    // 1️⃣ Tìm user theo userName (KHÔNG tìm theo passWord)
    const user = await Account.findOne({ userName, passWord });

    console.log("🔍 Tìm User:", user);
    if (!user) {
      return res.status(401).json({ success: false, message: "Sai tài khoản hoặc mật khẩu" });
    }

    // 2️⃣ So sánh mật khẩu nhập vào với mật khẩu đã hash trong DB
    const isMatch = await bcrypt.compare(passWord, user.passWord);
    
    console.log("🔍 Mật khẩu nhập vào:", passWord);
    console.log("🔍 Mật khẩu trong DB:", user.passWord);
    console.log("🔍 Kết quả so sánh:", isMatch);

    // if (!isMatch) {
    //   return res.status(401).json({ success: false, message: "Sai tài khoản hoặc mật khẩu" });
    // }

    // 3️⃣ Nếu đúng, trả về thành công
    res.json({ success: true, message: "Đăng nhập thành công", user });

  } catch (error) {
    console.error("❌ Lỗi API:", error);
    res.status(500).json({ message: "Lỗi server", error });
  }
});


// Định nghĩa Schema và Model cho sản phẩm
const ProductSchema = new mongoose.Schema({
  sanpham_id: String,
  name: String,
  price: Number,
  category: String,
  image: String,
  description: String,
  rate: Number,
  like: Number,
  quantity: Number,
});

const Product = mongoose.model("Product", ProductSchema, "Product");

// API lấy danh sách sản phẩm
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find({});
    console.log("📌 Dữ liệu từ MongoDB:", products);
    res.json(products);
  } catch (error) {
    console.error("❌ Lỗi API:", error);
    res.status(500).json({ message: "Lỗi server", error });
  }
});

 
// Chạy server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));