const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const books = JSON.parse(localStorage.getItem('bookStorage'))
var sum = JSON.parse(localStorage.getItem('sum'))

window.App = {
    handleEvent: function() {
    },
    handleChangeCount: function (event, id) {
        const book = books.find(book => book.id == id) 
        var plus = true
        const newPrice = book.price * event.target.value

        if(newPrice < book.cost) {
            plus = false
        }

        books[book.id].cost = newPrice 
        books[book.id].count = Number(event.target.value)

        if(plus){
            sum += book.price
        }
        else {
            sum -= book.price
        }

        localStorage.setItem('bookStorage', JSON.stringify(books))
        localStorage.setItem('sum', JSON.stringify(sum))

        this.render()
    },
    render: function() {
        const htmls = books.map((book)=>{
             
            return `
            <tr>
                <td>${book.name}</td>
                <td>${book.price}</td>
                <td>
                    <input type="number" min='0' value="${book.count}" onChange='window.App.handleChangeCount(event, id=${book.id})' >
                </td>
                <td>${book.cost}</td>
            </tr>
            `
        })

        const bookSum = `
            <tr>
                <th>Tổng tiền</th>
                <th></th>
                <th>${sum}</th>
            </tr>
        `
    
    
        $('.books').innerHTML = htmls.join('')
        $('.books-sum').innerHTML = bookSum
       
    },
    start: function() {
        this.render()

    }

}

App.start()

