let booksData = [];

// Get all Books => /api/books
exports.getAllBooks = (req, res) => {
    const data = {
        message: "Sucessfull",
        result: booksData,
        count: booksData.length
    };
    res.status(200).json(data);
};

// Create a Book => /api/create-book
exports.createBook = (req, res) => {
    const uniqueId = Math.random().toString(16).slice(2);
    const newBook = {
        ...req.body,
        id: uniqueId
    };

    booksData.push(newBook);
    res
        .status(200)
        .json({ message: "Sucessfully created the book", result: newBook });
};

