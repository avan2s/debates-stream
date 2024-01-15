

const myShapes = {
    RECTANGLE: "RECTANGLE2",
    SQUARE: "SQUARE2"
} as const;

type TypeOfMyShape = typeof myShapes;

const o1: TypeOfMyShape = {
    RECTANGLE: "RECTANGLE2",
    SQUARE: "SQUARE2"
}

type KeyOfTypeOf = keyof TypeOfMyShape; // These are the keys of the tupe

type ValueForKeyOfTypeOf = TypeOfMyShape[KeyOfTypeOf]; // Theis type  are the values related to their specfic keys.


// So together in short , you can do:
type MyShape = typeof myShapes [keyof typeof myShapes];



