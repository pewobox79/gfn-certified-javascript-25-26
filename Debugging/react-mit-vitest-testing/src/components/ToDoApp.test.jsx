import { describe, expect, test } from "vitest";
import ToDoApp from "./ToDoApp";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

describe("Test ToDoApp", () => {

    test("renders title", () => {
        render(<ToDoApp />) //virtueller aufbau der DOM mit jsdom
        expect(screen.getByText("ToDo App")).toBeInTheDocument()
    })

    test("neues ToDo hinzufügen",()=>{
        render(<ToDoApp/>)

        /**
         * wir müssen nun in der Testumgebung das event eines users 
         * simulieren. dazu nutzen wir das konzept wie bei DOM MANIPULATION. 
         * wir holen elemente in den test() und triggern entsprechend der user abfolge.
         */

        //1. get elements
        const input = screen.getByPlaceholderText("add new todo")
        const button = screen.getByText("Add new Todo")
        const testInputValue = "auto waschen"

        //2. simulation von onChange() bei input feld
        fireEvent.change(input, {
            target:{
                value: testInputValue
            }
        })

        //3. simulation von onClick() auf Button
        fireEvent.click(button)


        // 4. prüfen des resultats
        expect(screen.getByText(testInputValue)).toBeInTheDocument()

        // unmounting von gerenderter komponente um Memory zu schonen
        cleanup() 

    })
})