import { useState } from "react";
import ExpenseForm from "./ExpenseForm"


const NewExpense = (props) => {
    const [edit, setEdit] = useState(false);
    const saveExpenseHandler = (newExpense) => {
        const expenseToBeAdded = {
            ...newExpense,
            id: new Date().getTime().toString()
        };
        props.onAddExpense(expenseToBeAdded);
        setEdit(false);
    };

    const startEditingHandler = () => {
        setEdit(true);
    }

    const stopEditingHandler = () => {
        setEdit(false);
    }

    return (
        <div className="new-expense">
            {
                edit ?
                    <ExpenseForm
                        onSaveExpense={saveExpenseHandler}
                        onCancel={stopEditingHandler}
                    />
                    :
                    <button onClick={startEditingHandler}>Add New Expense</button>
            }
        </div>
    )
}

export default NewExpense