import express from 'express';
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Belajar membuat REST API dengan Express itu menyenangkan sekali lho");
});

export default router;
