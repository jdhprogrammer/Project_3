const router = require("express").Router();
const budgetsController = require("../../controllers/budgetsController");

// Matches with "/api/budgets"
router
  .route("/")
  .get(budgetsController.findAll)
  .post(budgetsController.create);

// Matches with "/api/budgets/:id"
router
  .route("/:id")
  .get(budgetsController.findById)
  .put(budgetsController.update)
  .delete(budgetsController.remove);

module.exports = router;
