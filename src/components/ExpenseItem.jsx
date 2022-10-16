import ExpenseDate from "./ExpenseDate"
import Card from "./Card"

const ExpenseItem = ({ title, amount, date }) => {
    return (
        <>
            <Card className="expense_item">
                <ExpenseDate date={date} />
                <div className="expense_item__description">
                    <h2>{title}</h2>
                    <div className="expense_item__price">$ {amount}</div>
                </div>
            </Card>
        </>
    )
}

export default ExpenseItem