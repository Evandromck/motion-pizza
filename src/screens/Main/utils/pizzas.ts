import { ImageSourcePropType } from "react-native";

interface PricesProps {
  [key: string]: number;
}

interface PizzaProps {
  name: string;
  desc: string;
  prices: PricesProps;
  pic: ImageSourcePropType;
}

export const pizzas: Array<PizzaProps> = [
  {
    name: "Pizza",
    desc: "Escolha o seu favorito",
    prices: { s: 0, m: 0, l: 0 },
    pic: require("../../../assets/empty.png"),
  },
  {
    name: "Italiana",
    desc: "Tomate seco e mozzarella",
    prices: { s: 28.5, m: 35.5, l: 59.5 },
    pic: require("../../../assets/itallian-pizza.png"),
  },
  {
    name: "Vegetariana",
    desc: "legumes frescos e queijo",
    prices: { s: 25.6, m: 28.50, l: 45.60 },
    pic: require("../../../assets/veggie-pizza.png"),
  },
  {
    name: "Grega",
    desc: "pizza picante com mussarela",
    prices: { s: 27.5, m: 32.5, l: 72.5 },
    pic: require("../../../assets/greek-pizza.png"),
  },
  {
    name: "Calabresa",
    desc: "pizza calabresa com catupiry",
    prices: { s: 27.5, m: 32.5, l: 72.5 },
    pic: require("../../../assets/calabresa-catupiry.png"),
  },
];
