// Read Books TypeScript

type BookTitle = string;

interface Book {
  title: BookTitle;
  isRead: boolean;
}

const books: Book[] = [
  { title: "La verdad sobre el caso Harry Quebert", isRead: true },
  { title: "Cinco cerditos", isRead: false },
  { title: "La niebla y la doncella", isRead: true },
];

const isBookRead = (books: Book[], titleToSearch: BookTitle): boolean =>
  books.find((book: Book) => book.title === titleToSearch)?.isRead || false;

console.log(isBookRead(books, "La verdad sobre el caso Harry Quebert"));
console.log(isBookRead(books, "Cinco cerditos"));
console.log(isBookRead(books, "Los Pilares de la Tierra"));
