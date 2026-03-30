export type searchparam = {
  query: string;
  category: string;
  minprice: string;
  maxprice: string;
};

export type item = {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
};

export type goal = {
  id: number;
  name: string;
  slug: string;
  price: number;
  categoryIds: number[];
  description: string;
  highlights: string[];
  productIds: number[];
};

export type Category = {
  id: number;
  name: string;
  slug: string;
  description: string;
  image: string;
};

export type Categories = Category[];

export type product = {
  _id: string;  // ✅ ADDED
  id: number;
  name: string;
  category_id: number;
  price: number;
  description: string;
  image: string;
  stock: number;
};

export type NutritionFacts = {
  servingSize: string;
  servingsPerContainer: number;
  protein: string;
  carbs: string;
  fat: string;
  calories: number;
};

export type LongDescriptionSection = {
  title: string;
  content: string;
};

export type LongDescription = {
  intro: string;
  sections: LongDescriptionSection[];
  conclusion: string;
};

export type ProductById = {
  _id: string;  // ✅ ADDED
  id: string;
  name: string;
  brand: string;
  category: string;
  subCategory: string;
  price: number;
  stock: number;
  rating: number;
  reviewsCount: number;
  images: string[];
  badges: string[];
  shortDescription: string;
  highlights: string[];
  longDescription: LongDescription;
  nutritionFacts: NutritionFacts;
  ingredients: string[];
};

export type products = product[];