const home = async (req, res) => {
  try {
    res.status(200).send("Hello Auth from Controller!");
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
    console.log(req.body);
    res.status(200).send("Welcome to Registration!");
  } catch (error) {
    res.status(400).send({ msg: error });
  }
};

module.exports = { home, register };
