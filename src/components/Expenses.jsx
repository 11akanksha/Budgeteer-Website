import { useState } from "react";
import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";

const currYr = new Date().getFullYear();

const Expenses = ({ expenses }) => {
    const [selectedYear, setSelectedYear] = useState(currYr);

    const yearSelectHandler = (year) => {
        setSelectedYear(year);
    }
    const filteredExpenses = expenses.filter(expense => {
        return expense.date.getFullYear().toString() === selectedYear;
    })
    return (
        <>

            <Card className="expenses">
                <ExpensesFilter onYearSelect={yearSelectHandler} chosenYear={selectedYear} />
                <ExpensesChart expenses={filteredExpenses} />
                {
                    filteredExpenses.length === 0 ?
                        <h2 className="expenses-list__fallback">No expenses found!</h2> :
                        <ul className="expenses-list">
                            {filteredExpenses.map((ele) => {
                                const { title, amount, date, id } = ele;
                                return (
                                    <ExpenseItem
                                        key={id}
                                        title={title}
                                        amount={amount}
                                        date={date}
                                    />
                                );
                            })}
                        </ul>
                }
            </Card>

        </>
    )
}

export default Expenses