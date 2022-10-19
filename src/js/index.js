const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const bookStorage = []

const books = [
    {   
        id: 0,
        name: 'nha gia kim',
        img: 'https://oldglorydesign.co.uk/wp-content/uploads/2020/05/book-01-free-img.png',
        price: 69000,
        cost: 69000
    },
    {   
        id: 1,
        name: 'Khoi nghiep 4.0',
        img: 'https://oldglorydesign.co.uk/wp-content/uploads/2020/05/book-01-free-img.png',
        price: 139000,
        cost: 139000
    },
    {
        id: 2,
        name: 'tu duy phan bien',
        img: 'https://oldglorydesign.co.uk/wp-content/uploads/2020/05/book-01-free-img.png',
        price: 850000,
        cost: 850000
    },
    {
        id: 3,
        name: 'tren duong bang',
        img: 'https://oldglorydesign.co.uk/wp-content/uploads/2020/05/book-01-free-img.png',
        price: 800000,
        cost: 800000
    },
]
var sum = 0

window.App = {
    setLocal: function(sum) {
        localStorage.setItem('bookStorage', JSON.stringify(bookStorage))
        localStorage.setItem('sum', JSON.stringify(sum))
    } ,
    handleEvent: function() {
    },
    handleClickBuyBtn: function(event, id) {
        event.preventDefault()
        const check = bookStorage.find(book => book.id === id)
        


        if(check === undefined) {
            const newBook = { ...books[id], count: 1 }

            bookStorage.push(newBook)

            sum += books[id].price
        }
        else {
            bookStorage[check.id].count++
            bookStorage[check.id].cost = bookStorage[check.id].count *  bookStorage[check.id].price
            sum += bookStorage[check.id].price
        }

        this.setLocal(sum)

    },
    render: function() {
        const htmls = books.map((book, id) => {
            return `
            <form class="book-item" onSubmit="window.App.handleClickBuyBtn(event, ${id})">
                <img src='${book.img}' alt="book" class="book-img">
                <div class="book-name">${book.name}</div>
                <div class="book-price">${book.price}</div>
                <button class="buy-btn">buy</button>
            </form>


            `

        })  
        
        
        const list = $('.book-list').innerHTML = htmls.join('')
    },
    start: function() {
        this.render()

    }

}

App.start()