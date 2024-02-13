type CardItemTypes = {
  itemName: string;
  paragraphs: string[];
  image: string;
  isReversed?: boolean;
};

export const cardItems: CardItemTypes[] = [
  {
    itemName: "Temperature",
    paragraphs: ["This is a placeholder paragraph."], // Placeholder paragraph
    image: "path/to/your/image.jpg", // Placeholder image path
    // isReversed is optional, so it does not need to be included
  }
  // Add more items here as needed
];
