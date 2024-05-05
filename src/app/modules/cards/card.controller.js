import { cardService } from "./card.service.js";

const createCard = async (req, res) => {
  try {
    // const { card: cardData } = req.body;
    console.log("file:", req.file);
    console.log(req.body.data || "no data found");

    //   const result = await cardService.createCardInDB(cardData);
    //   res.status(200).json({
    //     success: true,
    //     message: "card is created succesfully",
    //     data: result,
    //   });
    //   console.log(result);
  } catch (err) {
    console.log(err);
  }
};

const getAllCards = async (req, res) => {
  try {
    const result = await cardService.getAllCardFromDB();

    res.status(200).json({
      success: true,
      message: "sliders are retrieved succesfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const cardController = {
  createCard,
  getAllCards,
};
