const TestService = require('../services/TestService');

class TestController {
  async getAllTests(req, res) {
    try {
      const {limit, page} = req.query
      const tests = await TestService.getAllTests(limit, page);
      res.json({
        success: true,
        tests,
      });
    } catch (e) {
      console.info(e);
      res.status(400).json({
        success: false,
        message: e.message,
      });
    }
  }
  async getTest(req, res) {
    try {
      const { id } = req.params;
      const test = await TestService.getTest(id);
      res.json({
        success: true,
        test,
      });
    } catch (e) {
      console.info(e);
      res.status(400).json({
        success: false,
        message: e.message,
      });
    }
  }

  async createTest(req, res) {
    try {
      const { body, title } = req.body;
      const test = await TestService.createTest(body, title);
      res.status(201).json({
        success: true,
        test,
      });
    } catch (e) {
      console.info(e);
      res.status(400).json({
        success: false,
        message: e.message,
      });
    }
  }

  async deleteTest(req, res) {
    try {
      const { id } = req.params;
      await TestService.deleteTest(id);
      res.json({success: true});
    } catch (e) {
      console.info(e);
      res.status(400).json({
        success: false,
        message: e.message,
      });
    }
  }

  async updateTest(req, res) {
    try {
      const { body, title } = req.body;
      const { id } = req.params;
      const test = await TestService.updateTest(id, body, title);
      res.status(200).json({
        success: true,
        test,
      });
    } catch (e) {
      console.info(e);
      res.status(400).json({
        success: false,
        message: e.message,
      });
    }
  }

  async replaceTest(req, res) {
    try {
      const { body, title } = req.body;
      const { id } = req.params;
      const test = await TestService.replaceTest(id, body, title);
      res.status(200).json({
        success: true,
        test,
      });
    } catch (e) {
      console.info(e);
      res.status(400).json({
        success: false,
        message: e.message,
      });
    }
  }
}

module.exports = new TestController();
