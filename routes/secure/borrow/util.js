export function reformatBorrow(borrow, Users, Books) {
    return borrow.map(val => {
        val.User = Users[val.userid];
        val.Title = Books[val.bookid]
        return val;
    });
}

/* The sequence of the parameters is important 
when the callee_function is passed as callback to another caller_function 
caller_function(callee_function.bind(this, parameter_not_provided_by_caller_function)) */
export function collectionReducer(fieldname, collection) {
    return collection.reduce((acc, val) => (
        { ...acc, [val.id]: val[fieldname] }
    ), {});
}
    // console.log('util.js \n', collection, '\n', fieldname);
    // return {
    //     '64d4ab153be35d3b8f447533': 'American Prometheus',
    //     '64d68eece2e385b2a96747b9': 'The Unfit Heiress',
    //     '64d6962785fcb24a404d1db6': 'Atomic Habits',
    //     '64d6984785fcb24a404d1db7': 'The Diary of a Young Girl',
    //     '64d69d7e85fcb24a404d1db8': 'The Hobbit'
    //   }
// }


// .then(book => book.reduce((acc, val, idx) => {
//     // const { id, Title } = val;
//     // let obj = {}
//     // obj[id] = Title;
//     // return { ...acc, ...obj };
//     return { ...acc, [val.id]: val.Title }
// }, {})),

        
// .then(user => user.reduce((acc, val) => {
//     return { ...acc, [val.id]: val.username }
// }, {})),

// .then(borrow => borrow.map(val => {
//     val.User = Users[val.userid];
//     val.Title = Books[val.bookid]
//     return val;
// }));
// .then(async borrowList => await borrowList.map(async borrow => {
//     let book = await findBookProjectionsById(borrow.bookid, { Title: 1 }),
//         User = await findUserById(borrow.userid);
//     borrow.bookTitle = book.Title;
//     borrow.username = User.username;
//     return borrow;
// }));

// export let dummyBorrowList = [
//     {
//         "id": "64d56fcb6c4a3a9438fa7a8a",
//         "userid": "64d4d13c6b33e43d8174c228",
//         "bookid": "64d4ab153be35d3b8f447533",
//         "claim_date": "2023-11-06",
//         "delay_date": "2023-11-20",
//         "claim_days": "14"
//     },
//     {
//         "id": "64d56fcb6c4a3a9438fa7a8a",
//         "userid": "64d4d13c6b33e43d8174c228",
//         "bookid": "64d4ab153be35d3b8f447533",
//         "claim_date": "2023-11-08",
//         "delay_date": "2023-11-20",
//         "claim_days": "12"
//     }
// ]

