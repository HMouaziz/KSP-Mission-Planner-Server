 const handleRequest = (requestHandler) => async (req, res, next) => {
  try {
    const data = await requestHandler(req, res, next);

    if (!data || typeof data.status !== 'number' || typeof data.body !== 'object') {
      throw new Error(`Invalid response format from request handler: ${JSON.stringify(data)}`);
    }

    return res.status(data.status).json(data.body);
  } catch (error) {
    next(error);
  }
}

 module.exports = { handleRequest }