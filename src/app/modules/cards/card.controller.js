import { cardService } from "./card.service.js";

const createCard = async (req, res) => {
  try {
    const { card: cardData } = req.body;
    const result = await cardService.createCardInDB(req.file, cardData);
    res.status(200).json({
      success: true,
      message: "card is created succesfully",
      data: result,
    });
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

const getAllCards = async (req, res) => {
  try {
    const result = await cardService.getAllCardFromDB();

    res.status(200).json({
      success: true,
      message: "cards are retrieved succesfully",
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
