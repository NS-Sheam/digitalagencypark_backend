import { AuthServices } from "./auth.service";

const login = async (req, res) => {
  try {
    const result = await AuthServices.login(req.body);

    res.status(200).json({
      status: 200,
      message: "Login success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: 400,
      message: error.message,
    });
  }
};

export const AuthControllers = {
  login,
};
