import express from "express";

const router = express.Router();

router.post("/jointeam", (req, res) => {
  const { name } = req.body;
  res.json({
    message: `${name}, thank you for showing your interest in joining our team!`,
  });
});

router.post("/contactus", (req, res) => {
  const { firstName } = req.body;
  res.json({
    message: `${firstName}, Our team will get back to you within 24 hours.`,
  });
});

export default router;
